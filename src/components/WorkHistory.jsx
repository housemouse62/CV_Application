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
        label="Dates Worked "
        type="text"
        name="dates"
        value={draftWorkHistory.dates}
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
        label="Country "
        type="text"
        name="country"
        value={draftWorkHistory.country}
        onChange={handleChange}
      />
      <div className="duties">
        <label htmlFor="Experience">Experience</label>
        {draftWorkHistory.duties.map((duty, index) => (
          <div className="dutyLine" key={duty.id}>
            <input
              label="Experience "
              type="text"
              value={duty.value}
              className="duty"
              onChange={(e) => {
                const updated = [...draftWorkHistory.duties];
                updated[index] = e.target.value;
                setDraftWorkHistory((prev) => ({ ...prev, duties: updated }));
              }}
            />
            <button
              type="button"
              className="deleteDuty"
              onClick={() => {
                const newDuties = draftWorkHistory.duties.filter(
                  (_, i) => i !== index,
                );
                setDraftWorkHistory((prev) => ({ ...prev, duties: newDuties }));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        className="addDuty"
        type="button"
        onClick={() =>
          setDraftWorkHistory((prev) => ({
            ...prev,
            duties: [...prev.duties, ""],
          }))
        }
      >
        Add duty
      </button>
      <button
        type="button"
        onClick={() => {
          const cleanedDuties = draftWorkHistory.duties
            .map((duty) => ({ ...duty, value: duty.value.trim() }))
            .filter((duty) => duty.value !== "");

          if (isEditing) {
            setCVData((prev) => ({
              ...prev,
              workHistory: prev.workHistory.map((work) =>
                work.id === editingWorkHistoryID
                  ? {
                      ...draftWorkHistory,
                      duties: cleanedDuties,
                      id: editingWorkHistoryID,
                    }
                  : work,
              ),
            }));
            setEditingWorkHistoryID(null);
            setDraftWorkHistory(initialWorkHistoryState);
          } else {
            setCVData((prev) => ({
              ...prev,
              workHistory: [
                ...prev.workHistory,
                {
                  ...draftWorkHistory,
                  duties: cleanedDuties,
                  id: crypto.randomUUID(),
                },
              ],
            }));
            setEditingWorkHistoryID(null);
            setDraftWorkHistory(initialWorkHistoryState);
          }
        }}
      >
        {isEditing ? "Save" : "Add to Resume"}{" "}
        <span className="visually-hidden">work history entry</span>
      </button>
    </form>
  );
}
export default WorkHistory;
