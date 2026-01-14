import "../styles/MainContainer.css";
import Education from "./Education";

function MainContainer({
  cvData,
  setCVData,
  generalInfo,
  education,
  editEducation,
  deleteEducation,
  work,
  links,
  editWorkPlace,
  deleteWorkPlace,
  technicalSkills,
  editTechnicalSkills,
  deleteTechnicalSkills,
  setDraftWorkHistory,
  draftWorkHistory,
}) {
  const contactItems = [
    generalInfo.userEmail && (
      <a key="email" href={`mailto:${generalInfo.userEmail}`}>
        {generalInfo.userEmail}
      </a>
    ),
    generalInfo.userPhone && (
      <a key="phone" href={`tel:${generalInfo.userPhone}`}>
        {generalInfo.userPhone}
      </a>
    ),
    ...(links?.map((l) => (
      <a key={`${l.linkName}`} href={`${l.linkAddress}`}>
        {l.linkName}
      </a>
    )) ?? []),
  ].filter(Boolean);

  function moveWorkDownInArray(i) {
    const tempWorkHistory = [...cvData.workHistory];
    const index = cvData.workHistory.findIndex((x) => x.id === i);
    if (index > 0) {
      const moveItem = tempWorkHistory.splice(index, 1);
      tempWorkHistory.splice(index - 1, 0, moveItem[0]);
      setCVData((prev) => ({ ...prev, workHistory: tempWorkHistory }));
    }
  }

  function moveWorkUpInArray(i) {
    const tempWorkHistory = [...cvData.workHistory];
    const index = cvData.workHistory.findIndex((x) => x.id === i);
    if (index < cvData.workHistory.length - 1) {
      const moveItem = tempWorkHistory.splice(index, 1);
      tempWorkHistory.splice(index + 1, 0, moveItem[0]);
      setCVData((prev) => ({ ...prev, workHistory: tempWorkHistory }));
    }
  }

  function moveEduDownInArray(i) {
    const tempEduHistory = [...cvData.education];
    const index = cvData.education.findIndex((x) => x.id === i);
    if (index > 0) {
      const moveItem = tempEduHistory.splice(index, 1);
      tempEduHistory.splice(index - 1, 0, moveItem[0]);
      setCVData((prev) => ({ ...prev, education: tempEduHistory }));
    }
  }

  function moveEduUpInArray(i) {
    const tempEduHistory = [...cvData.education];
    const index = cvData.education.findIndex((x) => x.id === i);
    if (index < cvData.education.length - 1) {
      const moveItem = tempEduHistory.splice(index, 1);
      tempEduHistory.splice(index + 1, 0, moveItem[0]);
      setCVData((prev) => ({ ...prev, education: tempEduHistory }));
    }
  }

  return (
    <main className="resume">
      <header className="resume-header">
        <h1>
          {generalInfo.userFirstName} {generalInfo.userLastName}
        </h1>
        <address>
          {contactItems.map((item, index) => (
            <span key={index}>
              {item}
              {index < contactItems.length - 1 && " | "}
            </span>
          ))}
        </address>
      </header>
      <section aria-labelledby="workPlace-heading" className="resume-section">
        <h2 id="workPlace-heading">Work History</h2>
        <div className="entries">
          {work.map((work) => (
            <article key={work.id} className="workEntry">
              <div className="arrowDiv">
                <button
                  type="button"
                  className="arrowButton"
                  onClick={() => moveWorkDownInArray(work.id)}
                >
                  UP
                </button>
                <button
                  type="button"
                  className="arrowButton"
                  onClick={() => moveWorkUpInArray(work.id)}
                >
                  DOWN
                </button>
              </div>
              <div className="workPlaceInfo">
                <div className="workPlaceHeader">
                  <div className="buttonSide">
                    <div>
                      <h3 className="workPlace">{work.positionTitle}</h3>
                      <p>{work.workPlaceName}</p>
                    </div>
                    <div>
                      <button
                        className="editWorkPlace"
                        onClick={() => editWorkPlace(work.id)}
                        aria-label={`Edit ${work.workPlaceName}`}
                      >
                        Edit
                      </button>
                      <button
                        className="editWorkPlace"
                        onClick={() => deleteWorkPlace(work.id)}
                        aria-label={`Delete ${work.workPlaceName}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <time className="year" dateTime="2022-01">
                      {work.dates}
                    </time>
                    <address>
                      {[work.city, work.state, work.country]
                        .filter(Boolean)
                        .join(", ")}
                    </address>
                  </div>
                </div>
                <ul>
                  {work.duties.map((duty) => (
                    <li key={duty.id}>{duty.value}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="education-heading" className="resume-section">
        <h2 id="education-heading">Education</h2>
        <div className="entries">
          {education.map((school) => (
            <article key={school.id} className="eduEntry">
              <div className="arrowDiv">
                <button
                  type="button"
                  className="arrowButton"
                  onClick={() => moveEduDownInArray(school.id)}
                >
                  UP
                </button>
                <button
                  type="button"
                  className="arrowButton"
                  onClick={() => moveEduUpInArray(school.id)}
                >
                  DOWN
                </button>
              </div>

              <div className="eduPlaceInfo">
                <h3 className="schoolName">{school.schoolName}</h3>
                <button
                  className="editSchool"
                  onClick={() => editEducation(school.id)}
                  aria-label={`Edit ${school.schoolName}`}
                >
                  Edit
                </button>
                <button
                  className="editSchool"
                  onClick={() => deleteEducation(school.id)}
                  aria-label={`Delete ${school.schoolName}`}
                >
                  Delete
                </button>
                <div className="resume-meta">
                  <p className="label">{school.degreeName}</p>
                  <p className="location">
                    {[school.cityName, school.stateName, school.countryName]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                  <time className="year">{school.year}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="technicalSkills-heading"
        className="resume-section"
      >
        <h2 id="technicalSkills-heading ">Technical Skills</h2>
        <div className="entries">
          {technicalSkills.map((skill) => (
            <article key={skill.id}>
              <h3 className="technicalSkills">{skill.skillCategory}</h3>
              <button
                className="editTechnicalSkills"
                onClick={() => editTechnicalSkills(skill.id)}
                aria-label={`Edit ${skill.skillCategory}`}
              >
                Edit
              </button>
              <button
                className="editTechnicalSkills"
                onClick={() => deleteTechnicalSkills(skill.id)}
                aria-label={`Delete ${skill.skillCategory}`}
              >
                Delete
              </button>
              <br />
              <ul>
                {skill.skills.map((skill, index) => (
                  <li key={skill.id}>{skill.value}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainContainer;
