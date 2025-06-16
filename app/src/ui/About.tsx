import "./About.css";

export const About = () => (
  <div className="about">
    <p>
      <span className="name">RISCify</span> - online RISC-V disassembler.
    </p>
    <p>
      <span className="special">GitHub:</span>{" "}
      <a href="https://github.com/rudolf101/RISCify">
        https://github.com/rudolf101/RISCify
      </a>
    </p>
    <p className="special">Authors:</p>
    <ul>
      <li>Akim Byrkov</li>
      <li>Andrey Bogdanov</li> <li>Andrey Oleynikov</li>
      <li>Vladislav Kasimov</li>
      <li>Elizaveta Konovkina</li>
      <li>Roman Deev</li>
      <li>Stepan Avdeev</li>
    </ul>
  </div>
);
