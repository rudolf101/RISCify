import React, { useMemo } from "react";
import { SimilarInstructions } from "../kernel/Disassembler";

import "./Arrows.css";

type LocalJump = {
  from: number;
  to: number;
  broken: boolean;
};
export type LevelledJump = LocalJump & {
  level: number;
};
export const packJumps = (jumps: LocalJump[]): LevelledJump[] => {
  const sortedJumps = jumps.sort((j1, j2) => {
    const d1 = Math.abs(j1.from - j1.to);
    const d2 = Math.abs(j2.from - j2.to);
    if (d1 < d2) {
      return -1;
    }
    if (d2 < d1) {
      return 1;
    }
    return j1.from - j2.from;
  });
  const result: LevelledJump[] = new Array(jumps.length);
  const length = jumps.reduce((a, b) => Math.max(a, b.from, b.to), 0);
  const levels: boolean[][] = new Array(length)
    .fill(null)
    .map((_) => new Array(jumps.length).fill(false));
  for (const [i, { from, to, broken }] of sortedJumps.entries()) {
    let currentLevel = 0;
    const _from = Math.min(from, to);
    const _to = Math.max(from, to);
    const usedLevels = levels
      .slice(_from, _to + 1)
      .reduce(
        (a, b) => a.map((e, i) => e || b[i]),
        new Array(Math.abs(_from - _to)).fill(false)
      );
    for (const [i, level] of usedLevels.entries()) {
      if (!level) {
        levels.slice(_from, _to + 1).forEach((a) => {
          a[i] = true;
        });
        currentLevel = i + 1;
        break;
      }
    }
    result[i] = { from, to, broken, level: currentLevel };
  }
  return result;
};

export const Arrows = (props: {
  instructions: SimilarInstructions[];
  current?: number;
  skip: { from: number; length: number };
}) => {
  const fontSize = parseInt(window.getComputedStyle(document.body)["fontSize"]);
  const lineHeight = fontSize * 1.3;
  const height = lineHeight * (props.instructions.length + props.skip.length);

  const packedJumps = useMemo(() => {
    const jumps = props.instructions.flatMap((e, i) => {
      if (e.instructions.length < 1) {
        return [];
      }
      const jump = e.instructions[0].actualJump;
      if (jump.label === "concrete") {
        return [{ from: i, to: i + jump.distance, broken: false }];
      }
      if (jump.label === "between") {
        return [{ from: i, to: i + jump.distance, broken: true }];
      }
      return [];
    });
    const packedJumps = packJumps(jumps);
    packedJumps.reverse();

    const skippedPackedJumps = packedJumps.map(({ from, to, ...rest }) => ({
      from: from > props.skip.from ? from + props.skip.length : from,
      to: to > props.skip.from ? to + props.skip.length : to,
      ...rest,
    }));

    return skippedPackedJumps;
  }, [props.instructions, props.skip]);

  const width =
    (packedJumps.reduce((a, b) => Math.max(a, b.level), 0) + 1) * fontSize;

  const renderJump = (jump: LevelledJump) => {
    let x1 = width - 1;
    let x2 = x1 - fontSize * jump.level;
    let y1 = jump.from * lineHeight + lineHeight / 2;
    let y2 = jump.to * lineHeight + lineHeight / 2;
    return (
      <React.Fragment key={jump.from}>
        <polyline
          fill="none"
          strokeWidth={8}
          stroke="var(--color-bg)"
          points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
        />
        <polyline
          fill="none"
          strokeWidth={2}
          stroke={
            props.current && props.current !== jump.from
              ? "var(--color-comment)"
              : jump.broken
              ? "var(--color-dots)"
              : "currentColor"
          }
          markerEnd={`url(${
            props.current && props.current !== jump.from
              ? "#head-grey"
              : jump.broken
              ? "#head-red"
              : "#head-green"
          })`}
          points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
        />
      </React.Fragment>
    );
  };

  return (
    <svg
      className="arrows"
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <defs>
        <marker
          id="head-green"
          orient="auto"
          markerUnits="userSpaceOnUse"
          markerWidth="9"
          markerHeight="16"
          refX="8"
          refY="8"
        >
          <polyline
            strokeWidth="2"
            points="1,1 8,8 1,15"
            fill="none"
            stroke={"currentColor"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
        <marker
          id="head-red"
          orient="auto"
          markerUnits="userSpaceOnUse"
          markerWidth="9"
          markerHeight="16"
          refX="8"
          refY="8"
        >
          <polyline
            strokeWidth="2"
            points="1,1 8,8 1,15"
            fill="none"
            stroke={"var(--color-dots)"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
        <marker
          id="head-grey"
          orient="auto"
          markerUnits="userSpaceOnUse"
          markerWidth="9"
          markerHeight="16"
          refX="8"
          refY="8"
        >
          <polyline
            strokeWidth="2"
            points="1,1 8,8 1,15"
            fill="none"
            stroke={"var(--color-comment)"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
      </defs>
      {packedJumps
        .filter((jump) => jump.from !== props.current)
        .map(renderJump)}
      {packedJumps
        .filter((jump) => jump.from === props.current)
        .map(renderJump)}
    </svg>
  );
};
