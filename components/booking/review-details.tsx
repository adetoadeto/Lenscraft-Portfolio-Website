import { sessionDetails } from "@/lib/text";
import classes from "./review-details.module.css";
import Button from "../button/button";

interface ReviewDetailsProps {
    onClick: (event: any, type: string) => void
}

export default function ReviewDetails({ onClick }: ReviewDetailsProps) {
    return (
        <div className={classes["review-details"]}>
            <div className={classes["personal-details"]}>
                <div>
                    <i className="fa-regular fa-user"></i>
                    <div>
                        <strong>Your Information</strong>
                        <p>Alex Morgan</p>
                        <p>alex.morgan@example.com</p>
                        <p>(415)-123-4567</p>
                    </div>
                </div>

                <div>
                    <p>Edit</p>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>

            <div className={classes["session-details"]}>
                <div>
                    <i className="fa-regular fa-camera"></i>
                    <div>
                        <strong>Session Details</strong>
                        <div className={classes["session-details-info"]}>
                            {sessionDetails.map(item =>
                                <div key={item.heading}>
                                    <span>{item.heading}</span>
                                    <p>{item.info}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <p>Edit</p>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>

            <span className={classes.buttons}>
                <button onClick={(event) => onClick(event, "previous")}><i className="fa-solid fa-arrow-left"></i>Previous</button>
                <Button href="/booking-success">Submit Booking Request <i className="fa-solid fa-paper-plane"></i></Button>
            </span>
        </div>
    )
}