function Loops() {
    const userObj = [
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

    return (

        <div className="loop-container">
            <h1>This is Loops Page</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>Lokesh</td>
                    <td>Delhi</td>
                    <td>True</td>
                </tbody>
            </table>

            <div className="loop1-container">
                <h1>This is Another Loops Page</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>City</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userObj.map((userDetail) => (
                                <tr>
                                    <td>{userDetail.Id}</td>
                                    <td>{userDetail.Name}</td>
                                    <td>{userDetail.City}</td>
                                    <td>{userDetail.Status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>,
        </div>
    )
}
export default Loops