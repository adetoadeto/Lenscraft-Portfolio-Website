"use client";

import PersonalInfoForm from "./forms/personal-info-form"
import classes from "./booking-form.module.css"
import ReviewDetails from "./review-details"
import { useState } from "react";

export default function BookingForm() {
    const [count, setCount] = useState(1)

    const heading = count === 1 ? "Required Information" : "Review Your Details"
    const formType = count === 1 ? <PersonalInfoForm onClick={handleSteps} /> : <ReviewDetails onClick={handleSteps} />

    // className={classes.complete}
    // <i className="fa-solid fa-check"></i>

    function handleSteps(event: any, type: string) {
        event.preventDefault()
        if (type === "previous") {
            setCount(1)
            return
        }
        setCount(2)
    }

    return (
        <form className={classes.form}>
            <header>
                <div>
                    <span className={count > 1 ? classes.complete : ""}> {count > 1 ? <i className="fa-solid fa-check"></i> : 1} </span>
                    <hr />
                    <span>2</span>
                </div>
            </header>
            <h3>{heading}</h3>
            {formType}
        </form>
    )
}