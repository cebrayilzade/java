const data = [
    {
        "name": "Bitcoin",
        "ticker": "BTC",
        "value": "9685",
        "change": "2.83%"
    },
    {
        "name": "Ethereum",
        "ticker": "ETH",
        "value": "210.5",
        "change": "6.17%"
    },
    {
        "name": "Ripple",
        "ticker": "XRP",
        "value": "0.2812",
        "change": "2.47%"
    },
    {
        "name": "Bitcoin Cash",
        "ticker": "BCH",
        "value": "441.4",
        "change": "5.01%"
    },
    {
        "name": "Bitcoin SV",
        "ticker": "BSV",
        "value": "303.17",
        "change": "5.53%"
    },
    {
        "name": "Litecoin",
        "ticker": "LTC",
        "value": "74.935",
        "change": "4.25%"
    },
    {
        "name": "Tether",
        "ticker": "USDT",
        "value": "0.9994",
        "change": "-1.7%"
    },
    {
        "name": "EOS",
        "ticker": "EOS",
        "value": "4.6161",
        "change": "3.15%"
    },
    {
        "name": "Binance Coin",
        "ticker": "BNB",
        "value": "19.824",
        "change": "-3.82%"
    },
    {
        "name": "Cardano",
        "ticker": "ADA",
        "value": "0.060389",
        "change": "2.93%"
    },
    {
        "name": "Tezos",
        "ticker": "XTZ",
        "value": "2.1247",
        "change": "6.12%"
    },
    {
        "name": "Ethereum Classic",
        "ticker": "ETC",
        "value": "12.5988",
        "change": "4.09%"
    },
    {
        "name": "Stellar",
        "ticker": "XLM",
        "value": "0.07034",
        "change": "-4.10%"
    },
    {
        "name": "Monero",
        "ticker": "XMR",
        "value": "79.523",
        "change": "3.45%"
    },
    {
        "name": "TRON",
        "ticker": "TRX",
        "value": "0.020881",
        "change": "5.21%"
    }
];

const tbody = document.querySelector("tbody");
tableRender()
function tableRender() {
    data.forEach(item=>{

    tbody.innerHTML += `
    <tr>
        <td>${item.name}</td>
        <td>${item.ticker}</td>
        <td>${item.value}</td>
        <td class="${item.change[0] !== "-" ? "text-[green]" : "text-[red]"}">${item.change}</td>
    </tr>
    `

            
})
    
}

const nameBtn = document.getElementById("nameBtn");
let isSorted = false;
nameBtn.addEventListener("click" , ()=>{
    if (!isSorted){
        data.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
        isSorted = true
    }else{
        data.sort((b,a)=>{
            return a.name.localeCompare(b.name)
        })
        isSorted = false

    }
    tbody.innerHTML = " "

    tableRender()
})

const tickerBtn = document.getElementById("tickerBtn");
let istickerBtnSorted = false;
tickerBtn.addEventListener("click" , ()=>{
    if (!istickerBtnSorted ){
        data.sort((a,b)=>{
            return a.ticker.localeCompare(b.ticker)
        })
        istickerBtnSorted  = true
    }else{
        data.sort((b,a)=>{
            return a.ticker.localeCompare(b.ticker)
        })
        istickerBtnSorted  = false

    }
    tbody.innerHTML = " "

    tableRender()
})


const valueBtn = document.getElementById("valueBtn");
let isvalueBtnSorted = false;
valueBtn.addEventListener("click" , ()=>{
    if (!isvalueBtnSorted ){
        data.sort((a,b)=>{
            return a.value - b.value;
        })
        isvalueBtnSorted  = true
    }else{
        data.sort((b,a)=>{
            return a.value - b.value;
        })
        isvalueBtnSorted  = false

    }
    tbody.innerHTML = ""

    tableRender()
})



const changeBtn = document.getElementById("changeBtn");
let ischangeBtnSorted = false;
changeBtn.addEventListener("click" , ()=>{
    if (!ischangeBtnSorted ){
        data.sort((a,b)=>{
            return a.value.localeCompare(b.value)
        })
        ischangeBtnSorted  = true
    }else{
        data.sort((b,a)=>{
            return a.value.localeCompare(b.value)
        })
        ischangeBtnSorted  = false

    }
    tbody.innerHTML = ""

    tableRender()
})
