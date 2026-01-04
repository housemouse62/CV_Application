import CustomInput from "./customInput";

function GeneralInfo({
  draftGeneralInfoData,
  setDraftGeneralInfoData,
  setCVData,
}) {
  return (
    <div>
      <CustomInput
        label="First Name "
        type="text"
        name="userFirstName"
        id="userFirstName"
        value={draftGeneralInfoData.userFirstName}
        onChange={(e) =>
          setDraftGeneralInfoData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="Last Name "
        type="text"
        name="userLastName"
        id="userLastName"
        value={draftGeneralInfoData.userLastName}
        onChange={(e) =>
          setDraftGeneralInfoData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="E-mail "
        type="email"
        name="userEmail"
        id="userEmail"
        value={draftGeneralInfoData.userEmail}
        onChange={(e) =>
          setDraftGeneralInfoData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="Phone Number "
        type="tel"
        name="userPhone"
        id="userPhone"
        value={draftGeneralInfoData.userPhone}
        onChange={(e) =>
          setDraftGeneralInfoData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <CustomInput
        label="Address "
        type="tel"
        name="userAddress"
        id="userAddress"
        value={draftGeneralInfoData.userAddress}
        onChange={(e) =>
          setDraftGeneralInfoData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <button
        onClick={() => {
          setCVData((prev) => ({
            ...prev,
            generalInfo: draftGeneralInfoData,
          }));
        }}
      >
        Add
      </button>
    </div>
  );
}

export default GeneralInfo;
