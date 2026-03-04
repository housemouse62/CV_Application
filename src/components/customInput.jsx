import "../styles/custom-input.css";

function CustomInput({ label, type, name, id, value, onChange }) {
  return (
    <div className="section-field">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default CustomInput;
