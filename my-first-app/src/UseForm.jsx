
import { useFormStatus } from "react-dom"

async function handleForm(){
    console.log("handleForm function called");
    await new Promise(res => setTimeout(res ,200));
}

function CustomerForm(){
    const {pending} = useFormStatus();
    
    return(
        <div>
                
                <input type="text"placeholder="Enter Input"/>
                <br />
                <br />
                <input type="text"placeholder="Enter Input"/>
                <br />
                <br />
                <button className="button-container">submit</button>


        </div>
    )
}
function UseForm(){
    return(
        <div className="Outer-container">
            <center>
            <h1>UseForm</h1>
            <form action={handleForm}>
                <CustomerForm/>
            </form>
            </center>
            

        </div>
    )
}
export default UseForm