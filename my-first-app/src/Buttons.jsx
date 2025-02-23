import React,{useState} from "react";
function Buttons() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <center>
                <div style={{ background: "darkcyan" }}>Counter Value: {counter}</div>
                <div className="button-container">

                    {/*  FIRST BUTTON */}
                    <button style={{ background: "fuchsia" }} onClick={
                        () => { setCounter(counter + 1) }
                    }>IncreaseCounter</button>

                    {/*  SECOND BUTTON */}
                    <button style={{ background: "deeppink" }} onClick={
                        () => { setCounter(0) }
                    }>Reset Value</button>


                    


                </div>

            </center>


        </div>
    )
}
export default Buttons