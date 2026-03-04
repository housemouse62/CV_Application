import CustomInput from "./customInput";
function Education({
  cvData,
  updateState,
  draftEducationData,
  setDraftEducationData,
  editingEducationID,
  setEditingEducationID,
  initialEducationState,
}) {
  const isEditing = editingEducationID !== null;

  function handleChange(e) {
    const { name, value } = e.target;
    setDraftEducationData((prev) => ({ ...prev, [name]: value }));
  }

  function updateEduData(cv) {
    const eduMap = cv.education.map((edu) =>
      edu.id === editingEducationID
        ? { ...draftEducationData, id: editingEducationID }
        : edu,
    );
    return {
      ...cv,
      education: eduMap,
    };
  }

  function handleUpdateEduData() {
    const newCV = updateEduData(cvData.present);
    updateState(newCV);
  }

  function newEduData(cv) {
    return {
      ...cv,
      education: [
        ...cv.education,
        { ...draftEducationData, id: crypto.randomUUID() },
      ],
    };
  }

  function handleNewEduData() {
    const newCV = newEduData(cvData.present);
    updateState(newCV);
  }

  return (
    <form>
      <CustomInput
        label="Degree "
        type="text"
        name="degreeName"
        id="degreeName"
        value={draftEducationData.degreeName}
        onChange={handleChange}
      />
      <CustomInput
        label="School Name "
        type="text"
        name="schoolName"
        id="schoolName"
        value={draftEducationData.schoolName}
        onChange={handleChange}
      />
      <CustomInput
        label="City "
        type="text"
        name="cityName"
        id="cityName"
        value={draftEducationData.cityName}
        onChange={handleChange}
      />
      <CustomInput
        label="State/Province "
        type="text"
        name="stateName"
        id="stateName"
        value={draftEducationData.stateName}
        onChange={handleChange}
      />
      <CustomInput
        label="Country "
        type="text"
        name="countryName"
        id="countryName"
        value={draftEducationData.countryName}
        onChange={handleChange}
      />
      <CustomInput
        label="Years Attended "
        type="text"
        name="year"
        id="year"
        value={draftEducationData.year}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => {
          if (isEditing) {
            handleUpdateEduData();
            setEditingEducationID(null);
            setDraftEducationData(initialEducationState);
          } else {
            handleNewEduData();
            setDraftEducationData(initialEducationState);
          }
        }}
      >
        {isEditing ? "Save" : "Add to Resume"}
        <span className="visually-hidden">education entry</span>
      </button>
    </form>
  );
}

export default Education;
