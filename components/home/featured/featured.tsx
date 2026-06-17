import Link from "next/link";
import Button from "../../button/button";

import classes from "./featured.module.css"
import FeaturedCard from "./card/featured-card";
import { featured } from "@/lib/text";
import Heading from "../heading/heading";

export default function Featured() {
    return (
        <section className={classes.featured} id="featured">

            <Heading tagline="My Work" heading="Featured Projects"/>
            <ul>
                <li className={classes.active}>All</li>
                <li><Link href="/portfolio/portraits">Portraits</Link></li>
                <li><Link href="/portfolio/weddings">Weddings</Link></li>
                <li><Link href="/portfolio/family">Family</Link></li>
                <li><Link href="/portfolio/commercial">Commercial</Link></li>
                <li><Link href="/portfolio/events">Events</Link></li>
            </ul>

            <div className={classes.cards}>
                {featured.map(item => <FeaturedCard key={item.title} {...item} />)}
            </div>

        </section>
    )
}