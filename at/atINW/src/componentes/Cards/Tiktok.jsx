import Tiktok from './Tiktok.png'

function cartaoTiktok(){
    return(
        <> 
            <div class="cardTiktok">
                <div class="NumImg">
                    <h1 class="Numeros">02</h1>
                    <img src={Tiktok} alt="Tiktok" class="Tiktok"/>
                </div>
                
                <h1 class="Titulo">Tiktok</h1>
                <p class="Texto">Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
            </div>
        </>
    )
}
export default cartaoTiktok