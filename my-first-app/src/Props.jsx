function PassingDataViaProps({Userprops}) {
    return (
    <div>
        <h2 style={ { background:"aliceblue",color:"brown"}}>DATA FROM PROPS VIA OBJECT name: {Userprops.name}</h2>
        <h2 style={ { background:"aliceblue",color:"brown"}}>DATA FROM PROPS VIA OBJECT name: {Userprops.lastName}</h2>
        <h2 style={ { background:"aliceblue",color:"brown"}}>DATA FROM PROPS VIA OBJECT name: {Userprops.resident}</h2>
        <br />


    </div>
    )
}
export default PassingDataViaProps