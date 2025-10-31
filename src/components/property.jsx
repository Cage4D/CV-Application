import Input from "./Input.jsx"

function Property({ name, type, placeholder="", id, value, onChange }) {
    return (
            <div>
                <label htmlFor={id}>{name}</label>
                <Input placeholder={placeholder} id={id} type={type} value={value} onChange={onChange}></Input>
            </div> 
    )
}

export default Property