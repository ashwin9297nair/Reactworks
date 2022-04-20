import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { Fieldset } from 'primereact/fieldset';

const FundAccess = () => {
   const [name, setName] = useState('');
   const [desc, setDesc] = useState('');

   const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
   ];
   const [selectedCity1, setSelectedCity1] = useState(cities[0]);
   const onCityChange = (e) => {
      setSelectedCity1(e.value);
      console.log(e.value, 'this')
   }

   return (
      <>


         <div className='lg:w-30rem md:w-30rem w-21rem mb-6'>
            <h2 className='text-900'>Fund Access</h2>
            <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
            <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's</div>
            <div className='grid mr-6'>
              
            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Fund" className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />

               
               <div className='col-12 mt-4'>
                  <div className='text-3xl mb-3'>Edit Fund</div>
                  <div className='ps-custom-box-2'>
                     {/* <label>Fund Name</label><br /> */}
                     <div>
                        <div className='mb-3'>
                           <InputText  placeholder='Fund Name' className=' p-inputtext p-inputtext-sm w-7' /><br />
                        </div>
                        <Editor style={{ height: '200px' }} placeholder="Enter Fund's Description" className='mb-3' />
                     </div>
                     <div className='mb-3'>
                        <Fieldset legend="Add Wallets">
                           <div className='flex'>
                              <div className='mr-2'>
                                 <InputText  placeholder='Wallet Address' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
                              </div>
                              <div className='mr-6 pr-1'>
                                 <InputText placeholder='Wallet Label' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
                              </div>

                              <Button label='Add' className='p-button p-button-sm' />
                           </div>

                  
                        </Fieldset>
                     </div>
                     <Button label='Save'  className='p-button p-button-sm w-2' />
                  </div>
               </div>
               <Button label="Delete Fund"  className="p-button p-button-danger p-button-sm" />

            </div>
         </div>



      </>
   )




}

export default FundAccess