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
      <div>
        <label htmlFor="links">Links</label>
        {draftLinks.map((link) => (
          <div key={link.id} className="linkBox">
            <input
              type="text"
              id={`link-name-${link.id}`}
              placeholder="LinkdIn"
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
              type="text"
              id={`link-address-${link.id}`}
              placeholder="www.linkdin.com..."
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
