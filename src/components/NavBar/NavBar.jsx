import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'>MercadoSalta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/category/tecnologia' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tecnología</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/ropa' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Ropa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/deportes' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Deportes</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
