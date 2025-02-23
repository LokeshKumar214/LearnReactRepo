import React,{useState} from "react";
function Checkbox(){

    const [skill,setSkill] = useState([])
    function handleSkillEvent(event){
        if(event.target.checked){
            setSkill([...skill, event.target.value])
        }else{
            setSkill([...skill.filter((item)=> item!= event.target.value) ])
        }
    }
    return(
        <div >
        <h1>Select your favorite brand</h1>

        <input onChange={handleSkillEvent} type="checkbox" id="PUMA" value={"PUMA"}/> 
        <label htmlFor="PUMA">PUMA</label>
        <br /> 

        <input onChange={handleSkillEvent} type="checkbox" id="ADIDAS" value={"ADIDAS"}/> 
        <label htmlFor="ADIDAS">ADIDAS</label>
        <br /> 

        <input onChange={handleSkillEvent} type="checkbox" id="NIKE" value={"NIKE"}/> 
        <label htmlFor="NIKE">NIKE</label>
        <br /> 

        <input onChange={handleSkillEvent} type="checkbox" id="REBOOK" value={"REBOOK"}/> 
        <label htmlFor="REBOOK">REBOOK</label>
        <br /> 
        <div className="result-container">
        <h1>Selected Brands be: {skill.toString()}</h1>
        </div>
        
        
        </div>

    )
    
}

export default Checkbox