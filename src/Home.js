import React from 'react'
import Product from './Product';
import "./Home.css"

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81UwfObBWFL.jpg" alt="Banner" className='home__image' />
                <div className="home__row">
                    <Product title='The Lean Startup (English, Paperback, Ries Eric)  (Paperback, Ries Eric)' price={29.99} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81-QB7nDh4L.jpg" rating={5} />

                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41-v1XOop4L._SY300_SX300_QL70_FMwebp_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49538094"
                        title="Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6 (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA GTX 1650/120Hz/Win 11/Backlit/3months Game Pass/Shadow Black/2.25Kg), 82K10198IN"
                        price={1000}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71--IQUHVwL._SX679_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Vivo Y75 (Dancing Waves, 8GB RAM, 128GB ROM) with No Cost EMI/Additional Exchange Offers"
                        price={250}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61lP0Ts7-uL._SX679_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Pepper Spray for Women Safety self Defence Protection of Men, Girls and Elderly with Glass Breaker Cap and Holster 35g, 55ml by Devil Will Cry- defense of the innocent (Pack of 1)"
                        price={3}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61nNsp-4HrL._SY879_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49538094"
                        title="BRUH Printed Ceramic Coffee Mug - 325 ml, The Office TV Show Dwight Cholesterol Quote Funny Coffee Mug, Great Coffe Mug Gifts to a Friend, Brother or Sister, Microwave & Dishwasher Safe, White"
                        price={"Priceless"}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41QP9f37sxL._SX522_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
