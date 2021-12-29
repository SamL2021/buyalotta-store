import React from "react";
import { Carousel } from "react-responsive-carousel";
// import heroImg from "../../Assets/img/carousel-img.jpg";
// import imageOne from "../../Assets/img/img-one.jpg";
// import imageTwo from "../../Assets/img/img-two.jpg";
// import imageThree from "../../Assets/img/img-three.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import structure from "./Carousel.module.scss";

export const CarouselProductPage = (autoplay) => {
    return (
        <Carousel showThumbs={false}>
            <div className={structure["section"]}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/collections/Category_Banner_for_all_travel_brand_categories_2040_x_850px_d58a46df-1317-472c-85a3-fc1dcd10f1f1_1920x.jpg?v=1635911512"
                    alt="woman with luggage"
                />
            </div>
            <div className={structure["section"]}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/collections/HOMEPAGE_Banners_Week38_Collections_02_1920x.jpg?v=1640148691"
                    alt="suitcases"
                />
            </div>
            <div className={structure["section"]}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/collections/Main_Catergory_Banners_1020_x_425_013_e8975fe7-18d2-4121-bf63-45d30ad9efef_1920x.jpg?v=1635911198"
                    alt="Guess luggage range"
                />
            </div>
        </Carousel>
    );
};
export default CarouselProductPage;
