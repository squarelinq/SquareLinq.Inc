import { Link } from "react-router-dom/cjs/react-router-dom";
import tick from "../Images/tick.png";
import slides from "../Images/VerifyComplete-slider.png";
import Green_tick from '../Images/green-tick.png';
import leftsideImg from "../Images/left-side-img.png";
import "./VerifyComplete.css";

const VerifyComplete = () => {
    const handleContinue = () =>{
        window.location.pathname = '/getstarted';
    }

    return ( 
        <div className="VerificationComplete-container">
            <div className="VerificationComplete-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="VerificationComplete-leftside_container">
                <h1 className="leftside-header">
                    Community
                </h1>
                <p className="paragraph-info">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" />
              </div>
            </div>
            <div className="VerificationComplete-rightside">

                
            {/* This container/div displays the end result when verifying your email */}
              <div className="VerificationCompleteStatusBar">

                <div className="VerificationCompleteStatus_Section1">
                <div id="VerificationCompleteStatus_Section1_left" className="danger-sign">
                    <img src={Green_tick} alt="green-tick" />
                </div>
                <div id="VerificationCompleteStatus_Section1_Right" className = "VerifyComplete_status-txt">
                    <a href="/#">Verification Successful</a>
                </div>
                </div>

                <div className="VerificationCompleteStatus_Section2">

                </div>

                </div>
            {/* ............................................................................... */}

                <h1 className="rightside-header">
                    Verification Complete!!
                </h1>
                <p className="rightside-paragraph">
                    Your email has successfully been verified <Link to="/#" style={{textDecoration: "none", color: "blueViolet"}}>Enable 2FA</Link>
                </p>
                <div className="rightside-minicontainer">
                   <img src={tick} alt="GoodTick" className="tick" />
                   {/* vcBtn is short for verify complete btn, a separated styling was added to this btn to make align for this page alone */}
                     <button className="btn vcBtn" onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </div>
     );
}
 
export default VerifyComplete;