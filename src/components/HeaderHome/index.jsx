import './styles.css'

export const HeaderHome = ({ searchValue, handleChange }) => {
    const options = [
        { label: 'Todos', value: '' },
        { label: 'Refrigerante', value: 'soda' },
        { label: 'Suco', value: 'juice' },
        { label: 'Água', value: 'water' },
        { label: 'Chips', value: 'chips' },
        { label: 'Doce', value: 'candy' }
    ];

    return (
        <div id='headerHome'>
            <div id="filterGroup">
                {options.map(opt => (
                    <label key={opt.value} 
                    className={`radio-btn${searchValue === opt.value ? ' selected' : ''}`}>
                        <input
                            type="radio"
                            name="filter"
                            value={opt.value}
                            checked={searchValue === opt.value}
                            onChange={() => handleChange(opt.value)}
                        />
                        {opt.label}
                    </label>
                ))}
            </div>
        </div>
    )
}