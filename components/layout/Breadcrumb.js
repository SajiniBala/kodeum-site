import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {


    return (
        <>
            <section className="page-title">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1>{breadcrumbTitle}</h1>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li><Link href="/">Kodeum</Link></li>
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
