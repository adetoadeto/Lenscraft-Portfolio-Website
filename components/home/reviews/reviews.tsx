import Heading from "../heading/heading";
import ReviewsCard from "./card/reviews-card";
import classes from "./reviews.module.css"

export default function Reviews () {
    return (
        <section className={classes.reviews} id="reviews">
            <Heading tagline="Reviews" heading="What Clients Say" />
            <div className={classes.cards}>
                <ReviewsCard clientName="Matt Joe" clientType="Portrait Session"/>
                <ReviewsCard clientName="Emily & Michael" clientType="Wedding Client"/>
                <ReviewsCard clientName="Terry Y." clientType="Event Client"/>
            </div>
        </section>
    )
}