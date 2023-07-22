import Logo from '../Images/Logo .svg';

function Header() {
    return(
        <>
            <header className="header">
                <div className="container">
                    <img src={Logo} alt="Logo" className="logo" />
                    <nav className="nav">
                        <ul>
                            <li><a href="home">Home</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="menu">Menu</a></li>
                            <li><a href="reservations">Reservations</a></li>
                            <li><a href=" online-order">Online order</a></li>
                            <li><a href="login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header