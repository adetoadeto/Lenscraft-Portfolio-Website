import { type ReactNode } from "react";

import Link from "next/link"
import classes from "./button.module.css"
interface ButtonProps {
    href: string,
    children?: ReactNode;
}
export default function Button({href, children }: ButtonProps) {
    return (
        <button className={classes.button}>
            <Link href={href}>{children}</Link>
        </button>
    )
}