import {Link} from 'react-router-dom'; 

function Navbar() {

    return(
        <div className='Navbar'>
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/sobre'>Sobre</Link></a>
            <a><Link to='./contato'>Contato</Link></a>
        </div>
    )
}

export default Navbar