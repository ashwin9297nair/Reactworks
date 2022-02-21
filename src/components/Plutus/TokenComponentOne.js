import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../services/ProductService';
import bitcoin from "../../assets/bitcoin.jpg"
const TokenComponentOne = () => {

   const [products, setProducts] = useState([]);
   const productService = new ProductService();

   const template = (e) => {
      return (
         <div className='flex text-sm'>
            <img alt='Test' className='ps-customIconTable p-mr-1' src={bitcoin} />
            {e.name}
         </div>

      )
   }

   useEffect(() => {
      productService.getProductsSmall().then(data => setProducts(data));
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <div className="p-grid p-p-0 p-mr-6">
         <div className="p-col-12">
            <div className='ps-custom-box-2'>
               <div class="card">
                  <div class="flex card-container blue-container overflow-hidden">
                     <strong className='text-4xl'>$6,711.<span className='text-400'>94</span></strong>
                     <div class="flex-grow-1 flex justify-content-center"></div>
                     <div class="flex-grow-2 flex align-items-center justify-content-center">
                        <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-save" style={{ 'fontSize': '1.2em' }}></span>Save as Record</button>
                        <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c pi pi-file-excel" style={{ 'fontSize': '1.2em' }}></span></button>
                        <button class="p-button ps-custom-button-1 p-component p-button-sm"><span class="p-button-icon p-c pi pi-file-pdf" style={{ 'fontSize': '1.2em' }}></span></button>
                     </div>
                  </div>
               </div>

               <br />
               <div className="card">
                  <DataTable value={products} responsiveLayout="scroll" className='p-datatable-sm text-sm' >
                     <Column header="Tokens" className='text-sm text-600' body={template}></Column>
                     <Column field="category" className='text-sm text-600' header="Quantity"></Column>
                     <Column field="price" className='text-sm text-600' header="Price"></Column>
                     <Column field="price" className='text-sm text-600' header="Total Value"></Column>
                  </DataTable>

               </div>
               <br />
               <div class="card">
                  <div class="flex flex-wrap align-items-center justify-content-center">
                     <button class="p-button ps-custom-button-1 p-component p-button-sm p-mr-1"><span class="p-button-icon p-c p-button-icon-left pi pi-eye" style={{ 'fontSize': '1.2em' }}></span>Show More</button>
                  </div>
               </div>

            </div>

            <div className='ps-custom-box-2'>
               <div class="card">
                  <div class="flex card-container blue-container overflow-hidden">
                     <div className='text-3xl'>Cefi</div>
                     <div class="flex-grow-1 flex justify-content-center"></div>
                     <div class="flex-grow-2 flex align-items-center justify-content-center">
                        <div class="text-3xl" >$0.00</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default TokenComponentOne;