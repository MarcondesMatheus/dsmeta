import './styles.css'
import logo from '../../assets/img/logo.svg'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Logo DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/MarcondesMatheus" target="_blank">Matheus Barbosa</a></p>
                </div>
            </header>
        </>
    )
}

export default Header