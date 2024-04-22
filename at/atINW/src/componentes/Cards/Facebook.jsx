import Facebook from './Facebook.png'

function cartaoFacebook(){
    return(
        <> 
            <div class="cardFacebook">
                <div class="NumImg">
                    <h1 class="Numeros">03</h1>
                    <img src={Facebook} alt="facebook" class="facebook"/>
                </div>

                <h1 class="Titulo">Facebook</h1>
                <p class="Texto">Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
            </div>
        </>
    )
}
export default cartaoFacebook