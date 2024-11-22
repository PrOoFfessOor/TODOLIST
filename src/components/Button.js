import style from './Container.module.css';
function Button ({item}){
  
  return (
    <>
      <button type="button" className={` btn btn-success ${style.Button}`}
        onClick={()=>console.log(`${item} brought`)}
        >Success</button>
    </>
  )
}
export default Button ;