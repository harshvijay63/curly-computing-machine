import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import polo1 from "../assets/polo1.webp";
import polo2 from "../assets/polo2.webp";
import polo3 from "../assets/polo3.webp";
import polo4 from "../assets/polo4.webp";
import polo5 from "../assets/polo5.webp";
import polo6 from "../assets/polo6.webp";
import shirtImage from "../assets/Tshirt1.webp";
import tshirt3 from "../assets/Tshirt2.webp";
import tshirt4 from "../assets/Tshirt3.webp";
import tshirt5 from "../assets/Tshirt4.webp";
import tshirt6 from "../assets/Tshirt5.webp";
import tshirt7 from "../assets/Tshirt6.webp";
import tshirt8 from "../assets/Tshirt7.webp";
import tshirt9 from "../assets/Tshirt8.jpeg";
import shorts1 from "../assets/short1.webp";
import shorts2 from "../assets/short2.webp";
import shorts3 from "../assets/short3.webp";
import shorts4 from "../assets/short4.webp";
import shorts5 from "../assets/short5.webp";
import shorts6 from "../assets/short6.webp";
import Lowers1 from "../assets/lower1.webp";
import Lowers2 from "../assets/lower2.webp";
import Lowers3 from "../assets/lower3.webp";
import Lowers4 from "../assets/lower4.webp";
import Lowers5 from "../assets/lower5.webp";
import Lowers6 from "../assets/lower6.webp";

const Articles = () => {
    const [sortType, setSortType] = useState(null);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleCategoryClick = (type) => {
        console.log(`Filtering for type: ${type}`); // Debugging statement
        setSortType(type);
    };

    const products = [
     
        

        { id: 1, type: 'Polos', image: polo1, priceRange: '$69.00 - $99.00', name: ' Jack & Grey Polo' },
        { id: 2, type: 'Polos', image: polo2, priceRange: '$69.00 - $99.00', name: ' Jack & Jones Polo' },
        { id: 3, type: 'Polos', image: polo3, priceRange: '$69.00 - $99.00', name: ' Jack & Jones Green Polo' },
        { id: 4, type: 'Polos', image: polo4, priceRange: '$69.00 - $99.00', name: 'Snitch Red Polo' },
        { id: 5, type: 'Polos', image: polo5, priceRange: '$69.00 - $99.00', name: ' Gas Grey Polo' },
        { id: 6, type: 'Polos', image: polo6, priceRange: '$69.00 - $99.00', name: ' J&C Green Polo' },



        { id: 7, type: 'T-Shirt', image: shirtImage, priceRange: '$69.00 - $99.00', name: ' Gap Pinkiee T-Shirt' },
        { id: 8, type: 'T-Shirt', image: tshirt3, priceRange: '$69.00 - $99.00', name: ' Armani White T-Shirt' },
        { id: 9, type: 'T-Shirt', image: tshirt4, priceRange: '$69.00 - $99.00', name: ' Jack & Jones Red T-Shirt' },
        { id: 10, type: 'T-Shirt', image: tshirt5, priceRange: '$69.00 - $99.00', name: ' Jack & Jones Dark Blue T-Shirt' },
        { id: 11, type: 'T-Shirt', image: tshirt6, priceRange: '$69.00 - $99.00', name: 'Italy Whitezz T-Shirt' },
        { id: 12, type: 'T-Shirt', image: tshirt7, priceRange: '$69.00 - $99.00', name: 'Black Armani Premium T-Shirt' },
        { id: 13, type: 'T-Shirt', image: tshirt8, priceRange: '$69.00 - $99.00', name: ' Goodz T-Shirt' },
        { id: 14, type: 'T-Shirt', image: tshirt9, priceRange: '$69.00 - $99.00', name: 'Wrongn T-Shirt' },



        { id: 15, type: 'Shorts', image: shorts1, priceRange: '$69.00 - $99.00', name: 'Patagonia Baggies Short' },
        { id: 16, type: 'Shorts', image: shorts2, priceRange: '$69.00 - $99.00', name: ' Amazon Essentials Short' },
        { id: 17, type: 'Shorts', image: shorts3, priceRange: '$69.00 - $99.00', name: '  Nike Short' },
        { id: 18, type: 'Shorts', image: shorts4, priceRange: '$69.00 - $99.00', name: '  Van Heusen Short' },
        { id: 19, type: 'Shorts', image: shorts5, priceRange: '$69.00 - $99.00', name: ' Lacoste Short ' },
        { id: 20, type: 'Shorts', image: shorts6, priceRange: '$69.00 - $99.00', name: '  United Colors of Benetton Short' },
        



        { id: 21, type: 'Lowers', image: Lowers1, priceRange: '$69.00 - $99.00', name: 'Allen Solly Lower ' },
        { id: 22, type: 'Lowers', image: Lowers2, priceRange: '$69.00 - $99.00', name: 'GAP Lower' },
        { id: 23, type: 'Lowers', image: Lowers3, priceRange: '$69.00 - $99.00', name: 'Roadster Lower ' },
        { id: 24, type: 'Lowers', image: Lowers4, priceRange: '$69.00 - $99.00', name: 'U.S. Polo Assn jogger' },
        { id: 25, type: 'Lowers', image: Lowers5, priceRange: '$69.00 - $99.00', name: 'Superdry Jogger' },
        { id: 26, type: 'Lowers', image: Lowers6, priceRange: '$69.00 - $99.00', name: 'Levi TrackPant ' },



    ];
    const filteredProducts = sortType ? products.filter(product => product.type === sortType) : products;
    const itemsPerSlide = 4;
const carouselItems = [];

for (let i = 0; i < filteredProducts.length; i += itemsPerSlide) {
  const items = filteredProducts.slice(i, i + itemsPerSlide);
  carouselItems.push(
    <Carousel.Item key={i}>
      <div className="d-flex justify-content-around">
        {items.map(product => (
          <div key={product.id} className="text-center" style={{ flex: "1 0 25%" }}>
            <img src={product.image} alt={product.name} className="zoom-effect" style={{ width: "90%", height: "auto" }} />
            <div className="hp-s35">
              <h5>{product.name}</h5>
              {product.price ? (
                <h4>{product.price}</h4>
              ) : (
                <h4>
                  {product.oldPrice && <s>{product.oldPrice}</s>} {product.priceRange}
                </h4>
              )}
              {product.discount && <div className="hp-s341">{product.discount}</div>}
            </div>
          </div>
        ))}
      </div>
    </Carousel.Item>
  );
}


    const sortedProducts = sortType ? products.filter(product => product.type === sortType) : products;

    return (
        <>
            <section id="articles">
                <div className="hp-s2">
                    <div className="hp-s21" onClick={() => handleCategoryClick('Polos')}>
                        <HashLink to="#great-selection" className="link-overlay">
                            <span>Visit Great Selection</span>
                        </HashLink>
                        <div className="hp-s24"><h5>Polos</h5></div>
                    </div>

                    <div className="hp-s22" onClick={() => handleCategoryClick('T-Shirt')}>
                        <HashLink to="#great-selection" className="link-overlay">
                            <span>Visit Great Selection</span>
                        </HashLink>
                        <div className="hp-s24"><h5>T-shirts</h5></div>
                    </div>

                    <div className="hp-s23" onClick={() => handleCategoryClick('Shorts')}>
                        <HashLink to="#great-selection" className="link-overlay">
                            <span>Visit Great Selection</span>
                        </HashLink>
                        <div className="hp-s24"><h5>Shorts</h5></div>
                    </div>

                    <div className="hp-s25" onClick={() => handleCategoryClick('Lowers')}>
                        <HashLink to="#great-selection" className="link-overlay">
                            <span>Visit Great Selection</span>
                        </HashLink>
                        <div className="hp-s24"><h5>Lowers</h5></div>
                    </div>
                </div>
            </section>

            {/* <section id="great-selection">
                <div className="hp-s31">
                    <h1>Great Selection</h1>
                    <p>Follow the most popular trends and get the best out of the spring collection</p>
                </div>
                <div className="hp-s32">
                    {sortedProducts.map(product => (
                        <div key={product.id} className="hp-s33">
                            <div className="hp-s34">
                                <img src={product.image} alt={product.name} />
                                {product.discount && <div className="hp-s341">{product.discount}</div>}
                            </div>
                            <div className="hp-s35">
                                <h5>{product.name}</h5>
                                {product.price ? (
                                    <h4>{product.price}</h4>
                                ) : (
                                    <h4>{product.oldPrice && <s>{product.oldPrice}</s>} {product.priceRange}</h4>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}



            <section id="great-selection">
  <div className="hp-s31">
    <h1>Great Selection</h1>
    <p>Follow the most popular trends and get the best out of the spring collection</p>
  </div>
  <Carousel className="carousel-fade" activeIndex={index} onSelect={handleSelect} interval={3000}>
    {carouselItems}
  </Carousel>
</section>
        </>
    );
};

export default Articles;
