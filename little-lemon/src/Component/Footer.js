import GreekSalad from '../Images/GreekSalad.jpg';
import bruchetta from '../Images/bruchetta.jpg';
import LemonDessert from '../Images/LemonDessert.jpg';

function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="section-heading">
                        <h2>Specials</h2>
                    </div>
                    <div className="orders">
                        <button>Online Order</button>
                    </div>
                    <div className="box GreekSalad">
                        <img src={GreekSalad} alt="GreekSalad" />
                        <h3>Greek Salad<span className="price">$12.99</span></h3>
                        <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <strong>Order Delivery</strong>
                    </div>
                    <div className="box bruchetta">
                        <img src={bruchetta} alt="bruchetta" />
                        <h3>Bruschetta<span className="price">$5.99</span></h3>
                        <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.
                        </p>
                        <strong>Order Delivery</strong>
                    </div>
                    <div className="box LemonDessert">
                        <img src={LemonDessert} alt="LemonDessert" />
                        <h3>Lemon Cake<span className="price">$5.00</span></h3>
                        <p>
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <strong>Order Delivery</strong>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer