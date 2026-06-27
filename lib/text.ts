import { calendarIcon, cameraIcon, commercialIcon, familyIcon, weddingBandIcon } from "./svgIcons"

import portHero from "@/assets/images/portfolio/portrait/banner.png"
import port1 from "@/assets/images/portfolio/portrait/img1.png"
import port2 from "@/assets/images/portfolio/portrait/img2.png"
import port3 from "@/assets/images/portfolio/portrait/img3.png"
import port4 from "@/assets/images/portfolio/portrait/img4.png"
import port5 from "@/assets/images/portfolio/portrait/img5.png"
import port6 from "@/assets/images/portfolio/portrait/img6.png"
import port7 from "@/assets/images/portfolio/portrait/img7.png"

import weddingHero from "@/assets/images/portfolio/wedding/img1.png"
import wedding1 from "@/assets/images/portfolio/wedding/img2.png"
import wedding2 from "@/assets/images/portfolio/wedding/img3.png"
import wedding3 from "@/assets/images/portfolio/wedding/img4.png"
import wedding4 from "@/assets/images/portfolio/wedding/img5.png"
import wedding5 from "@/assets/images/portfolio/wedding/img6.png"
import wedding6 from "@/assets/images/portfolio/wedding/img7.png"
import wedding7 from "@/assets/images/portfolio/wedding/img8.png"

import familyHeroImg from "@/assets/images/portfolio/family/img2.png"
import family1 from "@/assets/images/portfolio/family/img5.png"
import family2 from "@/assets/images/portfolio/family/img4.png"
import family3 from "@/assets/images/portfolio/family/img1.png"
import family4 from "@/assets/images/portfolio/family/img3.png"
import family5 from "@/assets/images/portfolio/family/img6.png"
import family6 from "@/assets/images/portfolio/family/img7.png"
import family7 from "@/assets/images/portfolio/family/img8.png"

import commercialHeroImg from "@/assets/images/portfolio/commercial/img1.png"
import eventHeroImg from "@/assets/images/portfolio/event/img1.png"

class Featured {
    title: string;
    description: string;
    href: string;

    constructor(heading: string, text: string, href: string = "") {
        this.title = heading;
        this.description = text;
        this.href = href;
    }
}

class Services extends Featured {
    icon: string;

    constructor(heading: string, text: string, icon: string, href: string = "") {
        super(heading, text, href);
        this.icon = icon
    }
}

// featured
const featured1 = new Featured("Studio Portraits", "Portraits", "/portraits")
const featured2 = new Featured("James & Sophia", "Weddings", "/weddings")
const featured3 = new Featured("The Loveables", "Family", "/family")
const featured4 = new Featured("Brands", "Commercial", "/commercials")
const featured5 = new Featured("Conferences", "Events", "/events")
export const featured = [featured1, featured2, featured3, featured4, featured5]

// services
const portrait = new Services(
    "Portrait Photography", "Natural, expressive, and timeless portraits that reflect your true self.", cameraIcon)

const wedding = new Services("Wedding Photography", "Capturing every precious moment of your special day with elegance.", weddingBandIcon)

const familia = new Services("Family Photography", "Beautiful family pictures, capturing the smiles and beauty of family.", familyIcon)

const commercial = new Services("Commercial Photograpy", "High-quality visuals to eleveate your brand and business", commercialIcon)

const events = new Services("Event Photography", "From corporate events to parties, I capture it all beautifully.", calendarIcon)

export const services = [portrait, wedding, familia, commercial, events]

//portfolio images
export const portfolioData = {
    portraits: {
        content: portrait,
        banner: portHero,
        gallery: [port1, port2, port3, port4, port5, port6, port7]
    },
    weddings: {
        content: wedding,
        banner: weddingHero,
        gallery: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7]
    },
    family: {
        content: familia,
        banner: familyHeroImg,
        gallery: [family1, family2, family3, family4, family5, family6, family7]
    },
    commercials: {
        content: commercial,
        banner: commercialHeroImg,
        gallery: [commercialHeroImg]
    },
    events: {
        content: events,
        banner: eventHeroImg,
        gallery: [eventHeroImg]
    },
}

// footer
export const footerInfo = [
    {
        heading: "Quick Links",
        links: [
            {
                name: "Home",
                path: "/"
            },
            {
                name: "Portfolio",
                path: "/#featured"
            },
            {
                name: "Services",
                path: "/#services"
            },
            {
                name: "Reviews",
                path: "/#reviews"
            },
            {
                name: "Contact",
                path: "/#footer"
            },
        ]
    },
    {
        heading: "Services",
        links: [
            {
                name: "Portrait Photography",
                path: "/portfolio/portraits"
            },
            {
                name: "Wedding Photography",
                path: "/portfolio/weddings"
            },
            {
                name: "Family Photography",
                path: "/portfolio/family"
            },
            {
                name: "Event Photography",
                path: "/portfolio/events"
            },
            {
                name: "Commercial Photography",
                path: "/portfolio/commercials"
            }
        ]
    },
    {
        heading: "Contact",
        links: [
            {
                name: "hello@lenscraft.com",
                path: "/"
            },
            {
                name: "+1(123)-456-789",
                path: "/"
            },
            {
                name: "San Francisco, CA",
                path: "/"
            }
        ]
    },
]

//booking review details
export const sessionDetails = [
    {
        heading: "Type of Session",
        info: "Portrait"
    },
    {
        heading: "Date",
        info: "June 15, 2025"
    },
    {
        heading: "Time",
        info: "4:00PM"
    },

    {
        heading: "Budget Range",
        info: "$800 - $1,500"
    },
    {
        heading: "How Did You Find Me?",
        info: "Instagram"
    },
    {
        heading: "Notes",
        info: "I'd like a mix of studio and outdoor shots if possible."
    },
]

