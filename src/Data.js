import React, { useEffect, useState } from 'react'
import './style/Data.css'


const  url_dataTable = "https://blockchain.info/ticker"

function Data() {

    const [AUDbuy, setAudBuy] = useState([])
    const [EURbuy, setEurBuy] = useState([])
    const [PONDbuy, setPondBuy] = useState([])
    const [YENbuy, setYenBuy] = useState([])
    const [USDbuy, setUsdBuy] = useState([])

    const [AUDsell, setAudSell] = useState([])
    const [EURsell, setEurSell] = useState([])
    const [PONDsell, setPondSell] = useState([])
    const [YENsell, setYenSell] = useState([])
    const [USDsell, setUsdSell] = useState([])


    // console.log(buyOption)

    useEffect(() => {
        fetch(url_dataTable)
            .then(res => res.json())
            .then(data => {
                const buyAUD = Object.keys(data.AUD)[2]
                const buyEUR = Object.keys(data.GBP)[2]
                const buyPOND = Object.keys(data.AUD)[2]
                const buyYEN = Object.keys(data.JPY)[2]
                const buyUSD = Object.keys(data.USD)[2]

                const sellAUD = Object.keys(data.AUD)[3]
                const sellEUR = Object.keys(data.GBP)[3]
                const sellPOND = Object.keys(data.AUD)[3]
                const sellYEN = Object.keys(data.JPY)[3]
                const sellUSD = Object.keys(data.USD)[3]

                setAudBuy(data.AUD[buyAUD])
                setEurBuy(data.EUR[buyEUR])
                setPondBuy(data.GBP[buyPOND])
                setYenBuy(data.JPY[buyYEN])
                setUsdBuy(data.USD[buyUSD])

                setAudSell(data.AUD[sellAUD])
                setEurSell(data.EUR[sellEUR])
                setPondSell(data.GBP[sellPOND])
                setYenSell(data.JPY[sellYEN])
                setUsdSell(data.USD[sellUSD])

            })
    }, [])


    return (
        <div className="tableData">
            <table>
                <tr>
                    <th>Mata Uang</th>
                    <th>Harga Beli Bitcoin</th>
                    <th>Harga Jual Bitcoin</th>
                </tr>
                <tr>
                    <td>Dolar Australia</td>
                    <td>{AUDbuy}</td>
                    <td>{AUDsell}</td>

                </tr>
                <tr>
                    <td>Euro Eropa</td>
                    <td>{EURbuy}</td>
                    <td>{EURsell}</td>

                </tr>
                <tr>
                    <td>Pondsterling Inggris</td>
                    <td>{PONDbuy}</td>
                    <td>{PONDsell}</td>

                </tr>
                <tr>
                    <td>Yen Jepang</td>
                    <td>{YENbuy}</td>
                    <td>{YENsell}</td>

                </tr>
                <tr>
                    <td>Dollar Amerika</td>
                    <td>{USDbuy}</td>
                    <td>{USDsell}</td>

                </tr>
            </table>
        </div>
    )
}

export default Data;