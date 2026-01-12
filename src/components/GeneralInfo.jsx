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
      <CustomInput
        label="LinkedIn "
        type="tel"
        name="userLinkedIn"
        id="userLinkedIn"
        value={draftGeneralInfoData.userLinkedIn}
        onChange={handleChange}
      />
      <CustomInput
        label="GitHub "
        type="tel"
        name="userGitHub"
        id="userGitHub"
        value={draftGeneralInfoData.userGitHub}
        onChange={handleChange}
      />
      <div>
        {draftLinks.map((l) => (
          // {
          //   console.log(l);
          // }
          <input
            type="text"
            name={l.linkName}
            id={l.linkName}
            value={l.linkAddress}
          />
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
