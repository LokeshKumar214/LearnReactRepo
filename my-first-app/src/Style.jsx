import { Button, Stack } from "react-bootstrap"
function StyleLean(){
    return(
        <div className="StyleLean-component">
            <div className="title-wrap">
                <h1>StyleLean Component</h1>
                <div className="image-component" >
                <img className="StyleLean-image-wrap" src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="randomProfile" />
                <div className="StyleLean-pernson-component">
                <h2>software Engineer</h2>
                <p>
                    <h3>Apple</h3>
                    <h3>California</h3>
                </p>
                    
                </div>
                
                <Stack direction="horizontal" gap={3}>
                <Button onClick={() => {
                    console.log("this is jzt a message")
                }} variant ="success"> BootStrap button</Button>
                <Button variant="outline-primary"> BootStrap button</Button>


                </Stack>

               
                </div>
               
            </div>
        </div>
        

    )

}
export default StyleLean