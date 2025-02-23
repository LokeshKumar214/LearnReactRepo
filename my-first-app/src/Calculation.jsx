const hello = { name: "hello", example: "hek", age: 36 }
const { name, example } = hello;
const name1 = () => {
    return 10;
}
let userObj = {
    name: "lokesh",
    lastName: "Kumar",
    resident: "Delhi",
    homeTown: "Himachal Pradesh"
}
let usernameArray = ["Lokesh", "Vidit", "Sachin", "shivang"]
let x = 20;
let y = 60

function calculate(a, b, oprend) {
    if (oprend == '+') {
        return a + b;
    } else if (oprend == "-") {
        return a - b;
    } else if (oprend == "*") {
        return a * b;
    } else if (oprend == "/") {
        return a / b;
    } else {
        return 0;
    }
}

function Calculate() {

    return (
        <div>

            <center>
                <h1> This is array value:
                    {usernameArray[0]}
                </h1>
                <h1>Sum of x and y : {x + y}</h1>
                <h1>this is calculate function called:  {calculate(4, 9, "/")} </h1>
                <h1> User name is  {userObj.name + " " + userObj.lastName} </h1>
                <input type="text" value={userObj.lastName} />
                <br />

            </center>



        </div>
    )
}
export default Calculate