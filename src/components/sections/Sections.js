const Sections = ({ children, className = '' }) => {
  return (
    <>
      <section className={`section ${className}`}>
        <div className="container">{children}</div>
      </section>
    </>
  );
};
export default Sections;
