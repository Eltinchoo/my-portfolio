import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me-general-container">
      <h2 className="about-me-title">About me</h2>
      <p className="about-me-text">
        I'm Paraguayan and I love programming and technology. I'm also a
        professional violinist. I'm someone who gets what is proposed since I
        think achievements are results of decisions are made and goals that each
        one proposes. <br/> One of my professional goals is to apply my knowledge and
        experience to solve problems and provide effective solutions
      </p>
      <div className="aboute-me-container">
        <div className="education-experience">
          <div className="education">
            <h2 className="education-title">
              Education <i className="fa-solid fa-graduation-cap"></i>
            </h2>
            <h3 className="academlo">Academlo - 2022</h3>
            <h4 className="title-academlo">
              "Front-end Development JavaScript Vanilla"
            </h4>
            <p className="text-academlo">
              Front-end developer skills, from HTML, CSS, JS, react, Node.js in
              progres, teamwork and Git version control and Github
            </p>
          </div>
          <div className="experience">
            <h2 className="experience-title">
              Experience <i className="fa-solid fa-user-check"></i>
            </h2>
            <h3 className="academlo year">Academlo - 2022</h3>
            <h4 className="title-academlo">
              "Front-end Development with React"
            </h4>
            <p className="text-experience">
              I have developed projects with JavaScript Vanilla, HTML and CSS,
              also using react together with libraries like react-router and
              redux. Also developing teamwork skills with completed projects.
            </p>
          </div>
        </div>
        <div className="skills-container">
          
          <div className="skills">
          <h2 className="skills-title strong-skill-title">Skills</h2>
            <div className="tech-icon">
              <b className="brand">
                HTML <i className="fa-brands fa-html5"></i>
              </b>

              <b className="brand">
                CSS <i className="fa-brands fa-css3-alt"></i>
              </b>

              <b className="brand">
                JavaScript <i className="fa-brands fa-square-js"></i>
              </b>


              <b className="brand">
                React <i className="fa-brands fa-react"></i>
              </b>
              <b className="brand">
                Node.js <i className="fa-brands fa-node-js"></i>
              </b>
              <b className="brand">
                Git <i className="fa-brands fa-git-alt"></i>
              </b>
              <b className="brand">
                Github <i className="fa-brands fa-github"></i>
              </b>
              <b className="brand">
                Bootstrap <i className="fa-brands fa-bootstrap"></i>{" "}
              </b>

            </div>
          </div>

          
          <div className="soft-skills">
          <h2 className="skills-title soft-skill-title">Soft skills</h2>
          <div className="skills-icon">
          <b className="soft-skills-title">
              Creative <i className="fa-solid fa-lightbulb"></i>
            </b>

            <b className="soft-skills-title">
              Teamwork <i className="fa-solid fa-users"></i>
            </b>

            <b className="soft-skills-title">
              Patience <i className="fa-solid fa-heart-circle-plus"></i>
            </b>

            <b className="soft-skills-title">
              Communication <i className="fa-solid fa-comments"></i>
            </b>

            <b className="soft-skills-title">
              Fast learning <i className="fa-solid fa-bolt"></i>
            </b>
            <b className="soft-skills-title">
              Problem resolution <i className="fa-solid fa-circle-check"></i>
            </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
