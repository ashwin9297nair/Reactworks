import React, { useState, useEffect } from 'react';
import AssistCategory from '../Plutus/data/AssistCategory.json' 
import axios from 'axios';


export async function  AssistAPI(){
    let categorydata={}
    
    for(var i = 0; i < AssistCategory.length; i++) {
        // console.log(AssistCategory[i].id,'iddds')
 
       AssistCategory[i].data=(await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${AssistCategory[i].id}&order=market_cap_desc&sparkline=false`)).data
       
    }
    // console.log(AssistCategory,'data')
    return AssistCategory  
}
export async function  trendAPI(){
    let trend = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
    )
    // console.log(trend.data.coins, 'trend')
    let chartprice = {}
    let chartp
    let trendtemp = {}

    for (let i = 0; i < trend.data.coins.length; i++) {
        console.log(trend.data.coins[i].item, 'zzz')
        trendtemp[trend.data.coins[i].item.id] = trend.data.coins[i].item
        chartp = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${trend.data.coins[i].item.id}/market_chart?vs_currency=USD&days=7`
        )
        chartprice[trend.data.coins[i].item.id] = chartp.data.prices
    }
    let chart1 = {}
    for (const key in chartprice) {
        let pricetemp = []
        let temp = chartprice[key]
        for (let j = 0; j < temp.length; j++) {
            pricetemp.push(temp[j][1])
        }
        chart1[key] = pricetemp

    }
    return [chart1,trendtemp]

}

