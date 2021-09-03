import React from 'react'

export default function CurrencyRow(props) {
    const{
        onAmountChange,
        amount
    } = props
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onAmountChange}/>
        </div>
    )
}
