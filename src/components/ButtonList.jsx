import Buttons from "./Buttons";

const ButtonList = ({UpdateExp,Calculate}) => {
  return (
    <>
      <Buttons text={"C"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"%"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"Del"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"/"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"7"} UpdateExp={UpdateExp} />
      <Buttons text={"8"} UpdateExp={UpdateExp} />
      <Buttons text={"9"} UpdateExp={UpdateExp} />
      <Buttons text={"*"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"4"} UpdateExp={UpdateExp} />
      <Buttons text={"5"} UpdateExp={UpdateExp} />
      <Buttons text={"6"} UpdateExp={UpdateExp} />
      <Buttons text={"-"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"1"} UpdateExp={UpdateExp} />
      <Buttons text={"2"} UpdateExp={UpdateExp} />
      <Buttons text={"3"} UpdateExp={UpdateExp} />
      <Buttons text={"+"} col="dark" UpdateExp={UpdateExp} />
      <Buttons text={"00"} UpdateExp={UpdateExp} />
      <Buttons text={"0"} UpdateExp={UpdateExp} />
      <Buttons text={"."} UpdateExp={UpdateExp} />
      <Buttons text={"="} col="blue" UpdateExp={UpdateExp} Calculate={Calculate}/>
    </>
  );
};

export default ButtonList;
