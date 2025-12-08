import { Link } from "react-router-dom"

function Training(){
    return(
        <>
            <h1 className="header">Training</h1>

            <div className="body-focus">
                <h2 className="sub-header">Body Focus</h2>

                <Link to="/training/abs">
                    <img src="src/assets/Abs.png" alt="abs" id="abs"/> Abs 
                </Link>

                <Link to="/training/arms">
                    <img src="src/assets/Arms.png" alt="arms" id="arms"/> Arms
                </Link>

                <Link to="/training/chest">
                    <img src="src/assets/Chest.png" alt="chest" id="chest"/> Chest
                </Link>

                <Link to="/training/legs">
                    <img src="src/assets/Legs.jpeg" alt="legs"/> Legs
                </Link>

                <Link to="/training/shoulder-and-back">
                    <img src="src/assets/Shoulder and back.png" alt="back"/> Shoulder and Back
                </Link>
            </div>
        
        </>
        
    )
}

export default Training