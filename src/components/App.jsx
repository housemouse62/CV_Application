import { useState } from "react";
import { StrictMode } from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function App() {
  const [activeSection, setActiveSection] = useState("generalInfo");
  const [draftGeneralInfoData, setDraftGeneralInfoData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhone: "",
    userAddress: "",
  });
  const [draftEducationData, setDraftEducationData] = useState({
    schoolName: "",
    cityName: "",
    stateName: "",
    countryName: "",
    degreeName: "",
  });
  const [editingEducationID, setEditingEducationID] = useState(null);
  const [draftWorkHistory, setDraftWorkHistory] = useState({
    workHistory: [
      {
        title: "",
        workPlaceName: "",
        address: "",
        zip: "",
        city: "",
        state: "",
        country: "",
        duties: "",
      },
    ],
  });
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
    // const schoolToEdit = cvData.education.find((s) => s.id === id);
    if (editingEducationID === id) {
      setDraftEducationData({
        schoolName: "",
        cityName: "",
        stateName: "",
        countryName: "",
        degreeName: "",
      });
      setEditingEducationID(null);
    }
    const schools = cvData.education.filter((edu) => edu.id !== id);

    setCVData((prev) => ({ ...prev, education: schools }));
  }

  return (
    <StrictMode>
      <div className="App">
        <Sidebar
          cvData={cvData}
          setCVData={setCVData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          generalInfo={cvData.generalInfo}
          draftGeneralInfoData={draftGeneralInfoData}
          setDraftGeneralInfoData={setDraftGeneralInfoData}
          education={cvData.education}
          draftEducationData={draftEducationData}
          setDraftEducationData={setDraftEducationData}
          editingEducationID={editingEducationID}
          setEditingEducationID={setEditingEducationID}
        />
        <MainContainer
          generalInfo={cvData.generalInfo}
          education={cvData.education}
          setDraftEducationData={setDraftEducationData}
          editEducation={editEducation}
          deleteEducation={deleteEducation}
        />
      </div>
    </StrictMode>
  );
}

export default App;
