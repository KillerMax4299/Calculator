import { useState, useEffect } from "react";
import Textbox from "./Textbox";
import ButtonList from "./ButtonList";

const UIElements = () => {
  let exps = ["/", "*", "-", "+"];

  const [exp, setExp] = useState("");
  const [text, setText] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    setText(exp.replaceAll("*", "×").replaceAll("/", "÷").replace(/^\./g, '0.'));
    
    if(exp.match(/\D\./g)){
      setExp(exp.replace(/.$/, '0.'));
    }

    if(exp == 'Math err'){
      setRes('press C to clear')
    }
    try {
      setRes(math.evaluate(exp).toString());
    }
    catch{
      setRes('')
    }
    
  }, [exp]);

  function UpdateExp(e) {
    if (e != "Del" && e != "C") {
      setExp(exp + e);
      const lastChar = exp.slice(-1);
      if (exps.includes(e) && exps.includes(lastChar)) {
        setExp(exp.replace(/.$/, e));
      }
      if(lastChar == '.' && e == ".") {
        setExp(exp.replace(/.$/, '.'));
      }
      if(lastChar == '%' && e == "%") {
        setExp(exp.replace(/.$/, '%'));
      }
    } else if (e == "Del" && exp.length > 0)
      setExp(exp.slice(0, exp.length - 1));
    else if (e == "C") {
      setExp("");
    }if(exp == "Math err" && e != 'C'){
      setExp("Math err");
    }
  }

  function Calculate() {
    if (exp.length > 0) {
      try {
        setExp(math.evaluate(exp).toString());
        
      } catch (error) {
        setExp("Math err")
      }
    }
  }

  return (
    <div className="flex justify-center mb-24">
      <div className="grid grid-cols-4 gird-rows-6 gap-2 w-[30rem] max-[500px]:w-[27rem] max-[450px]:w-[24rem] max-[380px]:w-[21rem]">
        <Textbox exp={text} res={res} />
        <ButtonList UpdateExp={UpdateExp} Calculate={Calculate} />
      </div>
    </div>
  );
};

export default UIElements;
