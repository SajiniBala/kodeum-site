'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div style={{width: '150px', height: 'auto'}} className="nav-logo"><Link href="/"><img src="/assets/images-4/logo-3.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/about-us">Company</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}><Link href="/about-us">About Us</Link></li>
                                        <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}><Link href="/our-team">Meet Our Developer Team</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/services">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/services">Our All Services</Link></li>
                                        <li><Link href="/services/web-development">Web Development</Link></li>
                                        <li><Link href="/services/mobile-app-development">Mobile App Development</Link></li>
                                        <li><Link href="/services/bespoke-software-development">Bespoke Software Development</Link></li>
                                        <li><Link href="/services/e-commerce-solutions">E-Commerce Solutions</Link></li>
                                        <li><Link href="/services/erp">ERP</Link></li>
                                        <li><Link href="/services/cloud-solutions">Cloud Solutions</Link></li>
                                        <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
                                        <li><Link href="/services/business-branding">Business Branding</Link></li>
                                        <li><Link href="/services/maintenance-and-support">Maintenance & Support</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div></li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/offshore">Offshore</Link></li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/portfolio">Portfolio</Link></li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/blog">Blog</Link></li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link target="_blank" href="https://www.linkedin.com/company/kodeumdigitalarchitects"><span className="fab fa-linkedin" /></Link></li>
                            <li><Link target="_blank" href="https://twitter.com/kodeum_io"><span className="fab fa-twitter" /></Link></li>
                            <li><Link target="_blank" href="https://www.facebook.com/KodeumDigitalArchitects"><span className="fab fa-facebook-f" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
