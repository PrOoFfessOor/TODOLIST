import style from './Container.module.css'
function Input(){
  return (
    <>
      <input className={style.Input} type ='text' placeholder='Enter your food item' 
        onChange={(event)=>console.log(event.target.value)}/>
    </>
  )
}
export default Input;