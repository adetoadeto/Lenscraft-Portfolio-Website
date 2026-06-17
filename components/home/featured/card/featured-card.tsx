import Link from "next/link"
import classes from "./featured-card.module.css"

interface CardProps {
    title: string,
    description: string,
    href: string
}

export default function FeaturedCard({title, description, href}: CardProps) {
    return (
        <Link href={`/portfolio/${href}`} className={classes.card}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <button>&gt;</button>
        </Link>
    )
}