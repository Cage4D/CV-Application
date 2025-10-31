
function Month({ id, value, onChange }) {
    return (
            <select value={value} onChange={(e) => onChange(e.target.value)} id={id}>
                <option value="">Select an Option</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select> 
    )
}

function Year({ id, value, onChange }) {
    const len = new Array(101).fill(null)
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} id={id}>
            <option value="">Select year</option>
            {len.map((item, index) => {
                const y = 1960 + index
                return <option key={y} value={y}>{y}</option>
            })}
        </select>
    )
}

export { Month, Year }
