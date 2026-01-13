import CustomInput from "./customInput";
import "../styles/GeneralInfo.css";
import "../styles/custom-input.css";

function GeneralInfo({
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  draftLinks,
  setDraftLinks,
  setCVData,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setDraftGeneralInfoData((prev) => ({ ...prev, [name]: value }));
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
        {draftLinks.map((link) => (
          <div key={link.id} className="linkBox">
            <input
              type="text"
              name={link.linkName}
              id={link.linkName}
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
              name={link.linkAddress}
              id={link.linkAddress}
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
          setCVData((prev) => ({
            ...prev,
            generalInfo: draftGeneralInfoData,
            links: draftLinks,
          }));
        }}
      >
        Save to Resume
        <span className="visually-hidden">general info entries</span>
      </button>
    </form>
  );
}

export default GeneralInfo;
