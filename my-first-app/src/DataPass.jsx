function PassingDataToTWoCompoment({count ,onclick}) {
    return (
        <div>
            <center>
                <button onClick={onclick}>
                    Clicked {count} times
                </button>

            </center>


        </div>
    )
}
export default PassingDataToTWoCompoment