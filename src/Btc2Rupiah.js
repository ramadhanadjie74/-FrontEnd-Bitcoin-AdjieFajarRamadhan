import React, { useEffect, useState } from 'react'
import './style/Rupiah2Btc.css';
import CurrencyRow from './CurrencyRow'

const  url_konversi = "https://blockchain.info/tobtc?currency=USD&value=1"

function Btc2Rupiah() {

  const [bitcoinCurrency, setBitcoinCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInput, setAmountInput] = useState(true)
  let toAmount, fromAmount

  if (amountInput) {
    fromAmount = amount
    toAmount = (fromAmount * 14000) / bitcoinCurrency

  }


  useEffect(() => {
    fetch(url_konversi)
      .then(res => res.json())
      .then(data => {
        setBitcoinCurrency(data)
      })
  }, [])

  function handleAmountChange(e){
    setAmount(e.target.value)
    setAmountInput(true)
  }

  return (
    <>
      <h1>Konversi Bitcoin ke Rupiah</h1>
      <h4>Kurs 1 USD = 14.000 IDR</h4>
      <CurrencyRow
        onAmountChange = {handleAmountChange}
        amount={fromAmount}
      />
      <h2>BTC {fromAmount} = Rp {toAmount} </h2>
    </>

  );
}

export default Btc2Rupiah;
