import Youtube from './Youtube.png'

function cartaoYoutube(){
    return(
        <> 
            <div class="cardYoutube">
                <div class="NumImg">
                    <h1 class="Numeros">01</h1>
                    <img src={Youtube} alt="Youtube" class="Youtube"/>
                </div>
                
                <h1 class="Titulo">Youtube</h1>
                <p class="Texto">Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
            </div> 
        </>
    )
}
export default cartaoYoutube