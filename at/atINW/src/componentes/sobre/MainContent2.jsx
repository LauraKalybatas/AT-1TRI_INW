import Maintext2 from "./MainText2"
import TextImage2 from '../img/Viseo Merge screen 1.png'
import TextImage3 from '../img/Viseo Merge screen 1.png'

function MainContent2(){
    return(
        <>
            <div className="MainContent">
                <Maintext2></Maintext2>
                <img className="TextImg2" src={TextImage3} alt=""/>
                <img className="TextImg2" src={TextImage2} alt=""/>
            </div>
        </>
    )
}
export default MainContent2

