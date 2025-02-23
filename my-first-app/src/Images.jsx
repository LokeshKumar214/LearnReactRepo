import { useState } from "react";
function Images() {
    const imagePath = "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg";
    const [showImage, showImageToggale] = useState(false);

    return (
        <div>
            <center>
                {
                    showImage? 
                    <img className="avatar" onClick={()=>showImageToggale(false)}
                    src={imagePath}
                    alt="UserImage"
                    style={{
                        width: 90,
                        height: 90
                    }} />
                    : <button onClick={()=>showImageToggale(true)}>Show Image</button>
                }
                
            </center>
        </div>
    )
}
export default Images