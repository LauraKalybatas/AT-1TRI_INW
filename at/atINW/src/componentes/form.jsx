function formulario(){
    return(
        <> 
            <form>
                <div class="inputForms">
                    <label>Nome:</label>
                    <input type="text" name="Email" value="" class="Input"/>
                </div>

                <div class="inputForms">
                    <label>Email:</label>
                    <input  type="text" name="Mensagem" value="" class="Input"/>
                </div>

                <div className="textArea">
                    <label>Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="10" cols="54"></textarea>
                </div>

                <input type="button" value="Enviar Mensagem" class="botao2"/>
            </form>
        </>
    )
}
export default formulario