import { services } from "@/lib/text"
import Heading from "../heading/heading"
import ServicesCard from "./card/services-card"
import classes from "./services.module.css"

export default function Services() {
    return (
        <section className={classes.services} id="services">
            <Heading tagline="Services" heading="What I Offer" />
            <div className={classes.cards}>
                {services.map(item => <ServicesCard key={item.title} {...item} />)}
            </div>
        </section>
    )

}