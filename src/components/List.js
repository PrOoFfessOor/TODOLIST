import style from './Container.module.css';
import Button from './Button';
function List({item }){
  return (
    <>
      <ul className="list-group">
        {item.map((item)=>(
      <li key={item} item={item} className={`list-group-item ${style.list}`}>
        {item}
        <Button item={item}/>
        
      </li>
        ))}

      </ul>
    </>
  )
}
export default List;