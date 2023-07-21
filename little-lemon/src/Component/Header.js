import Logo from '../Images/Logo .svg';

function Header() {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><a href="home.js">Home</a></li>
                            <li><a href="about.js">About</a></li>
                            <li><a href="menu.js">Menu</a></li>
                            <li><a href="reverse.js">Reverse Table</a></li>
                            <li><a href="order.js">Online Order</a></li>
                            <li><a href="login.js">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header