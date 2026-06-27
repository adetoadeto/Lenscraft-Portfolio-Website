import Image from "next/image"
import Button from "@/components/button/button"

import classes from "./portfolio-detail-grid.module.css"

const heading = ["All", "Individual", "Professional", "Creative", "Black & White"]

type GalleryItem = {
    src: string;
    width: number;
    height: number;
};

type PortfolioDetailGridProps = {
    gallery: GalleryItem[];
};

export default function PortfolioDetailGrid({ gallery }: PortfolioDetailGridProps) {
    return (
        <div className={classes["portfolio-detail-grid"]}>
            <ul>
                <ul>
                    {heading.map(item => <li key={item}>{item}</li>)}
                </ul>
                {/* <li>
                    <span>Sort By:</span>
                    <select name="sortBy" id="sortBy">
                        {sortBy.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </li> */}
            </ul>

            <div className={classes.content}>
                {gallery.map((item, index) =>
                    <div key={index} className={classes[`item-${index}`]}>
                        <Image src={item.src} width={item.width} height={item.height} alt="portrait image of a person" />
                    </div>)}
            </div>

            <div className={classes.book}>
                <div>
                    <i className="fa-regular fa-calendar"></i>
                    <div>
                        <p>Ready to Create Something Amazing?</p>
                        <span>Let's capture your best moments together</span>
                    </div>
                </div>
                <Button href="/booking">
                    Book Your Session
                    <i className="fa-solid fa-arrow-right"></i>
                </Button>
            </div>
        </div>
    )
}