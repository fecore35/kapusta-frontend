function FormInput({
  value,
  name,
  touched,
  error,
  onChange,
  classLabel,
  ...props
}) {
  return (
    <label className={classLabel}>
      <input
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!error && touched && (
        <div
          className="input-error"
          style={{ color: 'red', marginTop: '.5rem' }}
        >
          {error}
        </div>
      )}
    </label>
  );
}

export default FormInput;
