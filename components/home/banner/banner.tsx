import Button from "../../button/button"
import classes from "./banner.module.css"

export default function Banner() {
    return (
        <section className={classes.banner}>
           <i className="fa-regular fa-calendar"></i>
            <h2>Let's Create Something Beautiful Together</h2>
            <p>Have a project in mind? I'd love to hear about it.</p>
            <Button href="/booking">
                <span>Book Your Session</span>
                <span>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
            </Button>
        </section>
    )
}