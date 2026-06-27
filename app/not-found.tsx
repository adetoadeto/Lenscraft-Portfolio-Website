import Button from "@/components/button/button";
import classes from "@/components/not-found.module.css"

export default function NotFound() {
    return (
        <section className={classes["not-found"]}>
            <div className={classes["not-found__hero"]}>
                <div>
                    <article>
                        <h2>404</h2>
                        <p>Looks like this shot is missing</p>
                        <hr />
                        <p>This page you're looking for doesn't exist or has been moved. Let's get you back to something beautiful.</p>
                    </article>
                    <div>
                        <Button href="/"><i className="fa-regular fa-house"></i> <span>Go To Home</span></Button>
                        <Button href="/#featured"><i className="fa-regular fa-camera"></i> <span>View Portfolio</span></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}