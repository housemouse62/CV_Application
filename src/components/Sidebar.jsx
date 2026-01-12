import "../styles/Sidebar.css";
import { useState } from "react";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import WorkHistory from "./WorkHistory";
import TechnicalSkills from "./TechnicalSkills";
import { demoCV, emptyCV } from "./templates";

function Sidebar({
  activeSection,
  setActiveSection,
  setCVData,
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
  function resetDrafts() {
    setDraftEducationData(initialEducationState);
    setDraftGeneralInfoData(initialGeneralInfoState);
    setDraftLinks(setDraftLinks);
    setDraftWorkHistory(initialWorkHistoryState);
    setDraftTechnicalSkills(initialTechnicalSkillsState);
    setEditingEducationID(null);
    setEditingTechnicalID(null);
    setEditingWorkHistoryID(null);
  }
  function loadEmptyCV() {
    setCVData(structuredClone(emptyCV));
    resetDrafts();
  }

  function loadDemoCV() {
    setCVData(structuredClone(demoCV));
    resetDrafts();
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
              draftGeneralInfoData={draftGeneralInfoData}
              setDraftGeneralInfoData={setDraftGeneralInfoData}
              draftLinks={draftLinks}
              setDraftLinks={setDraftLinks}
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
          {activeSection === "technicalSkills" && (
            <TechnicalSkills
              draftTechnicalSkills={draftTechnicalSkills}
              setDraftTechnicalSkills={setDraftTechnicalSkills}
              setCVData={setCVData}
              editingTechnicalID={editingTechnicalID}
              setEditingTechnicalID={setEditingTechnicalID}
              initialTechnicalSkillsState={initialTechnicalSkillsState}
            />
          )}
          <nav className="demoControl">
            <button className="demo" onClick={() => loadEmptyCV()}>
              Clear CV
            </button>
            <button className="demo" onClick={() => loadDemoCV()}>
              Show Demo
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
