import style from './Container.module.css';

function Button({ item, handleDelete }) {
  return (
    <button
      type="button"
      className={`btn btn-danger ${style.Button}`}
      onClick={() => handleDelete(item)}
    >
      Delete
    </button>
  );
}

export default Button;