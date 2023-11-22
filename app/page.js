import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home15/About"
import Banner from "@/components/sections/home15/Banner"
import Chooseus from "@/components/sections/home15/Chooseus"
import Contact from "@/components/sections/home15/Contact"
import Pricing from "@/components/sections/home15/Pricing"
import Project from "@/components/sections/home15/Project"
import Service from "@/components/sections/home15/Service"
import Testimonial from "@/components/sections/home15/Testimonial"
import Video from "@/components/sections/home15/Video"
// import News from "@/components/sections/home15/News"
// import Clients from "@/components/sections/home15/Clients"
// import Team from "@/components/sections/home15/Team"

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15">
                <Banner />
                <Service />
                <About />
                <Chooseus />
                <Project />
                <Video />
                {/* <Team /> */}
                <Testimonial />
                <Pricing />
                {/* <News />
                <Clients /> */}
                <Contact />
            </Layout>
        </>
    )
}