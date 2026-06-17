import classes from "./portfolio-detail-header.module.css"
import Link from "next/link";

export function PortfolioDetailHeader () {
    return (
        <header className={classes["portfolio-detail-header"]}>
                <article className={classes.article}>
                    <div>
                        <i className="fa-solid fa-arrow-left-long"></i>
                        <Link href="/#featured">Back To Portfolio</Link>
                    </div>
                    <h2>Portrait Photography</h2>
                    <hr />
                    <p>Timeless portraits that capture personality, emotion, and elegance. Every portrait is crafted with precision lighting and a creative vision to bring out your best self.</p>
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

            </header>
    )
}