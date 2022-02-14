import { useEffect } from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

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
  console.log(value);

  useEffect(() => {
    onChange(name, value);
  }, [value, name]);
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
