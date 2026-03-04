import { useEffect } from "react";
import CustomInput from "./customInput";
function WorkHistory({
  cvData,
  updateState,
  draftWorkHistory,
  setDraftWorkHistory,
  editingWorkHistoryID,
  setEditingWorkHistoryID,
  initialWorkHistoryState,
}) {
  const isEditing = editingWorkHistoryID !== null;

  useEffect(() => {
    if (!editingWorkHistoryID) {
      setDraftWorkHistory(initialWorkHistoryState);
      return;
    }

    const work = cvData.present.workHistory.find(
      (w) => w.id === editingWorkHistoryID,
    );

    if (work) {
      setDraftWorkHistory(work);
    }
  }, [editingWorkHistoryID, cvData.present.workHistory]);

  function handleChange(e) {
    const { name, value } = e.target;
    setDraftWorkHistory((prev) => ({ ...prev, [name]: value }));
  }

  function buildUpdatedCV(cv, cleanedDuties) {
    if (isEditing) {
      return {
        ...cv,
        workHistory: cv.workHistory.map((work) =>
          work.id === editingWorkHistoryID
            ? {
                ...draftWorkHistory,
                duties: cleanedDuties,
                id: editingWorkHistoryID,
              }
            : work,
        ),
      };
    } else {
      return {
        ...cv,
        workHistory: [
          ...cv.workHistory,
          {
            ...draftWorkHistory,
            duties: cleanedDuties,
            id: crypto.randomUUID(),
          },
        ],
      };
    }
  }

  function handleSave() {
    const hasRequiredFields = draftWorkHistory.workPlaceName.trim() !== "";
    if (!hasRequiredFields) return;

    const cleanedDuties = draftWorkHistory.duties
      .map((duty) => ({ ...duty, value: duty.value.trim() }))
      .filter((duty) => duty.value !== "");

    const newCV = buildUpdatedCV(cvData.present, cleanedDuties);
    updateState(newCV);

    setEditingWorkHistoryID(null);
    setDraftWorkHistory(initialWorkHistoryState);
  }

  function handleDeleteDuty(index) {
    setDraftWorkHistory((prev) => ({
      ...prev,
      duties: prev.duties.filter((_, i) => i !== index),
    }));
  }

  function handleAddDuty() {
    setDraftWorkHistory((prev) => ({
      ...prev,
      duties: [...prev.duties, { id: crypto.randomUUID(), value: "" }],
    }));
  }
  // function updateWorkHistory(cv, cleanedDuties) {
  //   return {
  //     ...cv,
  //     workHistory: cv.workHistory.map((work) =>
  //       work.id === editingWorkHistoryID
  //         ? {
  //             ...draftWorkHistory,
  //             duties: cleanedDuties,
  //             id: editingWorkHistoryID,
  //           }
  //         : work,
  //     ),
  //   };
  // }

  // function handleUpdateWorkHistory(cleanedDuties) {
  //   const newCV = updateWorkHistory(cvData.present, cleanedDuties);
  //   updateState(newCV);
  // }

  // function newWorkHistory(cv, cleanedDuties) {
  //   return {
  //     ...cv,
  //     workHistory: [
  //       ...cv.workHistory,
  //       {
  //         ...draftWorkHistory,
  //         duties: cleanedDuties,
  //         id: crypto.randomUUID(),
  //       },
  //     ],
  //   };
  // }

  // function handleNewWorkHistory(cleanedDuties) {
  //   const newCV = newWorkHistory(cvData.present, cleanedDuties);
  //   updateState(newCV);
  // }

  return (
    <form>
      <CustomInput
        label="Position Title "
        type="text"
        name="positionTitle"
        id="positionTitle"
        value={draftWorkHistory.positionTitle}
        onChange={handleChange}
      />
      <CustomInput
        label="Workplace Name "
        type="text"
        name="workPlaceName"
        id="workPlaceName"
        value={draftWorkHistory.workPlaceName}
        onChange={handleChange}
      />
      <CustomInput
        label="Dates Worked "
        type="text"
        name="dates"
        id="dates"
        value={draftWorkHistory.dates}
        onChange={handleChange}
      />
      <CustomInput
        label="City "
        type="text"
        name="city"
        id="workCity"
        value={draftWorkHistory.city}
        onChange={handleChange}
      />
      <CustomInput
        label="State "
        type="text"
        name="state"
        id="workState"
        value={draftWorkHistory.state}
        onChange={handleChange}
      />
      <CustomInput
        label="Country "
        type="text"
        name="country"
        id="workCountry"
        value={draftWorkHistory.country}
        onChange={handleChange}
      />
      <div className="duties">
        <label className="Experience">Experience</label>
        {draftWorkHistory.duties.map((duty, index) => (
          <div className="dutyLine" key={duty.id}>
            <input
              type="text"
              className="duty"
              value={duty.value}
              onChange={(e) => {
                const updated = [...draftWorkHistory.duties];
                updated[index] = { ...updated[index], value: e.target.value };
                setDraftWorkHistory((prev) => ({ ...prev, duties: updated }));
              }}
              aria-label={`Experience ${index + 1}`}
            />
            <button
              type="button"
              className="deleteDuty"
              onClick={() => handleDeleteDuty(index)}
              aria-label={`Delete experience ${index + 1}`}
            >
              X
            </button>
          </div>
        ))}
        <button className="addDuty" type="button" onClick={handleAddDuty}>
          Add duty
        </button>
      </div>
      <button type="button" onClick={handleSave}>
        {isEditing ? "Save" : "Add to Resume"}{" "}
        <span className="visually-hidden">work history entry</span>
      </button>
    </form>
  );
}
export default WorkHistory;
