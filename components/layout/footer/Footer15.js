import Link from "next/link"
export default function Footer15() {
    return (
        <>
            <footer className="footer-style-15">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="widget-content">
                                        <p>At Kodeum, we are committed to long-term partnerships with our clients.</p>
                                        <div className="inner">
                                            <h5>Free Consultation</h5>
                                            <div className="email">
                                                <i className="customicon-chatting" />
                                                <p><Link href="mailto:contact@kodeum.io">contact@kodeum.io</Link><br />Mon-Friday: 9am to 5pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/about-us">About Us</Link></li>
                                            <li><Link href="/careers">Careers</Link></li>
                                            <li><Link href="/our-team">Meet Team</Link></li>
                                            <li><Link href="/privacy-policy">Policies</Link></li>
                                            <li><Link href="/offshore">Offshore</Link></li>
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/portolio">Projects</Link></li>
                                            <li><Link href="/contact-us">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Our Blog</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="image-list clearfix">
                                            <li>
                                                <figure className="image"><Link href="/blog/1003"><img src="/assets/images-4/resource/footer-image-1.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/blog/1004"><img src="/assets/images-4/resource/footer-image-2.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/blog/1005"><img src="/assets/images-4/resource/footer-image-3.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/blog/1006"><img src="/assets/images-4/resource/footer-image-4.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/blog/1007"><img src="/assets/images-4/resource/footer-image-5.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/blog/1008"><img src="/assets/images-4/resource/footer-image-6.jpg" alt="" /></Link></figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget post-widget">
                                    <div className="widget-title">
                                        <h3>How to contact us</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <span className="post-date">Mobile: </span>
                                            <h5>+ 94 77 882 3376 | +94 75 882 3375</h5>
                                        </div>
                                        <div className="post">
                                            <span className="post-date">Email: </span>
                                            <h5>contact@kodeum.io</h5>
                                        </div>
                                        <div className="post">
                                            <span className="post-date">Location: </span>
                                            <h5>College Road, Point Pedro, 40000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-subscribe">
                    <div className="auto-container">
                        <div className="subscribe-inner">
                            <div className="icon-box"><i className="customicon-subscribe-rss-button" /></div>
                            <form action="contact" method="post">
                                <div className="form-group clearfix">
                                    <div className="field-box">
                                        <i className="far fa-user" />
                                        <input type="text" name="name" placeholder="Your Full Name" required />
                                    </div>
                                    <div className="field-box">
                                        <i className="far fa-envelope" />
                                        <input type="email" name="email" placeholder="Enter Email Address" required />
                                    </div>
                                    <div className="message-btn">
                                        <button type="submit">Subscribe Us</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="footer-bottom">
                    <div className="auto-container clearfix">
                        <div className="copyright"><p>Copyrights © {new Date().getFullYear()} <Link href="/index-15">Kodeum</Link>, All Rights Reserved.</p></div>
                        <ul className="footer-nav clearfix">
                            <li><Link href="/index-15">Privacy Policy</Link></li>
                            <li><Link href="/index-15">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
