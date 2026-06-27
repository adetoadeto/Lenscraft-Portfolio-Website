import classes from "./portfolio-detail-header.module.css"
import Link from "next/link";
import Image from "next/image";

interface PortfolioDetailHeaderProps {
    content: {
        title: string,
        description: string,
    },
    banner: {
        src: string,
    }
}

export function PortfolioDetailHeader({ content, banner }: PortfolioDetailHeaderProps) {
    return (
        <header className={classes["portfolio-detail-header"]}>
            <article className={classes.article}>
                <div>
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <Link href="/#featured">Back To Portfolio</Link>
                </div>
                <h2>{content.title}</h2>
                <hr />
                <p>{content.description}</p>
                <div className={classes.info}>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <span>Location</span>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>

                    <div>
                        <i className="fa-regular fa-compass"></i>
                        <div>
                            <span>Focus</span>
                            <span>Portraits</span>
                        </div>
                    </div>

                    <div>
                        <i className="fa-regular fa-calendar"></i>
                        <div>
                            <span>Availability</span>
                            <span>By Appointment </span>
                        </div>
                    </div>
                </div>
            </article>

            <div>
                <Image src={banner.src} alt="Portrait of a woman" fill />
            </div>
        </header>
    )
}