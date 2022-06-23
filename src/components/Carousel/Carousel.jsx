import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import structure from "./Carousel.module.scss";

export const CarouselProductPage = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div className={structure.section}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/collections/Category_Banner_for_all_travel_brand_categories_2040_x_850px_d58a46df-1317-472c-85a3-fc1dcd10f1f1_1920x.jpg?v=1635911512"
                    alt="woman with luggage"
                />
            </div>
            <div className={structure.section}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/files/01_MainBanners_DesktopTravel_V1_ee32734c-9cfb-4c9a-9c7c-6c4cbae6b3d0_1920x.jpg?v=1655174491"
                    alt="lady with bag"
                />
            </div>
            <div className={structure.section}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/2643/2670/collections/Main_Catergory_Banners_1020_x_425_013_e8975fe7-18d2-4121-bf63-45d30ad9efef_1920x.jpg?v=1635911198"
                    alt="Guess luggage range"
                />
            </div>
        </Carousel>
    );
};
export default CarouselProductPage;
