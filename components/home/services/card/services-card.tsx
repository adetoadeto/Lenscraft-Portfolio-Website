import classes from "./services-card.module.css"

interface ServiceCardProp {
    title: string,
    description: string,
    icon: string
}

export default function ServicesCard({ title, description, icon }: ServiceCardProp) {
    return (
        <div className={classes.card}>
            <div dangerouslySetInnerHTML={{ __html: icon }}></div>
            <div className={classes.texts}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}