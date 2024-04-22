import '../App.css'
import CardFacebook from "../Cards/Facebook.jsx"
import CardYoutube from "../Cards/Youtube.jsx"
import CardTiktok from "../Cards/Tiktok.jsx"

function Cards(){
    return(
        <> 
            <div class="cards">
                <CardYoutube></CardYoutube>
                <CardTiktok></CardTiktok>
                <CardFacebook></CardFacebook>
                <CardInstagram></CardInstagram>
            </div> 
        </>
    )
}
export default Cards