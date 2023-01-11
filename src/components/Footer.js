import '../styles/layout/_footer.scss';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li className="footer__menu-item">
                    <NavLink className="footer__menu-link" to='/'>A jugar</NavLink>
                    </li>
                    <li className="footer__menu-item">
                    <NavLink className="footer__menu-link" to='/instructions'>¿Cómo se juega?</NavLink>
                    </li>
                    <li className="footer__menu-item">
                    <NavLink className="footer__menu-link" to='/options'>Más opciones</NavLink>
                    </li>
                </ul>
            </nav>
            <small className="footer__copy">© Adalab with Mónica Hidalgo</small>
        </footer>
    );
};
export default Footer;