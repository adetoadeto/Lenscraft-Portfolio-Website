import Image from "next/image"

import classes from "./portfolio-detail-grid.module.css"

import img1 from "../../../assets/images/portfolio/portrait/img1.png"
import img2 from "../../../assets/images/portfolio/portrait/img2.png"
import img3 from "../../../assets/images/portfolio/portrait/img3.png"
import img4 from "../../../assets/images/portfolio/portrait/img4.png"
import img5 from "../../../assets/images/portfolio/portrait/img5.png"
import img6 from "../../../assets/images/portfolio/portrait/img6.png"
import img7 from "../../../assets/images/portfolio/portrait/img7.png"
import Button from "@/components/button/button"

const heading = ["All", "Individual", "Professional", "Creative", "Black & White"]
const sortBy = ["Latest", "Male", "Female"]
const images = [img1, img2, img3, img4, img5, img6, img7]

export default function PortfolioDetailGrid() {
    return (
        <div className={classes["portfolio-detail-grid"]}>
            <ul>
                <ul>
                    {heading.map(item => <li key={item}>{item}</li>)}
                </ul>
                <li>
                    <span>Sort By:</span>
                    <select name="sortBy" id="sortBy">
                        {sortBy.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </li>
            </ul>

            <div className={classes.content}>
                {images.map((item, index) =>
                    <div key={index} className={classes[`item-${index}`]}>
                        <Image src={item} alt="portrait image of a person" />
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