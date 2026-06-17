import Image from "next/image"
import classes from "./reviews-card.module.css"

import headshot1 from "@/assets/images/home/reviews/headshot.jpg"
import reviewStars from "@/assets/images/home/reviews/stars.png"

interface ReviewsCardProps {
    clientName: string,
    clientType: string
}

export default function ReviewsCard({ clientName, clientType }: ReviewsCardProps) {
    return (
        <div className={classes.card}>
            <p>
                <i className="fa-solid fa-quote-left"></i>
                <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laborum.</q>
            </p>
            <div>
                <div className={classes.profile}>
                    <Image src={headshot1} alt="client's profile picture" />
                    <div>
                        <strong>{clientName}</strong>
                        <span>{clientType}</span>
                    </div>
                </div>
                <Image className={classes["review-stars"]} src={reviewStars} alt="client's profile picture" />
            </div>
        </div>
    )
}