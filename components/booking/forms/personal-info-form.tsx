import InputField from "../../form-fields/inputField"
import Dropdown from "../../form-fields/dropdown"
import classes from "./personal-info-form.module.css"

interface PersonalInfoFormProps {
  onClick: (event: any, type:string) => void
}
export default function PersonalInfoForm ({onClick}:PersonalInfoFormProps){
    return (
        <div className={classes["personal-info"]}>

            <InputField
                label="Full Name" placeholderText="Enter your full name" />

            <div className={classes.contact}>
                <InputField
                    label="Email Address" placeholderText="you@example.com" type="email" />
                <InputField
                    label="Phone Number" placeholderText="Enter your phone number" type="tel" />
            </div>

            <Dropdown label="Type of Photography" placeholderText="Select photography type" options={["Portrait", "Wedding", "Family", "Commercial", "Event"]} />

            <div className={classes.time}>
                <InputField label="Session Date (Preferred)" type="date" />
                <InputField label="Session Time (Preferred)" type="time" />
            </div>

            <div>
                <label htmlFor="">Tell Me About Your Vision</label>
                <textarea name="" id="" rows={8} cols={100} maxLength={500} placeholder="Describe your vision, ideas, preferences, and any important details..."></textarea>
            </div>

            <Dropdown label="Budget Range (USD)" placeholderText="Select budget range" options={["20-50", "50-100", "100-500", "500 and Above"]} />

            <div className={classes.socials}>
                <label htmlFor="">How Did You Find Me?</label>
                <div>

                    {["Google", "Instagram", "Facebook", "Referral", "Website", "Other"].map(item => <div key={item}>
                        <input type="radio" name="socials" />
                        <label>{item}</label>
                    </div>)}
                </div>
            </div>

            {/* <div>
                <label htmlFor="">Upload Inspiration (Optional)</label>
                <input type="file" accept="image/jpeg, image/png" />
            </div> */}

            <div className={classes.agreement}>
                <input type="checkbox" />
                <p>I agree to the <a href="">Privacy Policy</a> and <a href="">Terms of Service*</a></p>
            </div>
            <button onClick={(event)=>onClick(event, "next")}>Review Details</button>

        </div>
    )
}