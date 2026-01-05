import "../styles/MainContainer.css";
import Education from "./Education";

function MainContainer({
  generalInfo,
  education,
  editEducation,
  deleteEducation,
  work,
  editWorkPlace,
  deleteWorkPlace,
}) {
  return (
    <div>
      <h1>
        {generalInfo.userFirstName} {generalInfo.userLastName}
      </h1>
      {generalInfo.userEmail}
      <br />
      {generalInfo.userPhone}
      <br />
      {generalInfo.userAddress}
      <br />
      {education.map((school) => (
        <div key={school.id}>
          <h2 className="schoolName">{school.schoolName}</h2>
          <button
            className="editSchool"
            onClick={() => editEducation(school.id)}
          >
            Edit
          </button>
          <button
            className="editSchool"
            onClick={() => deleteEducation(school.id)}
          >
            Delete
          </button>
          <ul>
            <li>{school.cityName}</li>
            <li>{school.stateName}</li>
            <li>{school.countryName}</li>
            <li>{school.degreeName}</li>
          </ul>
        </div>
      ))}
      {work.map((work) => (
        <div key={work.id}>
          <h2 className="workPlace">{work.workPlaceName}</h2>
          <button
            className="editWorkPlace"
            onClick={() => editWorkPlace(work.id)}
          >
            Edit
          </button>
          <button
            className="editWorkPlace"
            onClick={() => deleteWorkPlace(work.id)}
          >
            Delete
          </button>
          <ul>
            <li>{work.positionTitle}</li>
            <li>{work.workPlaceName}</li>
            <li>{work.address}</li>
            <li>{work.city}</li>
            <li>{work.state}</li>
            <li>{work.zipCode}</li>
            <li>{work.country}</li>
            <li>{work.duties}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MainContainer;
