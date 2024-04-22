function formulario(){
    return(
        <> 
            <form>
                <div className="inputForms">
                    <label>Nome:</label>
                    <input type="text" name="Email" value="" className="Input"/>
                </div>

                <div className="inputForms">
                    <label>Email:</label>
                    <input  type="text" name="Mensagem" value="" className="Input"/>
                </div>

                <div className="textArea">
                    <label>Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="10" cols="54"></textarea>
                </div>

                <input type="button" value="Enviar Mensagem" className="button2"/>
            </form>
        </>
    )
}
export default formulario