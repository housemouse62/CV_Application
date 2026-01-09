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
      <div class="skills">
        <label for="skills">Skills</label>
        {draftTechnicalSkills.skills.map((skill, index) => (
          <input
            key={index}
            label="Skill "
            type="text"
            value={skill}
            className="skill"
            onChange={(e) => {
              const updated = [...draftTechnicalSkills.skills];
              updated[index] = e.target.value;
              setDraftTechnicalSkills((prev) => ({ ...prev, skills: updated }));
            }}
          />
        ))}
      </div>
      {/* <CustomInput
        label="Skill "
        type="text"
        name="skill"
        value={draftTechnicalSkills.skills}
        onChange={handleChange}
      /> */}
      <button
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
