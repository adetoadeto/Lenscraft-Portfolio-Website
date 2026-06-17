import Link from "next/link";

interface Links {
    name: string,
    path: string
}
interface FooterLinksProps {
    heading: string,
    links: Array<Links>
}
export default function FooterLinks({ heading, links }: FooterLinksProps) {
    return (
        <div>
            <h3>{heading}</h3>
            <ul>
                {links.map(item => <li key={item.name}><Link href={item.path}>{item.name}</Link></li>
                )}
            </ul>
        </div>
    )
}