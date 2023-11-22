import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link></li>
                <li className="dropdown"><Link href="/">Company</Link>
                    <ul>
                        <li><Link href="/about-us">About Us</Link>
                        </li>
                        <li><Link href="/our-team">Meet Our Developer Team</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/">Services</Link>
                    <ul>
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
                </li>
                <li className="dropdown"><Link href="/offshore">Offshore</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </>
    )
}
