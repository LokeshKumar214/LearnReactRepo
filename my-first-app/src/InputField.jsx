import { useState } from "react";

function InputsField(){
    const [nameText, setNameText] = useState("")
    const [passText, setPassText] = useState("")

    function showText(message,passText){
        alert(message+"\n"+passText)
    }
    const data={
        age:"",
        id:""
    }
    return(
        <div>
            <center>
                <input name = "inputField" type="text" value={nameText}
                onChange = {
                    (event)=>setNameText(event.target.value)
                }
                 placeholder="Enter Text Here"/>
                 <br />
                 <input name = "passField" type="password" value={passText}
                onChange = {
                    (event)=>setPassText(event.target.value)
                }
                 placeholder="Enter passText Here"/>
                 <br />
                <button onClick={(event)=>showText(nameText,passText)}>
                    Submit</button>
                <br />
                <button onClick={()=> {
                    setNameText("");
                    setPassText("")
                }}>Clear</button>
            </center>
        </div>
    )
}
export default InputsField