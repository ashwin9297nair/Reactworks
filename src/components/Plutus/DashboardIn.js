import React, { useState } from 'react'
import makeBlockie from 'ethereum-blockies-base64';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { TabMenu } from 'primereact/tabmenu';
import Transaction from './Transaction';

export default function DashboardIn() {



  const [activeIndex, setActiveIndex] = useState(0);

  const items1 = [
    { label: 'DeFi' },
    { label: 'CeFi' },
  ];



  const items = [
    {
      "address": "0x2d74c87461f08b0914fcc5194be006209c6f7c5a",
      "name": "PJ",
      "nav": "$83,046.10"
    },
    {
      "address": "0x4cd202065e25ae7deb768d1e85739459e6e1af68",
      "name": "0x4cd202065e25ae7deb768d1e8573...",
      "nav": "$1,126,986.80"
    },
    {
      "address": "0x283d5ef5145fe40b4e12d9ebff01c45b78c51848",
      "name": "0x283d5ef5145fe40b4e12d9ebff01...",
      "nav": "$16,751.45"
    }
  ]

  const [selectedAddress] = useState([])

  const itemTemplate = (e) => {
    return (
      <div>
        <div title={e.address} onClick={() => this.props.history.push(`/wallet/${e.address}`)}>
          <div className="overflow-hidden text-overflow-ellipsis"><img src={makeBlockie(e.address)} className='h-1rem border-circle mr-1 mt-1' />{e.name}</div>
          <div>{(e.nav)}</div>
        </div>
      </div>
    )
  }

  return (
    <>

      <div className="p-grid mr-6">
        <div className="p-col-12 mt-4">
          <div className='text-3xl font-normal mt-2 mb-3'>Dashboard</div>
          <div className="ps-custom-box-2">
            <div className="p-grid mb-2">
              <div className="p-col-10">
                <div className='flex'>
                  <Dropdown value={selectedAddress} options={items} itemTemplate={itemTemplate} placeholder='My Accounts' />
                  <div className='m-2 flex'><div className='font-bold mr-1'>{items.length}</div><div>{'Account(s)'}</div></div>
                </div>
              </div>
              <div className="p-col-2">
                <div className='text-2xl font-bold text-right'>$6,875.15</div>
              </div>
            </div>

            <div className="p-grid mb-1 mt-3">
              <div className="p-col-10">
                <div className="card">
                  <TabMenu activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} model={items1} />
                </div>
              </div>
              <div className="p-col-2">
                <div className="text-right mt-1">
                  <div class="flex-grow-2 flex align-items-center justify-content-end">
                    <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c pi pi-save" style={{ 'fontSize': '1.2em' }}></span></button>
                    <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c pi pi-file-excel" style={{ 'fontSize': '1.2em' }}></span></button>
                    <button class="p-button ps-custom-button-1 p-component p-button-sm"><span class="p-button-icon p-c pi pi-file-pdf" style={{ 'fontSize': '1.2em' }}></span></button>
                  </div>
                </div>
              </div>
            </div>

            {/* {activeIndex === 0 && (<div>Test 001</div>)  }
   {activeIndex === 1 && (<div>Test 02</div>)  } */}

            {activeIndex === 0 ?

              <div>

                <div className="p-grid">
                  <div className="p-col-12">
                    <div className="flex flex-row flex-wrap card-container align-items-center mt-5">
                      <div className='flex'>
                        <div className="align-items-center justify-content-center p-mr-2">
                          <img alt='Test' className='ps-customIcon1' src='./images/plutus/token_icon1.png' />
                        </div>
                        <div className="align-items-center justify-content-center p-mr-4">
                          <div className='text-xs'>Assets on Polygon <br />
                            $6.73<span className='p-ml-1'>0%</span></div>
                        </div>
                      </div>

                      <div className='flex'>
                        <div className=" align-items-center justify-content-center p-mr-2">
                          <img alt='Test' className='ps-customIcon1' src='./images/plutus/token_icon2.png' />
                        </div>
                        <div className="align-items-center justify-content-center p-mr-4">
                          <div className='text-xs'>Assets on Avalanche <br />
                            $52.74<span className='p-ml-1'>1%</span></div>

                        </div>
                      </div>

                      <div className='flex'>
                        <div className=" align-items-center justify-content-center p-mr-2">
                          <img alt='Test' className='ps-customIcon1' src='./images/plutus/token_icon3.png' />
                        </div>
                        <div className="align-items-center justify-content-center p-mr-4">
                          <div className='text-xs'>Assets on Fantom <br />
                            $6,632.56<span className='p-ml-1'>99%</span></div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                <div class="ps-custom-box-5 mt-4 mb-4">
                  <div className="p-grid">
                    <div className="p-col-6">
                      <div className='text-2xl text-700'>DeFi </div>
                    </div>
                    <div className="p-col-6 text-right">
                      <div className='text-2xl text-700'>$6,692.03</div>
                    </div>
                  </div>
                </div>

                <Transaction />




              </div> :

              <div>
                Test 002
              </div>}


            {/* <TabView>

       <TabPanel header="Portfolio">

        dsd

       </TabPanel>
       <TabPanel header="NFTs" className='text-sm'>
        <h2>No NFTs yet</h2>
       </TabPanel>
       <TabPanel header="History" className='text-sm'>
        dffds

       </TabPanel>
      </TabView> */}






          </div>


        </div>



      </div>





    </>
  )
}
