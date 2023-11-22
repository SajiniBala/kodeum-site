
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import TestimonialSlider16 from "@/components/slider/TestimonialSlider16"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import Link from "next/link"


export const metadata = {
    title: 'About Us | Kodeum: Empowering Businesses with Innovative IT Solutions',
    description: 'Discover the story behind Kodeum, a leading IT solutions provider. Learn about our commitment to delivering innovative web development, mobile app development, ecommerce solutions, digital marketing, and business branding services globally.'
    }

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="About Us">
                <div>
                    {/* About Section */}
                    <section className="about-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-5.jpg" alt="" /></div></div>
                                        <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-4.jpg" alt="" /></div></div>
                                        <div className="logo"><img src="/assets/images/icons/icon-12.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2>We Provide Professional and dedicated IT Solutions For Your Business</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">Welcome to Kodeum, an innovative IT solutions providers dedicated to providing exceptional business solutions to clients locally and globally. With our commitment to innovation and a client-centric approach, we empower businesses to thrive in the digital landscape.</div>
                                    </div>
                                    <div className="text-block">
                                        <h5>Our Approach </h5>
                                        <h4>Client-Centric</h4>
                                    </div>
                                    <div className="text-block">
                                        <h5>Our Expertise</h5>
                                        <h4>Digital Transformation </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Features Section Six */}
                    <section className="features-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <div className="sec-title">
                                            <h2>Why You Should Choose Us</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-diamond" /></div>
                                                <h4>Comprehensive Technology Expertise</h4>
                                                <div className="text">This breadth of expertise allows us to offer comprehensive solutions, ensuring that your business stays ahead in the digital era.</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-bot" /></div>
                                                <h4>End-to-End Support and Innovation</h4>
                                                <div className="text">We go beyond initial development, providing ongoing support, maintenance, and innovative strategies for your digital presence.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {/* <div className="video-box"> */}
                                    <div>
                                        <div className="image"><img src="/assets/images/resource/image-49.jpg" alt="" /></div>
                                        {/* <VideoPopup /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Why Choose Us Section Three */}
                    <section className="why-choose-us-section-three">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We Elevate Your Business with Our Exceptional Approach</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-rocket-2" /></div>
                                                <h4>Innovative Business Strategies</h4>
                                                <div className="text">We craft innovative solutions tailored to your unique needs.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-target-1" /></div>
                                                <h4>Collaborative Dynamics</h4>
                                                <div className="text">The synergy results in solutions that go beyond expectations.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-world-1" /></div>
                                                <h4>Unparalleled Technical Mastery</h4>
                                                <div className="text">We boast expertise across a spectrum of cutting-edge technologies.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-advice" /></div>
                                                <h4>Proactive Problem Solving</h4>
                                                <div className="text">We anticipate and address the problems before they impact your business.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <h4>Continuous Innovation Culture</h4>
                                                <div className="text">We foster an environment that encourages ongoing creativity & improvement.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>Client-Centric Approach</h4>
                                                <div className="text">Your satisfaction and success drive our strategies and actions.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonial-section-seven">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Words from our clients</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            {/*Theme Carousel*/}
                            <TestimonialSlider5 />
                        </div>
                    </section>
                    <section style={{padding: '100px 0 150px 0'}} className="feature-section-two">
                        <div className="auto-container">
                            <div className="row">
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Kodeum</h4>
                                            <div className="text">Unlock boundless possibilities as you join forces with Kodeum, your gateway to innovation, & success.</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Kodeum</h4>
                                            <div className="text">Ignite  your career at Kodeum, where every opportunity propels you to excellence.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="cta-section-two style-two" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-4.jpg)', backgroundPosition: 'center' }}>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2><span className="flaticon-team" />Sharing Expertise. Building <br />Relationships.</h2>
                                </div>
                                <div className="col-lg-5">
                                    <div className="wrapper-box">
                                        <div className="contact-info">
                                            <div className="icon"><span className="flaticon-call-1" /></div>
                                            <h4>+94 77 882 3376 </h4>
                                            <div className="text">contact@kodeum.io</div>
                                        </div>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Let’s Start</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}