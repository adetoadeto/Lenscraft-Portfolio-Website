export default function InputField ({label, placeholderText="", type=""}: Record<string, string>) {
    return (
        <div>
            <label htmlFor="">{label} <span>*</span></label>
            <input type={type} placeholder={placeholderText} />
        </div>
    )
}