import "./resumeinput.css";
import React, { useState } from "react";
function ResumeInput() {
  const [nameinput, setNameinput] = useState("");
  const [mobileinput, setMobileinput] = useState("");
  const [githubinput, setGithubinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [linkedininput, setLinkedininput] = useState("");
  const [skillsinput, setSkillsinput] = useState("");
  const [collegeinput, setCollegeinput] = useState("");
  const [disciplineinput, setDisciplineinput] = useState("");
  const [frominput, setFrominput] = useState("");
  const [degreeinput, setDegreeinput] = useState("");
  const [marksinput, setMarksinput] = useState("");
  const [toinput, setToinput] = useState("");
  const [titleinput, setTitleinput] = useState("");
  const [descriptioninput, setDescriptioninput] = useState("");
  const [linkinput, setLinkinput] = useState("");
  const [hobbiesinput, setHobbiesinput] = useState("");
  const handleName = (e) => {
    setNameinput(e.target.value);
  };
  const handleMobile = (e) => {
    setMobileinput(e.target.value);
  };
  const handleGithub = (e) => {
    setGithubinput(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailinput(e.target.value);
  };
  const handleLinkedin = (e) => {
    setLinkedininput(e.target.value);
  };
  const handleSkills = (e) => {
    setSkillsinput(e.target.value);
  };
  const handleCollege = (e) => {
    setCollegeinput(e.target.value);
  };
  const handleDiscipline = (e) => {
    setDisciplineinput(e.target.value);
  };
  const handleFrom = (e) => {
    setFrominput(e.target.value);
  };
  const handleDegree = (e) => {
    setDegreeinput(e.target.value);
  };
  const handleMarks = (e) => {
    setMarksinput(e.target.value);
  };
  const handleTo = (e) => {
    setToinput(e.target.value);
  };
  const handleTitle = (e) => {
    setTitleinput(e.target.value);
  };
  const handleDescription = (e) => {
    setDescriptioninput(e.target.value);
  };
  const handleHobbies = (e) => {
    setHobbiesinput(e.target.value);
  };

  const handleLinkinput = (e) => {
    setLinkinput(e.target.value);
  };

  return (
    <div className="bg">
      <div className="sidebar">
        <h2 className="heading">CAREER TRACK</h2>
        <h3 className="username">User Name</h3>
        <h3 className="resume">CREATE RESUME</h3>
      </div>
      <div className="main">
        <h1 className="hdres">Let's create your resume</h1>
        <h2 className="hdres1">Fill in the details to get started</h2>
        <div className="personal">
          <div className="personal1">
            <div className="fullpersonal">
              <div className="leftpart">
                <h3 className="personalhd">PERSONAL DETAILS</h3>
                <div className="name">
                  <h4 className="namehd">Name</h4>
                  <input
                    className="nameinput"
                    onChange={handleName}
                    type="text"
                    value={nameinput}
                  />
                </div>
                <div className="mobile">
                  <h4 className="mobilehd">Mobile</h4>
                  <input
                    className="mobileinput"
                    onChange={handleMobile}
                    type="text"
                  />
                </div>
                <div className="github">
                  <h4 className="githubhd">GitHub</h4>
                  <input
                    className="githubinput"
                    onChange={handleGithub}
                    type="text"
                  />
                </div>
              </div>
              <div className="rightpart">
                <div className="email">
                  <h4 className="emailhd">Email</h4>
                  <input
                    className="emailinput"
                    onChange={handleEmail}
                    type="text"
                  />
                </div>
                <div className="linkedin">
                  <h4 className="linkedinhd">LinkedIn</h4>
                  <input
                    className="linkedininput"
                    onChange={handleLinkedin}
                    type="text"
                  />
                </div>
                <div className="skills">
                  <h4 className="skillshd">Skills</h4>
                  <input
                    className="skillsinput"
                    onChange={handleSkills}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* */}

        <div className="personal">
          <div className="personal1">
            <div className="fullpersonal">
              <div className="leftpart">
                <h3 className="personalhd">EDUCATION</h3>
                <div className="name">
                  <h4 className="namehd">College</h4>
                  <input
                    className="collegeinput"
                    onChange={handleCollege}
                    type="text"
                  />
                </div>
                <div className="mobile">
                  <h4 className="mobilehd">Discipline</h4>
                  <input
                    className="disciplineinput"
                    onChange={handleDiscipline}
                    type="text"
                  />
                </div>
                <div className="github">
                  <h4 className="githubhd">From</h4>
                  <input
                    className="frominput"
                    onChange={handleFrom}
                    type="text"
                  />
                </div>
              </div>
              <div className="rightpart" style={{}}>
                <div className="email">
                  <h4 className="emailhd">Degree</h4>
                  <input
                    className="degreeinput"
                    onChange={handleDegree}
                    type="text"
                  />
                </div>
                <div className="linkedin">
                  <h4 className="linkedinhd">Marks/CGPA</h4>
                  <input
                    className="marksinput"
                    onChange={handleMarks}
                    type="text"
                  />
                </div>
                <div className="skills totalto">
                  <h4 className="skillshd">To</h4>
                  <input className="toinput" onChange={handleTo} type="text" />

                  <div className="add">
                    {" "}
                    <button className="addbtn">ADD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*projects */}

        <div className="personal">
          <div className="personal1">
            <div className="fullpersonal">
              <div className="leftpart">
                <h3 className="personalhd">PROJECTS</h3>
                <div className="name">
                  <h4 className="namehd">Title</h4>
                  <input
                    className="titleinput"
                    onChange={handleTitle}
                    type="text"
                  />
                </div>
                <div className="mobile desc">
                  <h4 className="mobilehd">Description</h4>
                  <input
                    className="descriptioninput"
                    onChange={handleDescription}
                    type="text"
                    style={{ width: "600px" }}
                  />
                  <div className="add">
                    {" "}
                    <button className="addbtn">ADD</button>
                  </div>
                </div>
              </div>
              <div className="rightpart" style={{ height: "50%" }}>
                <div className="email">
                  <h4 className="emailhd">Link</h4>
                  <input
                    className="linkinput"
                    onChange={handleLinkinput}
                    type="text"
                  />
                </div>

                <div className="skills totalto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* achievements*/}

        <div className="personal">
          <div className="personal1">
            <div className="fullpersonal">
              <div className="leftpart">
                <h3 className="personalhd">HOBBIES / ACHIEVEMENTS</h3>

                <div className="mobile desc">
                  <h4 className="mobilehd">Description</h4>
                  <input
                    className="hobbiesinput"
                    onChange={handleHobbies}
                    type="text"
                    style={{ width: "600px" }}
                  />
                  <div className="add">
                    {" "}
                    <button className="addbtn">ADD</button>
                  </div>
                </div>
              </div>
              <div className="rightpart" style={{ height: "50%" }}>
                <div className="skills totalto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeInput;
