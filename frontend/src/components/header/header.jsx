import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <Link to={'/home'}>
                    DietDesigner
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/frontend/templates/recipes.html">Recipes</a>
                    </li>
                    <li>
                        <a href="/frontend/templates/blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="/frontend/templates/forum.html">Forum</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttonsContainer}>
                <Link to={'/register'}>
                    Register
                </Link>
                <Link to={'/login'}>
                    Login
                </Link>
            </div>
        </header >
    )
}

export default Header;