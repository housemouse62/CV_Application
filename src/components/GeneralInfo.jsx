import CustomInput from "./customInput";
import "../styles/GeneralInfo.css";
import "../styles/custom-input.css";

function GeneralInfo({
  updateState,
  cvData,
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  draftLinks,
  setDraftLinks,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setDraftGeneralInfoData((prev) => ({ ...prev, [name]: value }));
  }

  function newGeneralInfo(cv, filtered) {
    return {
      ...cv,
      generalInfo: draftGeneralInfoData,
      links: filtered,
    };
  }

  function handleNewGeneralInfo(filtered) {
    const newCV = newGeneralInfo(cvData.present, filtered);
    updateState(newCV);
  }
  return (
    <form>
      <CustomInput
        label="First Name "
        type="text"
        name="userFirstName"
        id="userFirstName"
        value={draftGeneralInfoData.userFirstName}
        onChange={handleChange}
      />
      <CustomInput
        label="Last Name "
        type="text"
        name="userLastName"
        id="userLastName"
        value={draftGeneralInfoData.userLastName}
        onChange={handleChange}
      />
      <CustomInput
        label="E-mail "
        type="email"
        name="userEmail"
        id="userEmail"
        value={draftGeneralInfoData.userEmail}
        onChange={handleChange}
      />
      <CustomInput
        label="Phone Number "
        type="tel"
        name="userPhone"
        id="userPhone"
        value={draftGeneralInfoData.userPhone}
        onChange={handleChange}
      />
      <div role="group" aria-labelledby="links-label">
        <label id="links-label">Links</label>
        {draftLinks.map((link, index) => (
          <div key={link.id} className="linkBox">
            <input
              type="text"
              aria-label={`Link name ${index + 1}`}
              placeholder="LinkedIn"
              className="linkbox"
              value={link.linkName}
              onChange={(e) => {
                setDraftLinks((prev) =>
                  prev.map((l) =>
                    l.id === link.id ? { ...l, linkName: e.target.value } : l,
                  ),
                );
              }}
            />
            <input
              type="url"
              aria-label={`Link URL ${index + 1}`}
              placeholder="https://linkedin.com/in/..."
              value={link.linkAddress}
              onChange={(e) => {
                setDraftLinks((prev) =>
                  prev.map((l) =>
                    l.id === link.id
                      ? { ...l, linkAddress: e.target.value }
                      : l,
                  ),
                );
              }}
            />
            <button
              type="button"
              className="deleteLink"
              aria-label={`Remove link ${link.linkName || index + 1}`}
              onClick={() => {
                setDraftLinks((prev) => prev.filter((l) => l.id !== link.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <button
        className="addLink"
        type="button"
        onClick={() => {
          setDraftLinks((prev) => [
            ...prev,
            { id: crypto.randomUUID(), linkName: "", linkAddress: "" },
          ]);
          console.log(draftLinks);
        }}
      >
        {" "}
        Add Link
      </button>
      <button
        type="button"
        onClick={() => {
          const filtered = draftLinks
            .map((link) => ({
              ...link,
              linkName: link.linkName.trim(),
              linkAddress: link.linkAddress.trim(),
            }))
            .filter(
              (link) => link.linkName.trim() !== "" && link.linkAddress !== "",
            );
          handleNewGeneralInfo(filtered);
        }}
      >
        Save to Resume
        <span className="visually-hidden">general info entries</span>
      </button>
    </form>
  );
}

export default GeneralInfo;
