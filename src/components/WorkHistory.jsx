import CustomInput from "./customInput";
function WorkHistory({
  setCVData,
  draftWorkHistory,
  setDraftWorkHistory,
  editingWorkHistoryID,
  setEditingWorkHistoryID,
  initialWorkHistoryState,
}) {
  const isEditing = editingWorkHistoryID !== null;

  function handleChange(e) {
    const { name, value } = e.target;
    setDraftWorkHistory((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form>
      <CustomInput
        label="Position Title "
        type="text"
        name="positionTitle"
        value={draftWorkHistory.positionTitle}
        onChange={handleChange}
      />
      <CustomInput
        label="Workplace Name "
        type="text"
        name="workPlaceName"
        value={draftWorkHistory.workPlaceName}
        onChange={handleChange}
      />
      <CustomInput
        label="Address "
        type="text"
        name="address"
        value={draftWorkHistory.address}
        onChange={handleChange}
      />
      <CustomInput
        label="City "
        type="text"
        name="city"
        value={draftWorkHistory.city}
        onChange={handleChange}
      />
      <CustomInput
        label="State "
        type="text"
        name="state"
        value={draftWorkHistory.state}
        onChange={handleChange}
      />
      <CustomInput
        label="Zip Code "
        type="text"
        name="zipCode"
        value={draftWorkHistory.zipCode}
        onChange={handleChange}
      />
      <CustomInput
        label="Country "
        type="text"
        name="country"
        value={draftWorkHistory.country}
        onChange={handleChange}
      />
      <CustomInput
        label="Workplace Duties "
        type="text"
        name="duties"
        value={draftWorkHistory.duties}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          if (isEditing) {
            setCVData((prev) => ({
              ...prev,
              workHistory: prev.workHistory.map((work) =>
                work.id === editingWorkHistoryID
                  ? { ...draftWorkHistory, id: editingWorkHistoryID }
                  : work,
              ),
            }));
            setEditingWorkHistoryID(null);
            setDraftWorkHistory(...initialWorkHistoryState);
          } else {
            setCVData((prev) => ({
              ...prev,
              workHistory: [
                ...prev.workHistory,
                { ...draftWorkHistory, id: crypto.randomUUID() },
              ],
            }));
            setEditingWorkHistoryID(null);
            setDraftWorkHistory(...initialWorkHistoryState);
          }
        }}
      >
        {isEditing ? "Save" : "Add"}{" "}
        <span className="visually-hidden">work history entry</span>
      </button>
    </form>
  );
}
export default WorkHistory;
