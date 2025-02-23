import LoopComponent1 from './LoopComponent1'

const LoopComponet = ()=>{

    const userObj1 = [
        {
            Id: '1',
            Name: "Lokesh",
            City: "Delhi",
            Status: "True"
        },
        {
            Id: '2',
            Name: "Akash",
            City: "Himachal",
            Status: "True"
        },
        {
            Id: '3',
            Name: "Rakesh",
            City: "Karela",
            Status: "False"
        },
    ]
    return(
        <div>
            <h1>This is Loop Componet</h1>
            {
                userObj1.map((userDetail)=>(
                    <div id={userDetail.Id}>
                        <LoopComponent1 user={userDetail} />
                    </div>
                    

                ))
            }
        </div>
    )
}
export default LoopComponet