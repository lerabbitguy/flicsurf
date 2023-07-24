import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>FlicSurf</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/shows">TV Shows</Link>
                <Link to="/lists">Lists</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;