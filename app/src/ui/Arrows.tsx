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

const instructions2jumps = (instructions: SimilarInstructions[]): LocalJump[] => {
  return instructions.flatMap((e, i) => {
      if (e.instructions.length < 1) {
        return [];
      }
      const jump = e.instructions[0].actualJump;
      if (jump.label === "concrete") {
        return [{ from: i, to: i + jump.distance, broken: false as boolean }];
      }
      if (jump.label === "between") {
        return [{ from: i, to: i + jump.distance, broken: true as boolean }];
      }
      return [];
    });
}

// A pretty straightforward solution for interval coloring problem
// Probably O(N^3) where N is number of jumps
const packJumps = (jumps: LocalJump[]): LevelledJump[] => {
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

const Marker = (props: { id: string; color: string }) => (
  <marker
    id={props.id}
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
      stroke={props.color}
      strokeLinejoin="round"
      strokeLinecap="round"
    ></polyline>
  </marker>
);

const JumpElement = (props: {
  width: number;
  fontSize: number;
  lineHeight: number;
  jump: LevelledJump;
  current: boolean;
}) => {
  let x1 = props.width - 1;
  let x2 = x1 - props.fontSize * props.jump.level;
  let y1 = props.jump.from * props.lineHeight + props.lineHeight / 2;
  let y2 = props.jump.to * props.lineHeight + props.lineHeight / 2;
  return (
    <React.Fragment key={props.jump.from}>
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
          !props.current
            ? "var(--color-comment)"
            : props.jump.broken
            ? "var(--color-dots)"
            : "currentColor"
        }
        markerEnd={`url(${
          !props.current
            ? "#head-grey"
            : props.jump.broken
            ? "#head-red"
            : "#head-green"
        })`}
        points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
      />
    </React.Fragment>
  );
};

export const Arrows = (props: {
  instructions: SimilarInstructions[];
  current?: number;
  skip: { from: number; length: number };
}) => {
  const fontSize = useMemo(
    () => parseInt(window.getComputedStyle(document.body)["fontSize"]),
    []
  );
  const lineHeight = fontSize * 1.3;
  const height = lineHeight * (props.instructions.length + props.skip.length);

  const packedJumps = useMemo(() => {
    const jumps = instructions2jumps(props.instructions)
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

  return (
    <svg
      className="arrows"
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <defs>
        <Marker id="head-green" color="currentColor" />
        <Marker id="head-red" color="var(--color-dots)" />
        <Marker id="head-grey" color="var(--color-comment)" />
      </defs>
      {packedJumps
        .filter((jump) => jump.from !== props.current)
        .map((jump) => (
          <JumpElement
            width={width}
            lineHeight={lineHeight}
            fontSize={fontSize}
            jump={jump}
            current={!props.current}
          />
        ))}
      {packedJumps
        .filter((jump) => jump.from === props.current)
        .map((jump) => (
          <JumpElement
            width={width}
            lineHeight={lineHeight}
            fontSize={fontSize}
            jump={jump}
            current={true}
          />
        ))}
    </svg>
  );
};
