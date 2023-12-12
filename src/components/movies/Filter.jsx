const Filter = props => {
  const { title, setTitle } = props;
  return (
    <div className="my-5">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control"
      />
      {/* Rate Components */}
    </div>
  );
};

export default Filter;
