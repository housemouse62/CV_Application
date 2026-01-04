import "../styles/Sidebar.css";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";

function Sidebar({
  handleChange,
  activeSection,
  setActiveSection,
  setCVData,
  generalInfo,
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  education,
  draftEducationData,
  setDraftEducationData,
  editingEducationID,
  setEditingEducationID,
}) {
  return (
    <div className="Sidebar">
      <h1>BYO CV</h1>
      {activeSection === "generalInfo" && (
        <GeneralInfo
          generalInfo={generalInfo}
          handleChange={handleChange}
          draftGeneralInfoData={draftGeneralInfoData}
          setDraftGeneralInfoData={setDraftGeneralInfoData}
          setCVData={setCVData}
        />
      )}
      {activeSection === "education" && (
        <Education
          education={education}
          handleChange={handleChange}
          draftEducationData={draftEducationData}
          setDraftEducationData={setDraftEducationData}
          setCVData={setCVData}
          editingEducationID={editingEducationID}
          setEditingEducationID={setEditingEducationID}
        />
      )}
      <button onClick={() => setActiveSection("generalInfo")}>
        General Info
      </button>
      <button onClick={() => setActiveSection("education")}>Education</button>
    </div>
  );
}

export default Sidebar;
