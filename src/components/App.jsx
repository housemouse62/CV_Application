import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const initialGeneralInfoState = {
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  userPhone: "",
  userAddress: "",
};

const initialEducationState = {
  schoolName: "",
  cityName: "",
  stateName: "",
  countryName: "",
  degreeName: "",
};

const initialWorkHistoryState = {
  positionTitle: "",
  workPlaceName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  duties: "",
};

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
  const [draftPortfolio, setDraftPortfolio] = useState([{}]);

  const [cvData, setCVData] = useState({
    generalInfo: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPhone: "",
      userAddress: "",
    },
    education: [],
    workHistory: [],
    portfolio: [],
  });

  function editEducation(id) {
    const schoolToEdit = cvData.education.find((s) => s.id === id);
    console.log(schoolToEdit);
    setDraftEducationData(schoolToEdit);
    setEditingEducationID(id);
    setActiveSection("education");
  }

  function deleteEducation(id) {
    if (editingEducationID === id) {
      setDraftEducationData(...initialEducationState);
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
      setDraftWorkHistory(...initialWorkHistoryState);
      setEditingWorkHistoryID(null);
    }
    const workPlaces = cvData.workHistory.filter((work) => work.id !== id);

    setCVData((prev) => ({ ...prev, workHistory: workPlaces }));
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
        initialEducationState={initialEducationState}
        initialGeneralInfoState={initialGeneralInfoState}
        initialWorkHistoryState={initialWorkHistoryState}
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
      />
    </div>
  );
}

export default App;
