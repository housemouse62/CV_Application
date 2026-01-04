import CustomInput from "./customInput";
let buttonName = "Submit Changes";
function Education({
  education,
  draftEducationData,
  setDraftEducationData,
  setCVData,
  editingEducationID,
  setEditingEducationID,
}) {
  console.log("Education props:", education);
  console.log(editingEducationID);

  return (
    <div>
      <CustomInput
        label="Degree "
        type="text"
        name="degreeName"
        value={draftEducationData.degreeName}
        onChange={(e) =>
          setDraftEducationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="School Name "
        type="text"
        name="schoolName"
        value={draftEducationData.schoolName}
        onChange={(e) =>
          setDraftEducationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="City "
        type="text"
        name="cityName"
        id="cityName"
        value={draftEducationData.cityName}
        onChange={(e) =>
          setDraftEducationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="State/Province "
        type="text"
        name="stateName"
        id="stateName"
        value={draftEducationData.stateName}
        onChange={(e) =>
          setDraftEducationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="Country "
        type="text"
        name="countryName"
        id="countryName"
        value={draftEducationData.countryName}
        onChange={(e) =>
          setDraftEducationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <button
        onClick={() => {
          if (editingEducationID) {
            setCVData((prev) => ({
              ...prev,
              education: prev.education.map((edu) =>
                edu.id === editingEducationID ? draftEducationData : edu,
              ),
            }));
            setEditingEducationID(null);
            setDraftEducationData({
              schoolName: "",
              cityName: "",
              stateName: "",
              countryName: "",
              degreeName: "",
            });
          } else {
            setCVData((prev) => ({
              ...prev,
              education: [
                ...prev.education,
                { ...draftEducationData, id: crypto.randomUUID() },
              ],
            }));

            setDraftEducationData({
              schoolName: "",
              cityName: "",
              stateName: "",
              countryName: "",
              degreeName: "",
            });
          }
        }}
      >
        {editingEducationID ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default Education;
