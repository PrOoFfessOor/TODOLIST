import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
function List({ items, handleDelete }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item}>
          {item} <Button item={item} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default List;