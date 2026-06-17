import Link from "next/link";
import Button from "@/components/button/button";
import Logo from "@/components/logo/logo";
import classes from "./nav.module.css"

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <Logo/>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#featured">Portfolio</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#reviews">Reviews</Link></li>
                <li><Link href="/#footer">Contact</Link></li>
            </ul>
            <Button href="/booking">Book Now</Button>
        </nav>
    )
}