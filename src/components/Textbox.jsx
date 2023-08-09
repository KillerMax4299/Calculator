import { useState, useRef, useEffect } from "react";
import { MdHistory } from "react-icons/md";

const Textbox = ({ exp }) => {
  const [font_size, setFont_Size] = useState(48);
  const [brk_pts, setBrk_pts] = useState([]);
  const [res, setRes] = useState("");
  const spanbox = useRef();
  const parentSpan = useRef();

  function decreaseFont() {
    setFont_Size(font_size - 8);
  }

  useEffect(() => {
    // Math.floor(spanbox.current.getBoundingClientRect().width

    if (Math.ceil(spanbox.current.getBoundingClientRect().width) > parentSpan.current.clientWidth && font_size > 16) {
      decreaseFont();
      setBrk_pts((prevBrk_pts) => [...prevBrk_pts, exp.length - 1]);
    }

    // setRes(prevbrk_pts=>[...prevbrk_pts]);
  }, [exp]);

  return (
    <div className="rounded-lg border-2 w-auto h-36 bg-zinc-900 row-span-2 col-span-full relative">
      <div className="flex flex-col justify-end h-3/5 text-white text-right p-1 px-4">
        <History />
        <span
          ref={parentSpan}
          className="ml-2 font-light font-mono overflow-hidden"
        >
          <span
            ref={spanbox}
            style={{ fontSize: `${font_size}px`, lineHeight: "1" }}
            className="w-fit max-w-full duration-300 transition-all"
          >
            {exp}
          </span>
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
