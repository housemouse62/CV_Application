import CustomInput from "./customInput";
function TechnicalSkills({
  setCVData,
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

  return (
    <form>
      <CustomInput
        label="Skill Category "
        type="text"
        name="skillCategory"
        value={draftTechnicalSkills.skillCategory}
        onChange={handleChange}
      />
      <div className="skills">
        <label htmlFor="skills">Skills</label>
        {draftTechnicalSkills.skills.map((skill, index) => (
          <div key={skill.id} className="skillLine">
            <input
              label="Skill "
              type="text"
              value={skill.value}
              className="skill"
              onChange={(e) => {
                const updated = [...draftTechnicalSkills.skills];
                updated[index] = e.target.value;
                setDraftTechnicalSkills((prev) => ({
                  ...prev,
                  skills: updated,
                }));
              }}
            />
            <button
              type="button"
              className="deleteSkill"
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
            skills: [...prev.skills, ""],
          }))
        }
      >
        Add Skill
      </button>
      <button
        type="button"
        onClick={() => {
          if (isEditing) {
            setCVData((prev) => ({
              ...prev,
              technicalSkills: prev.technicalSkills.map((skill) =>
                skill.id === editingTechnicalID
                  ? { ...draftTechnicalSkills, id: editingTechnicalID }
                  : skill,
              ),
            }));
            setEditingTechnicalID(null);
            setDraftTechnicalSkills(initialTechnicalSkillsState);
          } else {
            setCVData((prev) => ({
              ...prev,
              technicalSkills: [
                ...prev.technicalSkills,
                { ...draftTechnicalSkills, id: crypto.randomUUID() },
              ],
            }));
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
