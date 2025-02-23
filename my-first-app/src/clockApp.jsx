import { useState , useEffect} from "react"

function ClockApp({color}){
    const [timer, settimer] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            settimer(new Date().toLocaleTimeString());
        },1000);
        console.log('hello')
    },[]);
    return(
        <div>
            <h1>Here Clock -- with useEffect</h1>
            <div style={{color: color, background:"pink", borderRadius: "12px",width:"200px", margin:"12px",padding: "2px"}}>
                <center>
                <h1>{timer}</h1>
                </center>
           
            </div>

        </div>
    )
}
export default ClockApp