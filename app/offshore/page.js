'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"
import Link from "next/link"
import { useState } from 'react'

export default function Home() {

    
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Offshore IT Outsourcing">
                <div>
                    <section className="about-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 content-column">
                                    <div className="sec-title">
                                        <h2>Unlock Cost Efficiency and Global Talent with Our Offshore Services</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">By outsourcing us, you can focus on your core activities while we take care of technical intricacies. We prioritize quality assurance, providing thorough testing, rigorous checks, and ongoing support for flawless functionality. </div>
                                    </div>
                                    {/* <div className="author-box">
                                        <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                        <div className="author-info">
                                            <h4>Franklin Sinatra</h4>
                                            <h5>Manager</h5>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="experience-years-block">
                                        <div className="image">
                                            <img src="/assets/images/resource/image-46.jpg" alt="" />
                                            {/* <h2>14</h2> */}
                                        </div>
                                        {/* <div className="text">Years <br /> experience</div> */}
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: '50px'}} className="row">
                                <div className="col-lg-6">
                                    <div className="image" style={{marginTop: '50px'}}><img src="https://treehousetechgroup.com/wp-content/uploads/2019/08/shutterstock_1044126052.jpg" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2>Reasons to Choose Us</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-global" /></div>
                                            <h4>Global Expertise at Local Cost</h4>
                                            <div className="text">Unlock unparalleled value and efficiency as we bridge the gap between quality and cost-effectiveness.</div>
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-agreement" /></div>
                                            <h4>Agile Scalability for Dynamic Demands</h4>
                                            <div className="text">Stay ahead in the fast-paced tech landscape with our offshore services that offer unparalleled scalability.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section style={{marginTop: '-100px'}} className="award-section style-two">
                    <div className="sec-title text-center">
                                <h2>Our Key Pillars</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                                <div className="text">Our commitment is prompt assistance and exceeding your expectations. With our expertise and diverse <br/> backgrounds, we bring knowledge and innovation to every project, staying ahead of the curve in meeting your IT needs.</div>
                            </div>
                            <div className="auto-container">
                            <div className="row">
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/offshore-2.jpg" alt="" />
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Price Structure</h4>
                                            </div>
                                            <div className="text">Make informed decisions with our transparent and competitive pricing structure, offering customized solutions and value for money.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/offshore-3.jpg" alt="" />
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Cross-Border Expertise</h4>
                                            </div>
                                            <div className="text">Empower your global expansion with our cross-border expertise, unlocking unparalleled success and resilience in international markets.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/offshore-4.jpg" alt="" />
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>International Clients</h4>
                                            </div>
                                            <div className="text">Global success through cultural sensitivity, effective communication, trust, innovation, and long-term partnerships with international clients.</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                    </section>
                    <section style={{margin: '-110px 0 -80px 0'}} className="faq-section-four">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Find answers in our <br /> list of frequently asked questions </h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <ul className="accordion-box style-two mb-30">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01. Why should you consider our offshore IT services for your project?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our offshore IT services offer a cost-effective solution without compromising on quality. Our skilled professionals work in a collaborative environment, leveraging global talent to provide efficient and scalable solutions. This approach ensures timely delivery and significant cost savings compared to in-house development.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02. How can you ensure the security of your sensitive data when working with our offshore team?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">At Kodeum, data security is a top priority. We implement stringent security measures, including encryption protocols, secure data transfer, and access controls. Additionally, our teams adhere to international data protection standards, ensuring the confidentiality and integrity of your sensitive information throughout the development process.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03. How do we manage the time zone differences to ensure effective communication and project coordination?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We understand the importance of seamless communication. our teams are adept at working across different time zones, ensuring that there is always overlap for real-time collaboration. We use project management tools, conduct regular virtual meetings, and provide comprehensive documentation to keep you informed about project progress, milestones, and any potential challenges.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>04. How do we ensure the quality of the offshore development process?</div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Quality is at the core of Kodeum's offshore development process. We follow industry best practices, conduct thorough testing at each stage of development, and adhere to agile methodologies. Our dedicated quality assurance teams work in tandem with developers to identify and rectify issues promptly. We also encourage your feedback throughout the development lifecycle, ensuring that the final deliverables meet and exceed your expectations.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>05. What sets us apart in the competitive landscape of offshore IT services?</div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We distinguish ourselves through a combination of technical expertise, a client-centric approach, and a commitment to innovation. Our teams are not just developers; they are strategic partners invested in the success of your project. We prioritize understanding your unique needs and goals, ensuring that our solutions not only meet but exceed your expectations.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Award Section */}
                    <section className="award-section style-two" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-4.jpg)' }}>
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sec-title light">
                                        <h2>Partner with us and unlock the immense potential of offshore services for your business.</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">With our expertise, dedication, and cutting-edge solutions, we guarantee to propel your online presence to new heights. Contact us today to discuss your requirements and let us embark on a journey towards digital success together.</div>
                                        <div style={{marginTop: '40px'}} className="btn-box">
                                            <Link href="/contact-us" className="theme-btn btn-style-ten"><span className="btn-title">REQUEST A FREE QUOTE</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Client Logo */}
                </div>

            </Layout>
        </>
    )
}