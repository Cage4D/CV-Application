function Button({ type="submit", children, onClick }) {
    return (
        <>
            <button type={type} onClick={onClick}>{ children }</button>
        </>
    )
}

export default Button