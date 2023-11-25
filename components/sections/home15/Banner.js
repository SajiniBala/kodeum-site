'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination  } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo, useRef } from "react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     stopOnLastSlide: true,
    // },
    speed: 1000,
    loop: false,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {

    const containerRef = useRef(null);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback((container) => {
        containerRef.current = container;

        window.particlesContainer = container;
    }, [containerRef]);

    const options = useMemo(() => ({
        fullScreen: {
            zIndex: -1,
        },
        particles: {
            number: {
                value: 100,
            },
            links: {
                enable: true,
            },
            move: {
                enable: true,
            },
        },
        themes: [
            {
                name: "light",
                default: {
                    value: true,
                    auto: true,
                    mode: "light",
                },
                options: {
                    background: {
                        color: "red",
                    },
                    particles: {
                        color: {
                            value: "#76a89e",
                        },
                        links: {
                            color: "#76a89e",
                        },
                    },
                },
            },
            {
                name: "dark",
                default: {
                    value: true,
                    auto: true,
                    mode: "dark",
                },
                options: {
                    background: {
                        color: "rgba(255, 255, 255, 0.5)",
                    },
                    particles: {
                        color: {
                            value: "#76a89e",
                        },
                        links: {
                            color: "#76a89e",
                        },
                    },
                },
            },
        ],
    }), []);


    return (
        <>
            <section className="banner-section banner-section-home15 text-center">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    <SwiperSlide className="slide-item" data-bg="/assets/images-4/main-slider/8.jpg">
                        <div className="image-layer lazy-image" />
                        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
                        {/* <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/7.jpg" /> */}
                        <div className="auto-container">
                            <div className="content-box">
                                {/* <h2>Cutting-Edge</h2> */}
                                <h2>Digitalize</h2>
                                <h3>Your Businesses with our Tech Solutions</h3>
                                <p style={{color: '#fafcfc'}}>We specialize in turning your digital dreams into reality.</p>
                                <div className="btn-box">
                                    <Link href="/contact-us" style={{margin: '0'}} className="theme-btn btn-style-ten"><span className="btn-title">Let's Start</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}
