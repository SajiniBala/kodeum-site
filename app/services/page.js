import Layout from "@/components/layout/Layout"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import Link from "next/link"

export const metadata = {
    title: 'Our Services | Kodeum: Comprehensive IT Solutions for Growth',
    description: `Explore Kodeum's range of services, including web development, mobile app development, ecommerce solutions, bespoke software development, digital marketing, business branding, and IT outsourcing. Elevate your business with our innovative solutions.`,
    keywords: ['Website Developent, Mobile App Development, E-Commerce, Digital Marketing, Business Branding, SEO Optimization', 'IT Solutions', 'Offshore', "Out-Sourcing", 'Sri Lanka', 'Jaffna'],
    }

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Services">
                <div>
                    <section className="services-section-six">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We provide tailored services to meet your unique needs.</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images-4/service/service7.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-global" /></div>
                                                <h4>Web Development</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/web-development"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">We ensure your online presence stands out from the competition.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service-mobile.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-app" /></div>
                                                <h4>Mobile App Development</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/mobile-app-development"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">We help you unlock the full potential of mobile technology.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service2.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-system" /></div>
                                                <h4>Bespoke Software Development</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/bespoke-software-development"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Empower your business with tailor-made software solutions.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service-commerce.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-shopping-cart"/></div>
                                                <h4>E-Commerce Solutions</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/e-commerce-solutions"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Take your business online and reach customers globally.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service1.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-thought" /></div>
                                                <h4>ERP</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/erp"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">We help you optimize your business functions for maximum productivity.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service6.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-upload" /></div>
                                                <h4>Cloud Solutions</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/cloud-solutions"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Embrace the power of the cloud with our secure cloud solutions.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service3.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-trending" /></div>
                                                <h4>Digital Marketing</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/digital-marketing"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Amplify your online presence and drive traffic to your business.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service5.gif" width={10} alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-success" /></div>
                                                <h4>Business Branding</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/business-branding"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Elevate your brand & attract targeted audiences through branding.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <img className="lazy-image owl-lazy" src="/assets/images-4/service/service4.gif" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-support"/></div>
                                                <h4>Maintenance and Support</h4>
                                            </div>
                                            <div className="overlay"><Link href="/services/maintenance-and-support"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Count on us to keep your digital assets running smoothly.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services Section five */}
                    <section className="services-section-five style-two">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Industries We Serve</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">We take pride in our ability to cater to a wide range of industries, leveraging the latest trends and technologies to help businesses thrive in their respective domains.</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-insurance" /></div>
                                            <h4>Finance and Fintech</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-fire" /></div>
                                            <h4>Entertainment and Media</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-trolley" /></div>
                                            <h4>Manufacturing and Logistics</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-world-1" /></div>
                                            <h4>Travel and Hospitality</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-gear-1" /></div>
                                            <h4>Automotive</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-doctor" /></div>
                                            <h4>Healthcare and Telemedicine</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-shopping-cart" /></div>
                                            <h4>Retail and Consumer Goods</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-null-1" /></div>
                                            <h4>Professional Services</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-bank" /></div>
                                            <h4>Government and Public Sector</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonail Section Seven */}
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
                    {/* Feature Section Two */}
                    <section className="feature-section-two style-two">
                    
                        <div className="auto-container">
                            <div className="row">
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                    <Link href='/contact-us'>
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Kodeum</h4>
                                            <div className="text">Unlock boundless possibilities as you join forces with Kodeum, your gateway to innovation, & success.</div>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <Link href='/careers'>
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Kodeum</h4>
                                            <div className="text">Ignite your career at Kodeum today, where every opportunity propels you to excellence. Join us and embrace a journey of innovation and growth.</div>
                                        </div>
                                        </Link>
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