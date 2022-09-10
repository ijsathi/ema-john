import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./ExtraPart1.css";
import ExtraPart2 from "./ExtraPart2/ExtraPart2";

const ExtraPart1 = () => {
    return (
        <>
            <div className="extra_part mt-5
        mb-5">
                <div>
                    <h3 className="ms-5">
                        <button style={{ background: "#c79004", color: "#fff" }} className="btn " type="button" disabled>
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Coming soon...
                        </button>
                    </h3>
                </div>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_2X._SY608_CB639752734_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91cqEsyjd-L._AC_SY400_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.media-amazon.com/images/I/41OhlDtpedL._AC_UF452,452_FMjpg_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Desktop_pGC_670x490_1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.vox-cdn.com/thumbor/4qO09TAow5Mu-q6k_FH_KAap0vc=/0x0:2040x1360/1200x800/filters:focal(819x562:1145x888)/cdn.vox-cdn.com/uploads/chorus_image/image/70716414/akrales_220314_5071_0193.0.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Y1P6uIRFL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/*++++++++++++++++++++++++++++++++++ part two +++++++++++++++++++++++++++++*/}
            <ExtraPart2 />
        </>
    );
};

export default ExtraPart1;