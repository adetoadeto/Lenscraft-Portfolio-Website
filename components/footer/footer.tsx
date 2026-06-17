import Logo from "@/components/logo/logo";
import FooterLinks from "./footer-links/footer-links";
import { footerInfo } from "@/lib/text";

import classes from "./footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={classes.footer} id="footer">
            <div>
                <div>
                    <Logo />
                    <p>Creating moments that matter and visual stories that last forever.</p>
                    <div className={classes.socials}>
                        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
                {footerInfo.map(item => <FooterLinks key={item.heading} {...item}/>)}
            </div>
            <p>&copy; {year} Lenscraft Photography. All Rights Reserved</p>

        </footer>
    )
}