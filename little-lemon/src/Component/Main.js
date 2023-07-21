import restauranfood from '../Images/restauranfood.jpg';

function Main() {
    return(
        <>
            <main className="main">
                <div className="container">
                    <div className="left-side">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <button>Reserve a Table</button>
                    </div>
                    <div className="right-side">
                        <img src={restauranfood} alt="Restauran Food" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main