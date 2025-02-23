function CallFunction() {
    function buttonFunction() {
        return alert("This is Button Function called From outside");
    }
    function buttonFunctioParameterize(message) {
        return alert(message);
    }
    return (
        <div>
            <div className="clickMeClass">

                <button onClick={buttonFunction} style={{ background: "grey", color: "black" }}>
                    Click Me without params</button>

                <button onClick={() => buttonFunctioParameterize("this is new button function called from parameterize")} style={{ background: "yellow", color: "black" }}>
                    Click Me With params </button>

            </div>
        </div>
    )
}
export default CallFunction