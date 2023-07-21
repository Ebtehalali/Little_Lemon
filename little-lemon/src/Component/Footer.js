import GreekSalad from '../Images/GreekSalad.jpg';
import bruchetta from '../Images/bruchetta.svg';
import LemonDessert from '../Images/LemonDessert.jpg';

function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="head-section">
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className="box">
                        <img src={GreekSalad} alt="Greek Salad" />
                        <h3>Greek Salad <span className="price">$12.99</span></h3>
                        <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order Delivery</p>
                    </div>
                    <div className="box">
                        <img src={bruchetta} alt="Bruchetta" />
                        <h3>Bruschetta <span className="price">$5.99</span></h3>
                        <p>
                        Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
                        </p>
                        <p>Order Delivery</p>
                    </div>
                    <div className="box">
                        <img src={LemonDessert} alt="Lemon Dessert" />
                        <h3>Lemon Cake<span className="price">$5.00</span></h3>
                        <p>
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <p>Order Delivery</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer