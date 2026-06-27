"use client"

import Link from "next/link";
import Button from "@/components/button/button";
import Logo from "@/components/logo/logo";
import classes from "./nav.module.css"
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMobileNav() {
        setIsOpen((prevState)=> !prevState)
    }

     return (
        <>
            <nav className={classes.nav}>
                <Logo />
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#featured">Portfolio</Link></li>
                    <li><Link href="/#services">Services</Link></li>
                    <li><Link href="/#reviews">Reviews</Link></li>
                    <li><Link href="/#footer">Contact</Link></li>
                </ul>
                <div>
                    <Button href="/booking">Book Now</Button>
                    <i className="fa-solid fa-bars" onClick={toggleMobileNav}></i>
                </div>
            </nav>
            <aside className={`${classes.aside} ${isOpen ? classes.show : ""}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#featured">Portfolio</Link></li>
                    <li><Link href="/#services">Services</Link></li>
                    <li><Link href="/#reviews">Reviews</Link></li>
                    <li><Link href="/#footer">Contact</Link></li>
                    <Button href="/booking">Book Now</Button>
                </ul>
            </aside>
        </>
    )
}