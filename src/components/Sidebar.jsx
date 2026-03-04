import "../styles/Sidebar.css";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import WorkHistory from "./WorkHistory";
import TechnicalSkills from "./TechnicalSkills";
import { demoCV, emptyCV } from "./templates";

function Sidebar({
  activeSection,
  setActiveSection,
  updateState,
  cvData,
  undo,
  redo,
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  draftLinks,
  setDraftLinks,
  draftEducationData,
  setDraftEducationData,
  editingEducationID,
  setEditingEducationID,
  draftWorkHistory,
  setDraftWorkHistory,
  editingWorkHistoryID,
  setEditingWorkHistoryID,
  draftTechnicalSkills,
  setDraftTechnicalSkills,
  editingTechnicalID,
  setEditingTechnicalID,
  initialEducationState,
  initialGeneralInfoState,
  initialWorkHistoryState,
  initialTechnicalSkillsState,
}) {
  function resetDrafts(cv) {
    setDraftEducationData(initialEducationState);
    setDraftGeneralInfoData(cv.generalInfo);
    setDraftLinks(
      cv.links.length
        ? cv.links
        : [{ id: crypto.randomUUID(), linkName: "", linkAddress: "" }],
    );
    setDraftWorkHistory(initialWorkHistoryState);
    setDraftTechnicalSkills(initialTechnicalSkillsState);
    setEditingEducationID(null);
    setEditingTechnicalID(null);
    setEditingWorkHistoryID(null);
  }
  function loadEmptyCV() {
    const empty = structuredClone(emptyCV);
    updateState(empty);
    resetDrafts(empty);
  }

  function loadDemoCV() {
    const demo = structuredClone(demoCV);
    updateState(demo);
    resetDrafts(demo);
  }

  return (
    <div className="stickyBox">
      <aside className="Sidebar">
        <div className="tabs">
          <nav aria-label="Edit resume sections">
            <button
              className={`tab ${activeSection === "generalInfo" ? "active" : ""}`}
              onClick={() => setActiveSection("generalInfo")}
              aria-label="Edit General Information"
            >
              General Info
            </button>
            <button
              className={`tab ${activeSection === "education" ? "active" : ""}`}
              onClick={() => setActiveSection("education")}
              aria-label="Edit Education Information"
            >
              Education
            </button>
            <button
              className={`tab ${activeSection === "workHistory" ? "active" : ""}`}
              onClick={() => setActiveSection("workHistory")}
              aria-label="Edit work history"
            >
              Work History
            </button>
            <button
              className={`tab ${activeSection === "technicalSkills" ? "active" : ""}`}
              onClick={() => setActiveSection("technicalSkills")}
              aria-label="Edit technical skills"
            >
              Technical Skills
            </button>
          </nav>
        </div>
        <div className="entryPages">
          <h2 className="sidebar-header">Resume Editor</h2>
          {activeSection === "generalInfo" && (
            <GeneralInfo
              cvData={cvData}
              updateState={updateState}
              draftGeneralInfoData={draftGeneralInfoData}
              setDraftGeneralInfoData={setDraftGeneralInfoData}
              draftLinks={draftLinks}
              setDraftLinks={setDraftLinks}
              initialGeneralInfoState={initialGeneralInfoState}
            />
          )}
          {activeSection === "education" && (
            <Education
              cvData={cvData}
              updateState={updateState}
              draftEducationData={draftEducationData}
              setDraftEducationData={setDraftEducationData}
              editingEducationID={editingEducationID}
              setEditingEducationID={setEditingEducationID}
              initialEducationState={initialEducationState}
            />
          )}
          {activeSection === "workHistory" && (
            <WorkHistory
              updateState={updateState}
              draftWorkHistory={draftWorkHistory}
              setDraftWorkHistory={setDraftWorkHistory}
              cvData={cvData}
              editingWorkHistoryID={editingWorkHistoryID}
              setEditingWorkHistoryID={setEditingWorkHistoryID}
              initialWorkHistoryState={initialWorkHistoryState}
            />
          )}
          {activeSection === "technicalSkills" && (
            <TechnicalSkills
              updateState={updateState}
              cvData={cvData}
              draftTechnicalSkills={draftTechnicalSkills}
              setDraftTechnicalSkills={setDraftTechnicalSkills}
              editingTechnicalID={editingTechnicalID}
              setEditingTechnicalID={setEditingTechnicalID}
              initialTechnicalSkillsState={initialTechnicalSkillsState}
            />
          )}
          <nav className="demoControl">
            <button
              type="button"
              className="demo"
              onClick={() => loadEmptyCV()}
            >
              Clear CV
            </button>
            <button type="button" className="demo" onClick={() => loadDemoCV()}>
              Show Demo
            </button>
            <br />
            <button
              type="button"
              className="undoRedo"
              disabled={cvData.past.length === 0}
              onClick={() => undo()}
            >
              Undo
            </button>
            <button
              type="button"
              className="undoRedo"
              disabled={cvData.future.length === 0}
              onClick={() => undo()}
            >
              Redo
            </button>
          </nav>
          <nav className="print-area">
            <button
              type="button"
              className="print"
              onClick={() => window.print()}
            >
              Print Resume
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
