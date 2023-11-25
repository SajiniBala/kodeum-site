import "@/node_modules/react-modal-video/css/modal-video.css"

import "public/assets/css/bootstrap.css"
import "public/assets/css/color.css"
import "public/assets/css/color-2.css"
import "public/assets/css/color-3.css"
import "public/assets/css/color-4.css"
import "public/assets/css/color-5.css"
import "public/assets/css/color-6.css"
import "public/assets/css/color-7.css"
import "public/assets/css/color-8.css"
import "public/assets/css/color-9.css"
import "public/assets/css/color-10.css"
import "public/assets/css/color-11.css"
import "public/assets/css/color-12.css"
import "public/assets/css/color-13.css"
import "public/assets/css/color-14.css"
import "public/assets/css/color-15.css"
import "public/assets/css/style.css"
import "public/assets/css/icomoon-3.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';


import { Barlow, Fira_Sans, Raleway, Cinzel, Alata, Josefin_Slab } from 'next/font/google'

const cinzel = Cinzel({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--cinzel",
    display: 'swap',
})

const alata = Alata({
    weight: ['400' ],
    subsets: ['latin'],
    variable: "--alata",
    display: 'swap',
})

const josefin_slab = Josefin_Slab({
    weight: ['400', '600' ],
    subsets: ['latin'],
    variable: "--josefin_slab",
    display: 'swap',
})


const raleway = Raleway({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--barlow",
    display: 'swap',
})

export const metadata = {
    title: {
        default: 'Kodeum | Digital Architects',
        template: '%s | Kodeum | Digital Architects'
    },
    description: 'We are a leading IT solutions provider, offering innovative business solutions globally. Our services include web development, mobile app development, ecommerce solutions, digital marketing, and business branding. Connect with us for top-notch offshore services from Sri Lanka.',
    keywords: ['Website Developent, Mobile App Development, E-Commerce, Digital Marketing, Business Branding, SEO Optimization', 'IT Solutions', 'Offshore', "Out-Sourcing", 'Sri Lanka', 'Jaffna'],
    icons: {
        icon: ['favicon.ico'],
        shortcut: ['favicon.ico'],
        apple: ['/apple-touch-icon.png'],
      },
    }

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${cinzel.variable} ${raleway.variable} ${alata.variable} ${alata.josefin_slab} `}>
            <body>{children}</body>
        </html>
    )
}
