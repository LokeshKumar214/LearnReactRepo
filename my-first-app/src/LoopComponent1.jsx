const LoopComponent1 = ({user})=>{
    return(
        <div style={{    
            border: "2px solid green",
            padding: "10px",
            margin: "20px",
            width: "349px",
            background:"brown",
            borderRadius: "15px"}}>
            <h3>Id: {user.Id}</h3>
            <br />
            <h3>Name: {user.Name}</h3>
            <br />
            <h3>City: {user.City}</h3>
        </div>
    )
}

export default LoopComponent1