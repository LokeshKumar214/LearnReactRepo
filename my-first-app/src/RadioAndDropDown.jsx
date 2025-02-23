import React,{useState} from "react";

function RadioAndDropdown(){
    const [gender, setGender] = useState();
    const [state, setState] = useState("Please Select State");


    return(
        <div className="radioButton-container">
            <h1>This is Radio</h1>
            <input onChange={()=>setGender("Male")} type="radio" name="gender" id ="Male" value={"Male"} checked ={gender == "Male"} />
            <label htmlFor="Male">Male</label>
            <br />

            <input onChange={()=>setGender("Female")}  type="radio" id="Female" name="gender"value={'Female'} />
            <label htmlFor="Female">Female</label>

            <h2>selected value is {gender}</h2>

            <div className="drop-container">
            <h1>Select State</h1>
            <select onChange={(event)=> setState(event.target.value) } defaultValue={"Please Select State"} name="drop-container" id="drop-container">
                <option value="delhi">Delhi</option>
                <option value="himachal Pradesh">Himachal Pradesh</option>
                <option value="punjab">Punjab</option>
                <option value="agra">Agra</option>
                <option value="jammu">Jammu</option>
            </select>

            <h1>Selected State Value: {state}</h1>

            </div>

        </div>
    )
}
export default RadioAndDropdown