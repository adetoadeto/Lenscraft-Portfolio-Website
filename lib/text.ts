
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
    "Portrait Photography",
    "Natural, expressive, and timeless portraits that reflect your true self.",
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M11.5 8C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9M5 5h2l2-2h5l2 2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m4.41-1l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.41l-2-2z" />
    </svg>`
)
const wedding = new Services(
    "Wedding Photography",
    "Capturing every precious moment of your special day with elegance.",
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
	<path d="M0 0h15v15H0z" fill="none" />
	<path fill="currentColor" d="m11.92 3l.98-1.33L11.65 0H8.72L7.47 1.67l.95 1.3c-.96.36-1.77 1.02-2.34 1.86c.43.09.84.24 1.23.43C8 4.4 9.04 3.9 10.13 3.9c2.03 0 3.67 1.67 3.61 3.7c-.06 1.97-1.78 3.56-3.76 3.48a3.604 3.604 0 0 1-3.45-3.42c-.37-.24-.79-.4-1.24-.46c-.01.1-.02.19-.02.29c0 2.73 2.29 4.95 5.06 4.84c2.58-.11 4.67-2.28 4.67-4.85c0-2.03-1.28-3.78-3.08-4.49zm-1.04-.5L10 1.62l.88-.89l.89.89zm-3.2 9.9c.39.19.8.34 1.24.43A4.88 4.88 0 0 1 4.87 15C2.18 15 0 12.82 0 10.15s2.18-4.84 4.87-4.84c2.68 0 4.86 2.17 4.86 4.84c0 .1-.01.2-.01.29c-.46-.06-.89-.23-1.25-.48a3.614 3.614 0 0 0-3.6-3.4c-1.93 0-3.61 1.61-3.61 3.59s1.62 3.59 3.61 3.59c1.09 0 2.13-.5 2.81-1.35z" />
    </svg>`
)
const familia = new Services(
    "Family Photography",
    "Beautiful family pictures, capturing the smiles and beauty of family.",
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M3.69 9.12a.88.88 0 0 0-.65-.28c-.41 0-.72.19-.92.58s-.15.76.17 1.11q1.77 1.59 2.25 2.25c.41.56.61 1.38.61 2.44c0 1.31.5 2.28 1.5 2.95c.56.44 1.17.77 1.85.99v-3.89c0-.94-.33-1.72-.96-2.35m8.92.05c-.62.62-.96 1.39-.96 2.3v3.93c.96-.34 1.76-.87 2.42-1.57c.65-.7.98-1.47.98-2.41c0-1.13.19-1.94.57-2.44c.09-.16.26-.36.53-.61c.23-.25.47-.49.71-.71c.23-.21.46-.43.68-.65l.33-.28a.9.9 0 0 0 .28-.66c0-.28-.09-.53-.28-.73s-.42-.3-.72-.3s-.5.09-.69.28M12 20c.69 0 1.36-.09 2-.28v-3.57c0-.59-.18-1.05-.59-1.49Q12.795 14 12 14c-.53 0-1 .2-1.38.61c-.4.39-.62.85-.62 1.45v3.66c.64.19 1.31.28 2 .28M9 8.5c0 .83-.67 1.5-1.5 1.5S6 9.33 6 8.5S6.67 7 7.5 7S9 7.67 9 8.5m9 0c0 .83-.67 1.5-1.5 1.5S15 9.33 15 8.5S15.67 7 16.5 7s1.5.67 1.5 1.5m-4.5-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 4 12 4s1.5.67 1.5 1.5m0 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5" />
    </svg>`
)
const commercial = new Services(
    "Commercial Photograpy",
    "High-quality visuals to eleveate your brand and business",
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-1.1-.9-2-2-2m0 14H4V4h10v3c0 .55.45 1 1 1h5z" />
	<path fill="currentColor" d="M10 6h2v2h-2zM6 6h2v2H6zm0 4h2v2H6zm4 0h2v2h-2zm6 0h2v2h-2zm-6 4h2v2h-2zm-4 0h2v2H6zm10 0h2v2h-2z" />
    </svg>`
)
const events = new Services(
    "Event Photography",
    "From corporate events to parties, I capture it all beautifully.",
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M13.389 17.38q-.62-.618-.62-1.495t.62-1.496t1.496-.62q.877 0 1.496.62T17 15.885t-.62 1.496t-1.495.619t-1.496-.62M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V2.77h1.077V5h7.154V2.77h1V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6z" />
    </svg>`
)
export const services = [portrait, wedding, familia, commercial, events]

//portfolio images
const images = {
    portraits: [],
    weddings: [],
    family: [],
    commercial: [],
    events: [],
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
                path: "/portfolio/event"
            },
            {
                name: "Commercial Photography",
                path: "/portfolio/commercial"
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
