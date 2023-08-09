import {useState, useRef, useEffect} from "react";
import { MdHistory } from "react-icons/md";

const Textbox = ({ exp }) => {

  const [font_sz,setFont_sz] = useState(48)
  const spanbox = useRef('')
  const parent_span = useRef()
  const [res, setRes] = useState('')
  
  function UpdateFont(){
    setFont_sz(font_sz - 8)
    console.log(font_sz)
  }

  useEffect(() => {
    Math.floor(spanbox.current.getBoundingClientRect().width)
    
    // spanbox.current.style.fontSize = font_sz + 'px'
    setRes(`${Math.floor(spanbox.current.getBoundingClientRect().width)} ${parent_span.current.clientWidth} ${font_sz}px`)
    
  }, [exp,font_sz]);

  return (
    <div className="rounded-lg border-2 w-auto h-36 bg-zinc-900 row-span-2 col-span-full relative">
      <div className="flex flex-col justify-end h-3/5 text-white text-right p-1 px-4">
        <History UpdateFont={UpdateFont}/>
        <span ref={parent_span} className="border font-light overflow-hidden">
          <span ref={spanbox} style={{lineHeight:'1',fontSize:`${font_sz}px`}} className="transition-all duration-300 border border-blue-400 w-fit max-w-full">{exp}</span>
        </span>
      </div>
      <div className="h-2/5 text-zinc-400/70 font-normal text-right p-1 px-4">
        <span className="align-self-bottom text-3xl">{res}</span>
      </div>
    </div>
  );
};

export default Textbox;

const History = ({UpdateFont}) => {
  return (
    <>
      <button className="absolute top-2 left-2" onClick={UpdateFont}>
        <MdHistory className="text-4xl text-zinc-500 hover:text-zinc-300 transition-all active:text-blue-300/90" />
      </button>
    </>
  );
};
