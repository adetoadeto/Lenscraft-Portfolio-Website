import Image from "next/image"
import classes from "./reviews-card.module.css"

import reviewStars from "@/assets/images/home/reviews/stars.png"
import ProfileInfo from "@/components/profile-info/profile-info"

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
                <ProfileInfo clientName={clientName} clientType={clientType}/>
                <Image className={classes["review-stars"]} src={reviewStars} alt="star reviews" />
            </div>
        </div>
    )
}