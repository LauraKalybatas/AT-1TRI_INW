import {Link} from 'react-router-dom'; 

function Navbar() {

    return(
        <div class='Navbar'>
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/Sobre'>Sobre</Link></a>
            <a><Link to='/Contato'>Contato</Link></a>
        </div>
    )
}

export default Navbar