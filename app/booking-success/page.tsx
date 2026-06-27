import classes from "@/components/booking-success.module.css"

export default function BookingSuccess() {
    return (
        <section className={classes["booking-success"]}>
            <div className={classes.content}>
                <div>
                    <div>
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <h2>Your Request Has Been Received!</h2>
                    <p>I've received your booking request and will personally review the details. You can expect a response from me within 24 hours.</p>
                </div>

                <div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                        <div>
                            <h3>What Happens Next?</h3>
                            <p>I"l get back to you via email to discuss your session.</p>
                        </div>

                    </div>
                    <div>
                        <i className="fa-regular fa-eye"></i>
                        <div>
                            <h3>Keep An Eye On Your Inbox</h3>
                            <p>Check your email for a comfirmation and next steps</p>
                        </div>

                    </div>
                </div>

                <div>
                    <div>
                        <i className="fa-regular fa-heart"></i>
                        <p>In the meantime, feel free to explore more of  my work or follow along on social media.</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>

            </div>
        </section>
    )
}

{/* <i class="fa-regular fa-star"></i> */ }