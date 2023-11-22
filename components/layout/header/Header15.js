import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Link from "next/link"

export default function Header15({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-15"> */}
            <header className={`main-header header-style-15 ${scroll ? "fixed-header" : ""}`}>
                <div className="header-inner">
                    {/* Header Upper */}
                    <div className="outer-box">
                        <div className="header-upper">
                            <div className="logo-box">
                                <figure style={{width: '120px', height: 'auto'}} className="logo"><Link href="/"><img src="/assets/images-4/logo-3.png" alt="" /></Link></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><Link target="_blank" href="https://www.linkedin.com/company/kodeumdigitalarchitects"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link target="_blank" href="https://twitter.com/kodeum_io"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link target="_blank" href="https://www.facebook.com/KodeumDigitalArchitects"><i className="fab fa-facebook-f" /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-lower clearfix">
                            <div className="left-column">
                                <ul className="info clearfix">
                                    <li><i style={{color: '#fafcfc'}} className="customicon-phone-call" /><Link style={{color: '#fafcfc'}} href="tel:+94778823376">+94 77 882 3376</Link></li>
                                </ul>
                            </div>
                            <div className="right-column">
                                <div className="info clearfix">
                                    <li><i style={{color: '#fafcfc'}}className="far fa-suitcase" /><Link style={{color: '#fafcfc'}} href="/careers">Careers</Link></li>
                                    <li><i className="fal fa-long-arrow-right" /><Link href="/contact-us"><span>Get a Quote</span></Link></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </div>
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="header-upper">
                            <div className="logo-box">
                                <figure style={{width: '120px', height: 'auto'}} className="logo"><Link href="/"><img src="/assets/images-4/logo-3.png" alt="" /></Link></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><Link target="_blank" href="https://www.linkedin.com/company/kodeumdigitalarchitects"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link target="_blank" href="https://twitter.com/kodeum_io"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link target="_blank" href="https://www.facebook.com/KodeumDigitalArchitects"><i className="fab fa-facebook-f" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
