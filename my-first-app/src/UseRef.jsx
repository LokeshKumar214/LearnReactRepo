import { useRef } from "react";

function UseReF(){
    const inputRef =  useRef(null);

    function handle_inputRef(){
        inputRef.current.value=  1000;
        inputRef.current.value=  1000;
        inputRef.current.focus();

        inputRef.current.style.color = "yellow";
    }
    function handle_inputRefClear(){
        inputRef.current.value= null;
    }

    return(
        <div className="Outer-container">
        <div style={{color:"brown",backgroundColor:"coral",width:"300px",borderRadius:"5px",marginLeft: "auto",marginRight:"auto",markerEnd:"2px",padding:"12px"}}>
            <h1>USEREF</h1>
            <input ref= {inputRef} type="text"placeholder="Enter Input" />
            <br />
            <br />
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"9px"}}>
            <button style ={{backgroundColor:"green"}} onClick={handle_inputRef} >Submit</button>
            <button style ={{backgroundColor:"red"}} onClick={handle_inputRefClear} >Clear</button>
            </div>
            
            </div>
        </div>
    )
}
export default UseReF;