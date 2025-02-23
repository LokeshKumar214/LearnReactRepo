import { useState } from "react"
import ClockApp from "./clockApp";

function DropdownColorSelect(){
    const [selectedColor ,setColor] = useState("red");
    console.log(selectedColor)
    return(
        <div>
            <h1>Select Color</h1>
            <select onChange={(event)=>{
                    setColor(event.target.value);
                }}>
                <option value="red"> Red</option>
                <option value="Orange"> Orange</option>
                <option value="green"> Green</option>
            </select>
            <br />
            <ClockApp color={selectedColor}/>
        </div>
    )
}
export default DropdownColorSelect