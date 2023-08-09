import { useState, useEffect } from "react";
import Textbox from "./Textbox";
import ButtonList from "./ButtonList";

const UIElements = () => {
  const [exp, setExp] = useState("");
  const [text, setText] = useState("");
  

  useEffect(() => {
    setText(exp.replaceAll("*", "×").replaceAll("/", "÷"));
  }, [exp]);

  function UpdateExp(e) {
    if (e != "Del" && e != "C") setExp(exp + e);
    else if (e == "Del" && exp.length > 0) setExp(exp.slice(0, exp.length - 1));
    else if (e == "C") setExp("");
  }

  function Calculate(){
    if(exp.length > 0)
    setExp(math.evaluate(exp).toString())
  }

  return (
    <div className="flex justify-center mb-24">
      <div className="grid grid-cols-4 gird-rows-6 gap-2 w-[30rem] max-[500px]:w-[27rem] max-[450px]:w-[24rem] max-[380px]:w-[21rem]">
        <Textbox exp={text} />
        <ButtonList UpdateExp={UpdateExp} Calculate={Calculate}/>
      </div>
    </div>
  );
};

export default UIElements;
