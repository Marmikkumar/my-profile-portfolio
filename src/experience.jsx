import "./styles.css";

export default function Experience() {
  return (
    <div className="experience-heading" id="Experience">
      <h2>Experience</h2>
      <p>These are the technology I've worked with :-</p>

      <div className="experience-content">
        <div className="exp-box box-1">
          <p>HTML</p>
          <i className="fa-brands fa-html5"></i>
        </div>
        <div className="exp-box box-2">
          <p>CSS</p>
          <i className="fa-brands fa-css3-alt"></i>
        </div>
        <div className="exp-box box-3">
          <p>Javascript</p>
          <i className="fa-brands fa-js"></i>
        </div>
        <div className="exp-box box-4">
          <p>React</p>
          <i className="fa-brands fa-react"></i>
        </div>
        <div className="exp-box box-5">
          <p>Nodejs</p>
          <i className="fa-brands fa-node"></i>
        </div>
      </div>
    </div>
  );
}
