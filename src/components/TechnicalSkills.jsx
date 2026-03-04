import CustomInput from "./customInput";
function TechnicalSkills({
  cvData,
  updateState,
  draftTechnicalSkills,
  setDraftTechnicalSkills,
  editingTechnicalID,
  setEditingTechnicalID,
  initialTechnicalSkillsState,
}) {
  const isEditing = editingTechnicalID !== null;

  function handleChange(e) {
    const { name, value } = e.target;
    setDraftTechnicalSkills((prev) => ({ ...prev, [name]: value }));
  }
  function updateTechSkills(cv) {
    const techMap = cv.technicalSkills.map((skill) =>
      skill.id === editingTechnicalID
        ? { ...draftTechnicalSkills, id: editingTechnicalID }
        : skill,
    );
    return { ...cv, technicalSkills: techMap };
  }

  function handleUpdateTechSkills() {
    const newCV = updateTechSkills(cvData.present);
    updateState(newCV);
  }

  function newTechSkills(cv) {
    return {
      ...cv,
      technicalSkills: [
        ...cv.technicalSkills,
        { ...draftTechnicalSkills, id: crypto.randomUUID() },
      ],
    };
  }

  function handleNewTechSkills() {
    const newCV = newTechSkills(cvData.present);
    updateState(newCV);
  }

  return (
    <form>
      <CustomInput
        label="Skill Category "
        type="text"
        name="skillCategory"
        id="skillCategory"
        value={draftTechnicalSkills.skillCategory}
        onChange={handleChange}
      />
      <div className="skills">
        <label htmlFor="skills">Skills</label>
        {draftTechnicalSkills.skills.map((skill, index) => (
          <div key={skill.id} className="skillLine">
            <input
              aria-label={`Skill ${index + 1}`}
              type="text"
              value={skill.value}
              className="skill"
              onChange={(e) => {
                const updated = [...draftTechnicalSkills.skills];
                updated[index] = { ...updated[index], value: e.target.value };
                console.log(updated);
                setDraftTechnicalSkills((prev) => ({
                  ...prev,
                  skills: updated,
                }));
              }}
            />
            <button
              type="button"
              className="deleteSkill"
              aria-label={`Remove skill ${index + 1}`}
              onClick={() => {
                const newSkills = draftTechnicalSkills.skills.filter(
                  (_, i) => i !== index,
                );
                setDraftTechnicalSkills((prev) => ({
                  ...prev,
                  skills: newSkills,
                }));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        className="addSkill"
        type="button"
        onClick={() =>
          setDraftTechnicalSkills((prev) => ({
            ...prev,
            skills: [...prev.skills, { id: crypto.randomUUID, value: "" }],
          }))
        }
      >
        Add Skill
      </button>
      <button
        type="button"
        onClick={() => {
          if (isEditing) {
            handleUpdateTechSkills();
            setEditingTechnicalID(null);
            setDraftTechnicalSkills(initialTechnicalSkillsState);
          } else {
            handleNewTechSkills();
            setEditingTechnicalID(null);
            setDraftTechnicalSkills(initialTechnicalSkillsState);
          }
        }}
      >
        {isEditing ? "Save" : "Add to Resume"}{" "}
        <span className="visually-hidden">technical skills entry</span>
      </button>
    </form>
  );
}
export default TechnicalSkills;
