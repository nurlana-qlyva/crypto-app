import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {

    useEffect(() => {
        axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false'
        )
            .then(res => {
                console.log(res.data);
                for(let i of Object.values(res.data)){
                    var div = document.createElement('DIV');
                    var name = document.createElement('DIV');
                    name.innerText = i.name;
                    var image = document.createElement('DIV');
                    var img = document.createElement('IMG');
                    img.setAttribute('src', i.image)
                    image.append(img)
                    var price = document.createElement('DIV');
                    price.innerHTML = i.current_price
                    var symbol = document.createElement('DIV');
                    symbol.innerText = i.symbol;

                    div.append(name, image, symbol, price);
                    document.querySelector('#home').append(div)
                }

            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='crypto'>
            <div className='container'>
                <h1>Crypto Hunter</h1>
                <p>Get All The Info Regarding Your Favourite Crypto Currency</p>
                <div id='home'></div>
            </div>
        </div>
    )

}

export default Home;