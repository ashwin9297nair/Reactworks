import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../services/ProductService';
import { Fieldset } from 'primereact/fieldset';
import bitcoin from "../../assets/bitcoin.jpg"
import { Divider } from 'primereact/divider';
import Transaction from './Transaction';

const TopComponentOne = () => {

  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const productService = new ProductService();
  const productService1 = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then(data => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    productService1.getProductsSmall1().then(data => setProducts1(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const chartData = {
    datasets: [
      {
        data: [5, 0, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  };

  const template = (e) => {
    return (
      <div className='flex text-sm'>
        <img alt='Test' className='ps-customIconTable p-mr-1' src={bitcoin} />
        {e.name}
      </div>

    )
  }

  return (
    <>
      <div className="p-grid p-p-0 p-mr-6 p-mb-5">
        <div className="p-col-12">
          <div class="ps-custom-box-3">
            <div className="p-grid">
              <div className="p-col-6">
                <div class="flex flex-row flex-wrap">
                  <div class="flex align-items-center justify-content-center p-mr-2">
                    <img alt='Test' className='ps-customIcon' src='./images/plutus/token_icon.png' />
                  </div>
                  <div className="flex align-items-center justify-content-center">
                    <div className='text-xl text-600'>0x2d74c87461f08b0914fcc5194be006209c6f7c5a </div> <i className=" p-ml-2 pi pi-copy"></i>
                  </div>
                </div>
              </div>
              <div className="p-col-6 text-right">
                <div className='text-2xl'>$6,692.03</div>
              </div>
            </div>

            <div className="p-grid">
              <div className="p-col-8">
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

              <div className="p-col-4">
              <div className='flex align-items-center justify-content-end'>
                  <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '120px' }} />
                </div>
              </div>
            </div>

            


          </div>
        </div>
      </div>

      <div className="p-grid p-p-0 p-mr-6">
        <div className="p-col-12">
          <div className="ps-custom-box-4 overflow-hidden">
            <TabView>
              <TabPanel header="Portfolio" className='text-sm font-light border-pink-600'>
                <div class="flex mt-1">
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-save" style={{ 'fontSize': '1.2em' }}></span>Save as Record</button>
                  <div class="flex-grow-1 flex justify-content-center"></div>
                  <div class="flex-grow-2 flex align-items-center justify-content-center">
                    <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c pi pi-file-excel" style={{ 'fontSize': '1.2em' }}></span></button>
                    <button class="p-button ps-custom-button-1 p-component p-button-sm"><span class="p-button-icon p-c pi pi-file-pdf" style={{ 'fontSize': '1.2em' }}></span></button>
                  </div>
                </div>

                <DataTable value={products} responsiveLayout="scroll" className='p-datatable-sm text-sm mt-3' >
                  <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                  <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                  <Column field="price" className='text-sm text-600' header="Price"></Column>
                  <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                </DataTable>
                <div class="flex flex-wrap align-items-center justify-content-center p-mt-4">
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-eye" style={{ 'fontSize': '1.2em' }}></span>Show More</button>
                </div>

                <div className="p-grid p-p-0">
                  <div className="p-col-12">
                    <Fieldset legend="Polygon" toggleable>
                      
                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-xl text-indigo-500"></i> Wallet</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm mb-5' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>

                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-lg text-indigo-500"></i> Klima DAO</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>
                    </Fieldset>
                    <br />
                    <Fieldset legend="Avalanche" toggleable>
                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-xl text-indigo-500"></i> Wallet</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm mb-5' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>

                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-lg text-indigo-500"></i> Klima DAO</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>
                    </Fieldset>
                    <br />
                    <Fieldset legend="Fantom" toggleable>
                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-xl text-indigo-500"></i> Wallet</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm mb-5' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>

                      <Divider align="left">
                        <div className='text-lg'><i className="pi pi-wallet text-lg text-indigo-500"></i> Klima DAO</div>
                      </Divider>
                      <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm text-sm' >
                        <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                        <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                        <Column field="price" className='text-sm text-600' header="Price"></Column>
                        <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                      </DataTable>
                    </Fieldset>
                  </div>
                </div>

              </TabPanel>
              <TabPanel header="NFTs" className='text-sm'>
                <h1>No NFTs yet</h1>
              </TabPanel>
              <TabPanel header="History" className='text-sm'>
                <Transaction />
                {/* <div class="flex mt-1">
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 border-none">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>All Chain</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Arbitrum</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Avalanche</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Binace</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Ethereum</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Ploygon</button>
                  <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1 surface-200 border-none text-600">
                    <span class="p-button-icon" style={{ 'fontSize': '1.2em' }}></span>Fantom</button>
                </div> */}
                {/* <p className='p-input-icon-left'><i className='pi pi-search text-xs'></i><input placeholder="Search by Tokenname, Date, Transaction Type..." className='p-inputtext p-component text-sm' value="" /></p> */}
                {/* <DataTable value={products} responsiveLayout="scroll" className='p-datatable-sm text-sm' >
                  <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                  <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                  <Column field="price" className='text-sm text-600' header="Price"></Column>
                  <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                </DataTable> */}

                

              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>


    </>





  )
}

export default TopComponentOne;