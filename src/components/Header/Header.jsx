import './styles.css'
import logo from '../../img/logo.png'

function Header (){
    return(
        <div className='header'>
            <img className='header-img' src={logo}></img>
            <button className='header-button'><h3>Início</h3></button>
        </div>
    )
}
export default Header