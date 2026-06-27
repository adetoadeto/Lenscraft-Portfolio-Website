import Image from 'next/image'
import classes from './profile-info.module.css'

import headshot1 from "@/assets/images/home/reviews/headshot.jpg"

export default function ProfileInfo ({clientName, clientType}: Record<string, string>) {
    return (
        <div className={classes.profile}>
                    <Image src={headshot1} alt="client's profile picture" />
                    <div>
                        <strong>{clientName}</strong>
                        <span>{clientType}</span>
                    </div>
                </div>
    )
}