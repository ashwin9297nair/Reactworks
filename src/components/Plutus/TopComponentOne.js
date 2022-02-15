import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../services/ProductService';

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
                              <div className='mx-2 text-xl text-600'>0x2d74c87461f08b0914fcc5194be006209c6f7c5a </div> <i className=" p-ml-2 pi pi-copy"></i>
                           </div>
                        </div>
                     </div>
                     <div className="p-col-6 text-right">
                        <div className='text-2xl'>$6,692.03</div>
                     </div>
                  </div>

                  <div className="p-grid">
                     <div className="p-col-12">
                        <div className="flex flex-row flex-wrap card-container align-items-center">

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
                           <div className='align-items-center justify-content-center'>
                              <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '120px' }} />
                           </div>


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
                     <TabPanel header="Portfolio" className='text-sm font-light '>
                        <div class="flex">
                           <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-save" style={{ 'fontSize': '1.2em' }}></span>Save as Record</button>
                           <div class="flex-grow-1 flex justify-content-center"></div>
                           <div class="flex-grow-2 flex align-items-center justify-content-center">
                              <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c pi pi-file-excel" style={{ 'fontSize': '1.2em' }}></span></button>
                              <button class="p-button ps-custom-button-1 p-component p-button-sm"><span class="p-button-icon p-c pi pi-file-pdf" style={{ 'fontSize': '1.2em' }}></span></button>
                           </div>
                        </div>

                        <DataTable value={products} responsiveLayout="scroll" className='p-datatable-sm p-mt-3 text-sm'>
                           <Column className='text-base text-600' field="name" header="Tokens" className='text-sm text-600'></Column>
                           <Column className='text-base text-600' field="category" header="Quantity" className='text-sm text-600'></Column>
                           <Column className='text-base text-600' field="price" header="Price" className='text-sm text-600'></Column>
                           <Column className='text-base text-600' field="category" header="Total Value" className='text-sm text-600'></Column>
                        </DataTable>
                        <div class="flex flex-wrap align-items-center justify-content-center p-mt-4">
                           <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-eye" style={{ 'fontSize': '1.2em' }}></span>Show More</button>
                        </div>

                     </TabPanel>
                     <TabPanel header="History" className='text-sm'>
                        <p>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                     </TabPanel>
                  </TabView>
               </div>
            </div>
         </div>

         <div className="p-grid p-p-0 p-mr-6">
            <div className="p-col-12">
               <div className="ps-custom-box-2 overflow-hidden">
                  <strong className='text-2xl'>Polygon</strong>
                  <div className='text-lg p-mt-3'><i className="pi pi-wallet text-xl text-indigo-500"></i> Wallet</div>
                  <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm p-mt-2 text-sm'>
                     <Column className='text-base text-600' field="name" header="Tokens" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="category" header="Quantity" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="price" header="Price" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="category" header="Total Value" className='text-sm text-600'></Column>
                  </DataTable>
                  <br />

                  <div className='text-lg p-mt-2'><i className="pi pi-wallet text-lg text-indigo-500"></i> Klima DAO</div>
                  <DataTable value={products1} responsiveLayout="scroll" className='p-datatable-sm p-mt-2 text-sm'>
                     <Column className='text-base text-600' field="name" header="Tokens" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="category" header="Quantity" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="price" header="Price" className='text-sm text-600'></Column>
                     <Column className='text-base text-600' field="category" header="Total Value" className='text-sm text-600'></Column>
                  </DataTable>

               </div>
            </div>
         </div>
      </>





   )
}

export default TopComponentOne;