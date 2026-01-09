import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { demoCV } from "./templates";

const initialGeneralInfoState = {
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  userPhone: "",
  linkedIn: "",
  Portfolio: "",
};

const initialEducationState = {
  schoolName: "",
  cityName: "",
  stateName: "",
  countryName: "",
  degreeName: "",
  year: "",
};

const initialWorkHistoryState = {
  positionTitle: "",
  workPlaceName: "",
  dates: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  duties: ["", "", ""],
};

const initialTechnicalSkillsState = { skillCategory: "", skills: ["", "", ""] };

function App() {
  const [activeSection, setActiveSection] = useState("generalInfo");
  const [draftGeneralInfoData, setDraftGeneralInfoData] = useState(
    initialGeneralInfoState,
  );
  const [draftEducationData, setDraftEducationData] = useState(
    initialEducationState,
  );
  const [editingEducationID, setEditingEducationID] = useState(null);
  const [draftWorkHistory, setDraftWorkHistory] = useState(
    initialWorkHistoryState,
  );
  const [editingWorkHistoryID, setEditingWorkHistoryID] = useState(null);
  const [draftTechnicalSkills, setDraftTechnicalSkills] = useState(
    initialTechnicalSkillsState,
  );
  const [editingTechnicalID, setEditingTechnicalID] = useState(null);

  const [cvData, setCVData] = useState(demoCV);

  function editEducation(id) {
    const schoolToEdit = cvData.education.find((s) => s.id === id);
    console.log(schoolToEdit);
    setDraftEducationData(schoolToEdit);
    setEditingEducationID(id);
    setActiveSection("education");
  }

  function deleteEducation(id) {
    if (editingEducationID === id) {
      setDraftEducationData(initialEducationState);
      setEditingEducationID(null);
    }
    const schools = cvData.education.filter((edu) => edu.id !== id);

    setCVData((prev) => ({ ...prev, education: schools }));
  }

  function editWorkPlace(id) {
    const workToEdit = cvData.workHistory.find((w) => w.id === id);
    setDraftWorkHistory(workToEdit);
    setEditingWorkHistoryID(id);
    setActiveSection("workHistory");
  }

  function deleteWorkPlace(id) {
    if (editingWorkHistoryID === id) {
      setDraftWorkHistory(initialWorkHistoryState);
      setEditingWorkHistoryID(null);
    }
    const workPlaces = cvData.workHistory.filter((work) => work.id !== id);

    setCVData((prev) => ({ ...prev, workHistory: workPlaces }));
  }

  function editTechnicalSkills(id) {
    const skillToEdit = cvData.technicalSkills.find((s) => s.id === id);
    setDraftTechnicalSkills(skillToEdit);
    setEditingTechnicalID(id);
    setActiveSection("technicalSkills");
  }

  function deleteTechnicalSkills(id) {
    if (editingTechnicalID === id) {
      setDraftTechnicalSkills(initialTechnicalSkillsState);
      setEditingTechnicalID(null);
    }
    const technicalSkills = cvData.technicalSkills.filter(
      (skill) => skill.id !== id,
    );

    setCVData((prev) => ({ ...prev, technicalSkills: technicalSkills }));
  }

  return (
    <div className="App">
      <Sidebar
        setCVData={setCVData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        draftGeneralInfoData={draftGeneralInfoData}
        setDraftGeneralInfoData={setDraftGeneralInfoData}
        draftEducationData={draftEducationData}
        setDraftEducationData={setDraftEducationData}
        editingEducationID={editingEducationID}
        setEditingEducationID={setEditingEducationID}
        draftWorkHistory={draftWorkHistory}
        setDraftWorkHistory={setDraftWorkHistory}
        editingWorkHistoryID={editingWorkHistoryID}
        setEditingWorkHistoryID={setEditingWorkHistoryID}
        draftTechnicalSkills={draftTechnicalSkills}
        setDraftTechnicalSkills={setDraftTechnicalSkills}
        editingTechnicalID={editingTechnicalID}
        setEditingTechnicalID={setEditingTechnicalID}
        initialEducationState={initialEducationState}
        initialGeneralInfoState={initialGeneralInfoState}
        initialWorkHistoryState={initialWorkHistoryState}
        initialTechnicalSkillsState={initialTechnicalSkillsState}
      />
      <MainContainer
        generalInfo={cvData.generalInfo}
        education={cvData.education}
        setDraftEducationData={setDraftEducationData}
        editEducation={editEducation}
        deleteEducation={deleteEducation}
        work={cvData.workHistory}
        setDraftWorkHistory={setDraftWorkHistory}
        editWorkPlace={editWorkPlace}
        deleteWorkPlace={deleteWorkPlace}
        technicalSkills={cvData.technicalSkills}
        setDraftTechnicalSkills={setDraftTechnicalSkills}
        editTechnicalSkills={editTechnicalSkills}
        deleteTechnicalSkills={deleteTechnicalSkills}
      />
    </div>
  );
}

export default App;
