import React, { useState } from "react"
import Welcome from "./Welcome";
import './App.css'
import PassingDataViaProps from "./Props";
import OnlyText from "./OnlyText";
import Buttons from "./Buttons";
import CallFunction from "./CallFunction";
import Calculate from "./Calculation";
import Images from "./Images";
import PassingDataToTWoCompoment from "./DataPass";
import TextComponent from "./TextComponent";
import PassingJSX from "./PassingJSX";
import PassingHtmlProps from "./Passing_htmlProps"
import InputsField from './InputField'
import Checkbox from "./CheckBox";
import RadioAndDropdown from "./RadioAndDropDown";
import Loops from "./Loops";
import LoopComponet from "./LoopComponent";
import ClockApp from "./clockApp";
import DropdownColorSelect from "./DropdownColorSelect";
import StyleLean from "./Style";
import UseReF from "./UseRef";
import UseForm from "./UseForm";


function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  function handle2Click(){
    setCount(count-1);
  }
  const userObj1 = [
    {
        Id: '1',
        Name: "Lokesh",
        City: "Delhi",
        Status: "True"
    },
    {
        Id: '2',
        Name: "Akash",
        City: "Himachal",
        Status: "True"
    },
    {
        Id: '3',
        Name: "Rakesh",
        City: "Karela",
        Status: "False"
    },
];

  let userObj = {
    name: "lokesh",
    lastName: "Kumar",
    resident:"Delhi",
    homeTown: "Himachal Pradesh"
  }

  return (
  <div className="App">

    <Welcome></Welcome>
    <br />
    <UseForm/>





    <UseReF/>
    <StyleLean/>
    <br />
    <DropdownColorSelect/>
    <Checkbox/>
    <RadioAndDropdown/>
    <Loops/>
    <LoopComponet/>

  {/* <PassingDataViaProps name="LOKESH" age ={90} email ="kadian194@gmail.com"/> */}
  <PassingDataViaProps Userprops ={userObj}/>

  <OnlyText/>

  <Buttons/>

  <Calculate/>

  <CallFunction></CallFunction>

  <Images/>
  <TextComponent passString={"Single Click will update two component"}/>
  
  <PassingDataToTWoCompoment count={count}  onclick={handleClick} />
  <PassingDataToTWoCompoment count={count}  onclick={handle2Click} />

  <PassingJSX name={"lokesh"}/>
  <PassingJSX />
  <PassingJSX name={"akash"}/>

  <TextComponent passString={"Props in React 1"}/>
  <PassingHtmlProps>
    <h1>Hello</h1>
  </PassingHtmlProps>

  <TextComponent passString={"Props in React 2"}/>
  <PassingHtmlProps>
    <h2 style={{border:"3px solid green",width:"300px"}}>Please login</h2>
  </PassingHtmlProps>


  <TextComponent passString={"Props in React 3"}/>
  <PassingHtmlProps color ="blue"> </PassingHtmlProps>

  <InputsField></InputsField>









  </div>
  )
}

export default App;
