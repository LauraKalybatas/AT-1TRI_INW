import Instagram from './Instagram.png'

function cartaoInstagram(){
    return(
        <> 
            <div class="cardInstagram">
                <div class="NumImg">
                    <h1 class="Numeros">04</h1>
                    <img src={Instagram} alt="Instagram" class="Instagram"/>
                </div>
                
                <h1 class="Titulo">Instagram</h1>
                <p class="Texto">Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
            </div>
        </>
    )
}
export default cartaoInstagram