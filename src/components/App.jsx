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
};

const initialLinksState = {
  links: [{ id: crypto.randomUUID(), linkName: "", linkAddress: "" }],
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
  duties: [
    { id: crypto.randomUUID(), value: "" },
    { id: crypto.randomUUID(), value: "" },
    { id: crypto.randomUUID(), value: "" },
  ],
};

const initialTechnicalSkillsState = {
  skillCategory: "",
  skills: [
    { id: crypto.randomUUID(), value: "" },
    { id: crypto.randomUUID(), value: "" },
    { id: crypto.randomUUID(), value: "" },
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState("generalInfo");
  const [draftGeneralInfoData, setDraftGeneralInfoData] = useState(
    demoCV.generalInfo,
  );

  const [draftLinks, setDraftLinks] = useState(demoCV.links);

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

  const [cvData, setCVData] = useState({
    past: [],
    present: demoCV,
    future: [],
  });

  function updateState(newPresent) {
    console.log("UPDATE STATE — clearing future");
    console.log("UPDATE", {
      past: cvData.past.length,
      future: cvData.future.length,
    });

    setCVData(({ past, present }) => ({
      past: [...past, present],
      present: newPresent,
      future: [],
    }));
  }

  function undo() {
    setCVData(({ past, present, future }) => {
      if (past.length === 0) return { past, present, future };

      const previous = past[past.length - 1];

      return {
        past: past.slice(0, -1),
        present: previous,
        future: [present, ...future],
      };
    });
  }

  function redo() {
    setCVData(({ past, present, future }) => {
      if (future.length === 0) return { past, present, future };

      const next = future[0];

      return {
        past: [...past, present],
        present: next,
        future: future.slice(1),
      };
    });
  }

  function editEducation(id) {
    const schoolToEdit = cvData.present.education.find((s) => s.id === id);
    console.log(schoolToEdit);
    setDraftEducationData(schoolToEdit);
    setEditingEducationID(id);
    setActiveSection("education");
  }

  function deleteEducation(cv, id) {
    if (editingEducationID === id) {
      setDraftEducationData(initialEducationState);
      setEditingEducationID(null);
    }
    const schools = cvData.present.education.filter((edu) => edu.id !== id);

    return { ...cv, education: schools };
  }

  function handleDeleteEducation(id) {
    const newCV = deleteEducation(cvData.present, id);
    updateState(newCV);
  }

  function editWorkPlace(id) {
    const workToEdit = cvData.present.workHistory.find((w) => w.id === id);

    console.log(
      draftWorkHistory ===
        cvData.present.workHistory.find((w) => w.id === editingWorkHistoryID),
    );

    setDraftWorkHistory(workToEdit);
    setEditingWorkHistoryID(id);
    setActiveSection("workHistory");
  }

  function deleteWorkPlace(cv, id) {
    if (editingWorkHistoryID === id) {
      setDraftWorkHistory(initialWorkHistoryState);
      setEditingWorkHistoryID(null);
    }
    const workPlaces = cv.workHistory.filter((work) => work.id !== id);
    return { ...cv, workHistory: workPlaces };
  }

  function handleDeleteWorkPlace(id) {
    const newCV = deleteWorkPlace(cvData.present, id);
    updateState(newCV);
  }

  function editTechnicalSkills(id) {
    const skillToEdit = cvData.present.technicalSkills.find((s) => s.id === id);
    setDraftTechnicalSkills(skillToEdit);
    setEditingTechnicalID(id);
    setActiveSection("technicalSkills");
  }

  function deleteTechnicalSkills(cv, id) {
    if (editingTechnicalID === id) {
      setDraftTechnicalSkills(initialTechnicalSkillsState);
      setEditingTechnicalID(null);
    }
    const technicalSkills = cvData.present.technicalSkills.filter(
      (skill) => skill.id !== id,
    );
    return { ...cv, technicalSkills: technicalSkills };
  }

  function handleDeleteTechnicalSkills(id) {
    const newCV = deleteTechnicalSkills(cvData.present, id);
    updateState(newCV);
  }

  return (
    <div className="App">
      <Sidebar
        updateState={updateState}
        cvData={cvData}
        setCVData={setCVData}
        undo={undo}
        redo={redo}
        handleDeleteWorkPlace={handleDeleteWorkPlace}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        draftGeneralInfoData={draftGeneralInfoData}
        initialLinksState={initialLinksState}
        setDraftGeneralInfoData={setDraftGeneralInfoData}
        draftLinks={draftLinks}
        setDraftLinks={setDraftLinks}
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
        updateState={updateState}
        cvData={cvData}
        generalInfo={cvData.present.generalInfo}
        setCVData={setCVData}
        links={cvData.present.links}
        education={cvData.present.education}
        setDraftEducationData={setDraftEducationData}
        editEducation={editEducation}
        handleDeleteEducation={handleDeleteEducation}
        work={cvData.present.workHistory}
        draftWorkHistory={draftWorkHistory}
        setDraftWorkHistory={setDraftWorkHistory}
        editWorkPlace={editWorkPlace}
        handleDeleteWorkPlace={handleDeleteWorkPlace}
        technicalSkills={cvData.present.technicalSkills}
        setDraftTechnicalSkills={setDraftTechnicalSkills}
        handleDeleteTechnicalSkills={handleDeleteTechnicalSkills}
        editTechnicalSkills={editTechnicalSkills}
        deleteTechnicalSkills={deleteTechnicalSkills}
      />
    </div>
  );
}

export default App;
