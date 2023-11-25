'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider15() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="fas fa-quote-left" /></div>
                        <h3>Game-Changing Collaboration</h3>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>Working with Kodeum was a game-changer for my restaurant. The team's attention to detail and commitment to understanding our unique needs resulted in a website that truly reflects the essence of our brand.</p>
                        <p style={{marginBottom:'0px', color:'#0A0B43',fontSize:'15px'}}>Nethan.A.L</p>
                        <h3>CEO, <span>Sentosa</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="fas fa-quote-left" /></div>
                        <h3>Five-Star Partnership</h3>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>We partnered with Kodeum for our Real Estate Website project, and it was a fantastic decision. Their top-notch software solutions elevated our operations. A five-star experience from start to finish!</p>
                        <p style={{marginBottom:'0px', color:'#0A0B43',fontSize:'15px'}}>Thiwanka Jeyasooriya</p>
                        <h3>Founder, <span>DreamCrest</span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
