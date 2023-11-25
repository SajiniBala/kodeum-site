'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Kodeum exceeded our expectations in creating an online platform for us. They not only deliver exceptional results but also value the client relationship, making them our go-to partner for all things web development.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star style-two" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-2.jpg" alt="" /></div>
                                <div className="author-title">Founder</div>
                                <div className="designation">DreamCrest</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Working with Kodeum was a game-changer for my restaurant. The team's attention to detail and commitment to understanding our unique needs resulted in a website that truly reflects the essence of our brand.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-1.jpg" alt="" /></div>
                                <div className="author-title">CEO</div>
                                <div className="designation">Sentosa</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“We have found a reliable ally in Kodeum. Their creative approach has transformed our online presence into a visual masterpiece. Kodeum provided perfectly complemented the artistic essence of Ethereal Lens.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star style-two" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-4.jpg" alt="" /></div>
                                <div className="author-title">Founder</div>
                                <div className="designation">Ethereal Lens</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Kodeum crafted a seamless & efficient online platform for us, enhancing our customer experience. What sets them apart is not just their technical proficiency but also their dedication to nurturing client relationships.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-3.jpg" alt="" /></div>
                                <div className="author-title">Co-Founder</div>
                                <div className="designation">Jeya Pharma</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                <div className="swiper-pagination relative" />
            </Swiper>

        </>
    )
}
