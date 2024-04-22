import '../App.css'
import CartaoFacebook from "./Cards/Facebook.jsx"
import CartaoYoutube from "./Cards/Youtube.jsx"
import CartaoTiktok from "./Cards/Tiktok.jsx"
import CartaoInstagram from './Cards/Instagram'

function Cards(){
    return(
        <> 
            <div className="cards">
                <CartaoYoutube></CartaoYoutube>
                <CartaoTiktok></CartaoTiktok>
                <CartaoFacebook></CartaoFacebook>
                <CartaoInstagram></CartaoInstagram>
            </div> 
        </>
    )
}
export default Cards