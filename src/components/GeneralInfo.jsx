import CustomInput from "./customInput";
import "../styles/GeneralInfo.css";

function GeneralInfo({
  draftGeneralInfoData,
  setDraftGeneralInfoData,
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
        label="Address "
        type="tel"
        name="userAddress"
        id="userAddress"
        value={draftGeneralInfoData.userAddress}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          setCVData((prev) => ({
            ...prev,
            generalInfo: draftGeneralInfoData,
          }));
        }}
      >
        Add <span className="visually-hidden">general info entries</span>
      </button>
    </form>
  );
}

export default GeneralInfo;
