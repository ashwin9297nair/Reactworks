import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { Fieldset } from 'primereact/fieldset';
import ReactQuill from 'react-quill';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import makeBlockie from 'ethereum-blockies-base64';

let check1 = [
        { "walletAddress": "0x61Af7C1D9f0223b712B1C482c74bb807Ad946dA5", "walletLabel": "Ashwin1" },
        { "walletAddress": "0x0B45C745edC825838AE660194f832480d8Df56B9", "walletLabel": "PRet1" },
        { "walletAddress": "0x61Af7C1D9f0223b712B1C482c74bb807Ad946dA5", "walletLabel": "Ashwin1" },
        { "walletAddress": "0x0B45C745edC825838AE660194f832480d8Df56B9", "walletLabel": "PRet1" },

      ]

const FundAccess = () => {
    const [name, setName] = useState('first');
    const [value, setValue] = useState(null);
    const [desc, setDesc] = useState('');
    const reactQuillRef = useRef();
    const [fundName, setFundName] = useState('')
    const [walletAddress, setWalletAddress] = useState(null)
    const [fundDescription, setFundDescription] = useState(null)
    const [selectedProducts, setSelectedProducts] = useState(null);


    const checkCharacterCount = (event) => {
        console.log(reactQuillRef, 'aa')
        console.log(typeof reactQuillRef.current.getEditor)
        const quillRef = reactQuillRef.current.getEditor();
        if (quillRef.getLength() > 10 && event.key !== 'Backspace')
            event.preventDefault();
    };


    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const [selectedCity1, setSelectedCity1] = useState(null);
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
        console.log(e.value, 'this')
    }
    const actionBodyTemplate = (rowData) => {
        console.log(rowData, 'rowData')
        return (
          <React.Fragment>
            <div className='text-right'>
              <Button icon="pi pi-pencil" className='p-button p-button-sm p-button-secondary py-2 px-2 mr-1'  />
              <Button icon="pi pi-trash" className="p-button-sm py-2 px-2 p-button-danger p-button-outlined" />
            </div>
          </React.Fragment>
        );
      }
     
      const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
          const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 }
          ];
    
          return (
            <React.Fragment>
              <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
              <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
            </React.Fragment>
          );
        },
        'CurrentPageReport': (options) => {
          return (
            <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
              {options.first} - {options.last} of {options.totalRecords}
            </span>
          )
        }
      };
      const blockieTemplate = (rowData) => {

        return <img alt="not found" className='imagecirclesmall' src={makeBlockie(rowData.walletAddress)} />
      }

    return (
        <>
            <div className='grid flex justify-content-center lg:ml-5 md:ml-5'>
                <div className='col-12 lg:col-10 lg:offset-1 md:col-10 md:offset-1'>
                    <h2 className='text-900'>Fund Access</h2>
                    <div className='mb-4'>
                        You can edit your fund which includes the fund name, it's description along with adding and removing different wallets.

                        <div className="field grid p-0 m-0 mt-6 mb-4">
                            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Fund</label>
                            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
                                <Dropdown value={selectedCity1} options={cities} onChange={(e) => onCityChange(e.value)} optionLabel="name" placeholder='Select your fund' className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
                            </div>
                        </div>

                    </div>


                    <div>
                        <div className='mb-3'>
                            <div className="field grid p-0 m-0">
                                <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 h-2rem pl-1 font-semibold text-800">Fund Name</label>
                                <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
                                    <InputText value={fundName} onChange={(e) => { e.target?.value?.length <= 20 && setFundName(e.target.value) }} className='p-inputtext-sm lg:w-24rem md:w-24rem w-full' />
                                    {/* {errorFundname?.length > 0 && (<div id="username2-help" className="p-error text-sm mb-1 ">{errorFundname}</div>)} */}
                                </div>
                            </div>
                        </div>
                        <div className="grid p-0 m-0">
                            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 lg:pt-3 md:pt-3 pl-1 font-semibold text-800">Fund Description</label>
                            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
                                <Editor placeholder="Enter Fund's Description" value={fundDescription} style={{ height: '150px' }} onTextChange={(e) => { e.htmlValue?.length <= 270 && setFundDescription(e.htmlValue) }} className='p-inputtext-sm my-2 w-full' />
                            </div>

                        </div>
                        <div className='text-right mt-5 mb-4'>
                            <Button label="Delete Fund" className="p-button p-button-danger p-button-sm" />
                            <Button label='Save' className='p-button p-button-sm ml-2 mr-1' />
                        </div>
                        <div className='mb-3'>
                            <Fieldset legend="Add Wallets" className='p-0 m-0 mb-3'>
                                <div className='lg:flex md:flex align-items-center'>
                                    <div className='lg:mr-2 md:mr-2 lg:mb-0 md:mb-0 mb-2 w-full'>
                                        <InputText value={walletAddress} onChange={(e) => { setWalletAddress(e.target?.value) }} placeholder='Wallet Address' className='w-full p-inputtext-sm lg:mt-3 md:mt-3' />
                                        <div className={'flex align-items-start '}>

                                            <small className="p-error block">this is error</small>

                                        </div>
                                    </div>
                                    <div className='lg:mr-2 md:mr-2 lg:mb-0 md:mb-0 mb-2 w-full'>
                                        <InputText placeholder='Wallet Label' className='w-full p-inputtext-sm lg:mt-3 md:mt-3' />
                                        <div className={'flex align-items-start '}>

                                            <small id="username2-help" className="p-error block">this is error</small> :

                                        </div>
                                    </div>

                                    <div className='text-right'>
                                        <Button label="Add" icon="pi pi-plus" className='p-button p-button-sm py-2 px-2' />
                                    </div>

                                </div>
                            </Fieldset>
                            <div className="datatable-crud-demo">

                                <DataTable  value={check1} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} className='p-datatable-sm text-sm mt-3'
                                    dataKey="walletAddress" paginator paginatorTemplate={template2}  paginatorClassName="justify-content-end"
                                     responsiveLayout="scroll">
                                    <Column field="walletAddress" header="Wallet Image" sortable body={blockieTemplate} className="text-center custom-hide " ></Column>
                                    <Column field="walletAddress" header="Wallet Address" sortable  ></Column>
                                    <Column field="walletLabel" header="Wallet Label" className="custom-hide " sortable ></Column>
                                    <Column body={actionBodyTemplate} exportable={false} ></Column>
                                </DataTable>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </>
    )




}

export default FundAccess