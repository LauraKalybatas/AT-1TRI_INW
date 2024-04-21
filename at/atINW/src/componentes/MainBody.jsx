import Maintext from "./MainText"
import TextImage from '../img/Hero image.png'

function MainBody(){
    return(
        <>
            <div class="MainBody">
                <Maintext></Maintext>
                <img class="TextImg" src={TextImage} alt=""/>
            </div>
            <Cartoes></Cartoes>
        </>
    )
}
export default MainBody