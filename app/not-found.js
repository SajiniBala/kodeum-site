import Link from "next/link"

export const metadata = {
    title: '404 | Page not found Error',
    }

export default function Error404() {
    return (
        <>
            <div className="page-wrapper">
                        <div className="text-center">
                            <div className="image"><img src="/assets/images/resource/404-2.gif" alt="" /></div>
                            <div className="content">
                                <h1>Page is not found</h1>
                                <div className="link-btn"><Link href="/" style={{background: '#00FEBE'}} className="theme-btn btn-style-one"><span className="btn-title">BACK TO HOME</span></Link></div>
                            </div>
                        </div>
            </div>

        </>
    )
}
