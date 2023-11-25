import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Meet Our Team | Kodeum: Expert Digital Architects Driving Success',
    description: `Get to know the talented professionals behind Kodeum's success. Our dedicated team specializes in web development, mobile app development, ecommerce solutions, digital marketing, and business branding to elevate your business to new heights.`
    }

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Developer Team">
                <div>
                    <section className="team-section-two">
                        <div className="auto-container">
                        <div style={{marginBottom: '50px'}} className="row">
                                <div className="col-lg-6 content-column">
                                    <div className="sec-title">
                                        <h2>Synergy Unleashed: Powering Progress with Our Dynamic Developer Team</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">Embark on a transformative journey with our developer team, where innovation meets expertise. "Infinite Horizons" signifies our commitment to pushing the boundaries of possibility, crafting code that not only meets today's demands but also pioneers the solutions of tomorrow. </div>
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
                                            <img src="assets/images-4/resource/team-pic.jpg" alt="" />
                                            {/* <h2>14</h2> */}
                                        </div>
                                        {/* <div className="text">Years <br /> experience</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="sec-title text-center">
                                <h2>Our Team of Experts</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className="image"><img src="/assets/images/resource/profile-1.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">DevOps Engineer</div>
                                            <h4>Dilan JD</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className="image"><img src="/assets/images/resource/profile-2.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Front-End Developer</div>
                                            <h4>Suba Tharsan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className="image"><img src="/assets/images/resource/profile-1.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Back-End Developer</div>
                                            <h4>Dimithu Sampath</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className="image"><img src="/assets/images/resource/profile-2.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">UX/UI Designer</div>
                                            <h4>Nithya Krish</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CTA Section Two */}
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