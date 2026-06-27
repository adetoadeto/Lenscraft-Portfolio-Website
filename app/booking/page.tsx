import classes from "@/components/booking/booking.module.css"
import BookingForm from "@/components/booking/booking-form"
import ProfileInfo from "@/components/profile-info/profile-info"

export default function BookingPage() {
    return (
        <section className={classes.booking}>
            <aside>
                <div className={classes.content}>
                    <h2>Book Your Photography Session</h2>
                    <hr />
                    <p>Let's create something beautiful together. Fill out the form and I'll get back to you within 24 hours.</p>
                    <div className={classes.icons}>
                        <BookingIcons icon="calendar" title="Personalized Exprience" description="Every session is tailored to your vision and unique story" />
                        <BookingIcons icon="camera" title="Professional Quality" description="High-end equiptment and creative expertise for stunning results." />
                        <BookingIcons icon="clock" title="Fast Turnaround" description="Quick delivery without compromising on quality." />
                    </div>
                    <div className={classes.reviews}>
                        <p><i className="fa-solid fa-quote-left"></i><span>Working with Alex was an incredible experience. He made us feel comfortable and captured moments we'll cherish forever!</span><i className="fa-solid fa-quote-right"></i></p>
                        <div>
                            <ProfileInfo clientName="Daniel M." clientType="Wedding Client" />
                        </div>
                    </div>
                </div>
            </aside>

            <BookingForm />

        </section>
    )
}

function BookingIcons({ icon, title, description }: Record<string, string>) {
    return (
        <div className={classes.icon}>
            <div>
                <i className={`fa-regular fa-${icon}`}></i>
            </div>

            <div className={classes.text}>
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    )
}