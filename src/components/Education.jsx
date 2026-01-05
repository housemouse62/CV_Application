import CustomInput from "./customInput";
function Education({
  draftEducationData,
  setDraftEducationData,
  setCVData,
  editingEducationID,
  setEditingEducationID,
  initialEducationState,
}) {
  const isEditing = editingEducationID !== null;

  function handleChange(e) {
    const { name, value } = e.target;
    setDraftEducationData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form>
      <CustomInput
        label="Degree "
        type="text"
        name="degreeName"
        value={draftEducationData.degreeName}
        onChange={handleChange}
      />
      <CustomInput
        label="School Name "
        type="text"
        name="schoolName"
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
      <button
        onClick={() => {
          if (isEditing) {
            setCVData((prev) => ({
              ...prev,
              education: prev.education.map((edu) =>
                edu.id === editingEducationID
                  ? { ...draftEducationData, id: editingEducationID }
                  : edu,
              ),
            }));
            setEditingEducationID(null);
            setDraftEducationData(...initialEducationState);
          } else {
            setCVData((prev) => ({
              ...prev,
              education: [
                ...prev.education,
                { ...draftEducationData, id: crypto.randomUUID() },
              ],
            }));

            setDraftEducationData(...initialEducationState);
          }
        }}
      >
        {isEditing ? "Save" : "Add"}
        <span className="visually-hidden">education entry</span>
      </button>
    </form>
  );
}

export default Education;
