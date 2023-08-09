import {useState, useRef, useEffect} from "react";
import { MdHistory } from "react-icons/md";

const Textbox = ({ exp }) => {

  const [res, setRes] = useState('')
  const spanbox = useRef('')

  useEffect(() => {
    Math.floor(spanbox.current.getBoundingClientRect().width)
    
    setRes()
    
  }, [exp]);

  return (
    <div className="rounded-lg border-2 w-auto h-36 bg-zinc-900 row-span-2 col-span-full relative">
      <div className="flex flex-col justify-end h-3/5 text-white text-right p-1 px-4">
        <History />
        <span className="border ml-2 font-light overflow-hidden">
          <span ref={spanbox} className="text-5xl border border-blue-400 w-fit max-w-full">{exp}</span>
        </span>
      </div>
      <div className="h-2/5 text-zinc-400/70 font-normal text-right p-1 px-4">
        <span className="align-self-bottom text-3xl">{res}</span>
      </div>
    </div>
  );
};

export default Textbox;

const History = () => {
  return (
    <>
      <button className="absolute top-2 left-2">
        <MdHistory className="text-4xl text-zinc-500 hover:text-zinc-300 transition-all active:text-blue-300/90" />
      </button>
    </>
  );
};
