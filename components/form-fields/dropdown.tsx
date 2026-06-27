interface DropdownProps {
    label: string,
    placeholderText: string,
    options: Array<string>
}
export default function Dropdown({label, placeholderText, options}:DropdownProps) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <select name="" id="">
                <option value="">{placeholderText}</option>
                {options.map(item => <option key={item} value={item}>{item} </option>)}
            </select>
        </div>
    )
}
