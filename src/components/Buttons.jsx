
import { MdOutlineBackspace } from "react-icons/md";
const Buttons = ({ text, col , UpdateExp,Calculate}) => {
  let style;


  let number = text
  if(text == '*')
    number = '×'
  else if(text == '/')
    number = '÷'

  const HandleClick = (e)=>{
    if(e.target.value == '=')
      Calculate()
    else  
    UpdateExp(text)
  }

  switch (col) {
    case "dark":
      style = `flex justify-center items-center text-2xl w-auto min-w-[5rem] h-16 rounded bg-zinc-700 text-white 
      ring-1 ring-blue-50/[0] active:bg-zinc-700
      transition-all duration-200 hover:bg-zinc-600 active:ring-blue-50`;
      break;
    case "blue":
      style = `flex justify-center items-center text-2xl w-auto min-w-[5rem]  h-16 rounded bg-blue-300 text-zinc-800 
      ring-1 ring-blue-50/[0] 
      transition-all duration-200 hover:bg-blue-200 active:ring-blue-50`;
      break;
    default:
      style = `flex justify-center items-center text-2xl w-auto min-w-[5rem] h-16 rounded bg-zinc-500/80 text-white 
      ring-1 ring-blue-50/[0] 
      transition-all duration-200 hover:bg-zinc-500 active:ring-blue-50`;
  }
  if (text == "Del")
    return (
      <>
        <button className={style} value={text} onClick={HandleClick} >
          <MdOutlineBackspace/>
        </button>
      </>
    );
  else
    return (
      <>
        <button className={style} value={text} onClick={HandleClick}>
          {number}
        </button>
      </>
    );
};

export default Buttons;
