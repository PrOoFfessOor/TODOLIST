function AddButton({ handleOnClick }) {
  return (
    <button type="button" className="btn btn-success" onClick={handleOnClick}>
      ADD
    </button>
  );
}
export default AddButton;
