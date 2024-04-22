import Maintext from "./MainText"
import TextImage from './img/Hero image.png'
import Cards from "./cards"

function MainContent(){
    return(
        <>
            <div className="MainContent">
                <Maintext></Maintext>
                <img className="TextImg" src={TextImage} alt=""/>
            </div>
            <Cards></Cards>
        </>
    )
}
export default MainContent