import './Input.css'

export function Input({
  label,
  size = 'medium',
  variant='outline',
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div className="input-group flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`input input-${size} input-${variant}`}
      />
    </div>
  );
}
