import classes from "./hero.module.css"
import Button from "@/components/button/button"

export default function Hero() {

    return (
        <section className={classes.hero}>
            <div className={classes.content}>
                 <span>Hi, I'm Alex Morgan</span>
            <h1>Capturing <span>Moments</span> That Last <span>Forever</span>
            </h1>
            <hr />
            <p>I'm a passionate photographer based in San Francisco. I specialize in capturing real emotions, timeless moments, and stunning visual stories</p>
            <Button href="#featured">
                    <span>explore projects</span>
                    <span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
            </Button>
            </div>
           
        </section>
    )
}