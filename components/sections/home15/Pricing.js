import Link from "next/link"


export default function Pricing() {
    return (
        <>
            <section className="pricing-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four">
                        <h2>Flexible Plans for Your Business</h2>
                        <Link href="/contact-us" className="theme-btn btn-style-ten"><span className="btn-title">Consult</span></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-1.png" alt="" /></div>
                                    <h3>Bronze Package</h3>
                                    <span>Small business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <span>From <br />{" "}</span> 
                                        <h2><span className="symble">$ </span>75</h2>
                                    </div>
                                    <p>Let your customers know about your business.</p>
                                    <Link href="/contact-us" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table active wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="tags clearfix">
                                    <div className="shape" />
                                    <h6>Popular</h6>
                                </div>
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-2.png" alt="" /></div>
                                    <h3>Silver Package</h3>
                                    <span>Medium business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <span>From <br />{" "}</span> 
                                        <h2><span className="symble">$ </span>175</h2>
                                    </div>
                                    <p>Attract more customers with daily updates.</p>
                                    <Link href="/contact-us" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-3.png" alt="" /></div>
                                    <h3>Gold <br />Package</h3>
                                    <span>Large business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <span>From <br />{" "}</span> 
                                        <h2><span className="symble">$ </span>300</h2>
                                    </div>
                                    <p>Boost profits significantly by selling online.</p>
                                    <Link href="/contact-us" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-4.png" alt="" /></div>
                                    <h3>Platinum Package</h3>
                                    <span>Corporate company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <span style={{marginBottom: '37px'}} >Let's Discuss <br />{" "}</span> 
                                        {/* <h2><span className="symble">Let's Discuss</span>{" "}</h2> */}
                                    </div>
                                    <p>Stand out uniquely among your competitors.</p>
                                    <Link href="/contact-us" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
