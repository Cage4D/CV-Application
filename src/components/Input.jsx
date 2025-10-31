
export default function Input({ type="text", placeholder="", id, value, onChange }) {
    return (
        <>
            <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            id={id} />
        </>
    )
}
