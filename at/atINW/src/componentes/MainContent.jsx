import Maintext from "./MainText"
import TextImage from '../img/Hero image.png'

function MainContent(){
    return(
        <>
            <div class="MainContent">
                <Maintext></Maintext>
                <img class="TextImg" src={TextImage} alt=""/>
            </div>
            <Cartoes></Cartoes>
        </>
    )
}
export default MainContent