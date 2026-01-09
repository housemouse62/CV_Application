import "../styles/custom-input.css";

function CustomInput({ label, type, name, value, onChange }) {
  return (
    <div className="section-field">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default CustomInput;
