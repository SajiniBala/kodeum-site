import Layout from "@/components/layout/Layout"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import Link from "next/link"

export const metadata = {
    title: 'Portfolio | Kodeum: Showcasing Excellence in IT Solutions',
    description: `Browse through Kodeum's portfolio to witness our excellence in web development, mobile app development, ecommerce solutions, bespoke software development, digital marketing, and business branding. See how we bring ideas to life.`
    }

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Portfolio">
                <section style={{marginBottom: '-100px'}} className="portfolio-section-two">
                    <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Our Recent Projects</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                                <div className="text">Explore our portfolio showcasing cutting-edge web development solutions at Kodeum. From stunning website designs to robust e-commerce platforms, witness our skilled team's precision and passion in bringing digital visions to life.</div>
                            </div>
                        <div className="row">
                            <div style={{cursor: 'pointer'}} className="col-lg-4 col-md-6 project-block-four">
                            <Link href='/portfolio/77'>
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/gallery/image-3.jpg" alt="" /></div>
                                    <div className="overlay">
                                        <h5>Sentosa</h5>
                                        <h4>Hotel</h4>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div style={{cursor: 'pointer'}} className="col-lg-4 col-md-6 project-block-four">
                            <Link href='/portfolio/79'>
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/gallery/image-1.jpg" alt="" /></div>
                                    <div className="overlay">
                                        <h5 style={{color: '#042A4F'}}>DreamCrest</h5>
                                        <h4 style={{color: '#042A4F'}}>Real Estate</h4>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div style={{cursor: 'pointer'}} className="col-lg-4 col-md-6 project-block-four">
                            <Link href='/portfolio/78'>
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/gallery/image-2.jpg" alt="" /></div>
                                    <div className="overlay">
                                        <h5>Ethereal Lens</h5>
                                        <h4>Photography</h4>
                                    </div>
                                </div>
                                </Link>
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
            </Layout>
        </>
    )
}