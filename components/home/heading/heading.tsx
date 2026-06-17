import classes from "./heading.module.css"

interface HeadingProps {
    tagline: string,
    heading: string
}
export default function Heading({ tagline, heading }: HeadingProps) {
    return (
        <div className={classes.heading}>
            <span>{tagline}</span>
            <h2>{heading}</h2>
        </div>
    )
}