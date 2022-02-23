import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Link, withRouter } from 'react-router-dom';
import Trending from './Trending';

const AssistedPage = (props) => {
    // const [stablecoins, setStablecoins] = useState([]);
    // const [deficoins, setDeficoins] = useState([]);
    // const [dexcoins, setDexcoins] = useState([]);
    // const [cexcoins, setCexcoins] = useState([]);
    // const [metaversecoins, setMetaversecoins] = useState([]);
    // const [NFTcoins, setNFTcoins] = useState([]);
    // const [memecoins, setMemecoins] = useState([]);
    // const [yeildcoins, setYieldcoins] = useState([]);
    // // const [APIdata, setAPIdata] = useState([]);
    // const [smartcontractcoins, setSmartcontractcoins] = useState([]);
    const [APIdata, setAPIdata] = useState([]);



    // useEffect(() => {
    //     // console.log(props.APIdata,'dddd')
    //     const funct = async () => {
    //         let stablecoindata = (await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=stablecoins&order=market_cap_desc&sparkline=false")).data
    //         setStablecoins(stablecoindata)
    //         console.log(stablecoindata,'jj')

    //         let deficoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=defi-index&order=market_cap_desc&sparkline=false")
    //         setDeficoins(deficoindata.data)

    //         let dexcoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-exchange&order=market_cap_desc&sparkline=false")
    //         setDexcoins(dexcoindata.data)

    //         let cexcoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=centralized-exchange-token-cex&order=market_cap_desc&sparkline=false")
    //         setCexcoins(cexcoindata.data)

    //         let metaversecoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&sparkline=false")
    //         setMetaversecoins(metaversecoindata.data)

    //         let NFTcoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=non-fungible-tokens-nft&order=market_cap_desc&sparkline=false")
    //         setNFTcoins(NFTcoindata.data)

    //         let memecoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=meme-token&order=market_cap_desc&sparkline=false")
    //         setMemecoins(memecoindata.data)

    //         let yieldcoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=yield-farming&order=market_cap_desc&sparkline=false")
    //         setYieldcoins(yieldcoindata.data)

    //         let smartcontractcoindata = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=smart-contract-platform&order=market_cap_desc&sparkline=false")
    //         setSmartcontractcoins(smartcontractcoindata.data)

    //         console.log(stablecoindata, 'aaaaa')

    //     }
    //     funct()
    // },[])

    useEffect(() => {
        console.log(props.chartdata, 'dddd')
        console.log(props.trenddata, 'dddd')
        setAPIdata(props.APIdata)
        console.log(APIdata, '123')
    }, [props])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];



    const productTemplate = (product) => {

        return (
            <Card className="m-2 content" header={<p className='text-right mb-0'></p>}>

                <div onClick={() => window.location = `/research/${product.id}`}>
                    <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                    </div>
                    <div className="mb-3">
                        <img src={product.image} style={{ maxWidth: '70px', borderRadius: '25px' }} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        {product.name?.length > 14 ?
                            <h2 title={product.name} className="mb-1">{product.name.slice(0, 14) + '..'}</h2>
                            : <h2 title={product.name} className="mb-1">{product.name.slice(0, 14)}</h2>}
                        <small className="mb-1">{product.symbol.toUpperCase()}</small>
                        <h2 className="mb-1">${product.current_price}</h2>
                    </div>
                </div>
            </Card>
        );
    }

    const Carousal = () => {
        let content = []
        console.log(APIdata, '123')
        for (var i = 0; i < APIdata?.length; i++) {
            content.push(
                <div >
                    <Carousel key={APIdata[i].id} value={APIdata[i].data} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} header={
                            <div>
                                <div className='text-3xl font-semibold'>{APIdata[i].name}</div>
                                <div className='grid'>
                                    <div className='text-sm font-semibold' >This is stable coins</div>
                                    <div className='col-10 align-right'>
                                        <Link
                                            to={{
                                                pathname: "/assisttable",
                                                state: APIdata[i].id
                                            }}
                                        >See All</Link>
                                    </div>
                                </div>
                            </div>
                        } />
                </div>


            )
        }
        return content;
    }

    return (
        <div>
             <Trending data={props.trenddata} chart={props.chartdata}/>
        <div className='p-grid'>

            {APIdata.length>0 && Carousal()}

            {/* <div >
                <Carousel value={stablecoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                        <div className='text-3xl font-semibold'>Stable coins</div>
                        <div className='grid'>
                            <div className='text-sm font-semibold' >This is stable coins</div>
                            <div className='col-10 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: stablecoins
                                    }}
                                >See All</Link>
                            </div>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={deficoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div >
                            <h3 >Defi Index</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: deficoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={dexcoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} circular header={
                        <div>
                            <h3 >Decentralized Exchange (DEX)</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: dexcoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={cexcoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >Centralized Exchange (CEX)</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: cexcoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={metaversecoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >Metaverse Tokens</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: metaversecoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={NFTcoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >NFT Tokens</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: NFTcoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={memecoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >Meme Tokens</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: memecoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={yeildcoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >Yield Farming</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: yeildcoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div>
            <div >
                <Carousel value={smartcontractcoins} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={
                        <div>
                            <h3 >Smart Contract Platform</h3>
                            <div className='col-11 align-right'>
                                <Link
                                    to={{
                                        pathname: "/assisttable",
                                        state: smartcontractcoins
                                    }}
                                >See All</Link>
                            </div>
                        </div>} />
            </div> */}

        </div>
        </div>

    )

}
export default withRouter(AssistedPage);