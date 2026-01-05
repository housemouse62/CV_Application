import "../styles/Sidebar.css";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import WorkHistory from "./WorkHistory";

function Sidebar({
  activeSection,
  setActiveSection,
  setCVData,
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  draftEducationData,
  setDraftEducationData,
  editingEducationID,
  setEditingEducationID,
  draftWorkHistory,
  setDraftWorkHistory,
  editingWorkHistoryID,
  setEditingWorkHistoryID,
  initialEducationState,
  initialGeneralInfoState,
  initialWorkHistoryState,
}) {
  return (
    <div className="Sidebar">
      <h1>BYO CV</h1>
      {activeSection === "generalInfo" && (
        <GeneralInfo
          draftGeneralInfoData={draftGeneralInfoData}
          setDraftGeneralInfoData={setDraftGeneralInfoData}
          setCVData={setCVData}
          initialGeneralInfoState={initialGeneralInfoState}
        />
      )}
      {activeSection === "education" && (
        <Education
          draftEducationData={draftEducationData}
          setDraftEducationData={setDraftEducationData}
          setCVData={setCVData}
          editingEducationID={editingEducationID}
          setEditingEducationID={setEditingEducationID}
          initialEducationState={initialEducationState}
        />
      )}
      {activeSection === "workHistory" && (
        <WorkHistory
          draftWorkHistory={draftWorkHistory}
          setDraftWorkHistory={setDraftWorkHistory}
          setCVData={setCVData}
          editingWorkHistoryID={editingWorkHistoryID}
          setEditingWorkHistoryID={setEditingWorkHistoryID}
          initialWorkHistoryState={initialWorkHistoryState}
        />
      )}
      <button onClick={() => setActiveSection("generalInfo")}>
        General Info
      </button>
      <button onClick={() => setActiveSection("education")}>Education</button>
      <button onClick={() => setActiveSection("workHistory")}>
        Work History
      </button>
    </div>
  );
}

export default Sidebar;
