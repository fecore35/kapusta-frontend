import Select from 'react-select';

function FormSelect({
  value,
  name,
  options,
  touched,
  error,
  onChange,
  onBlur,
  className,
}) {
  const handleChange = value => {
    onChange(name, value);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  return (
    <label>
      <Select
        id={name}
        options={options}
        multi={false}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        classNamePrefix="react-select"
        className={className}
      />
      {!!error && touched && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
      )}
    </label>
  );
}
export default FormSelect;
