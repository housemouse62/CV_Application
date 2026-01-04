import "../styles/MainContainer.css";
import Education from "./Education";

function MainContainer({
  generalInfo,
  education,
  editEducation,
  deleteEducation,
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
    </div>
  );
}

export default MainContainer;
