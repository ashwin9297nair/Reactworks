import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
let data = [
    { "email": "ash@gmail.com", "Name": "Ashwin" },
    { "email": "bsh@gmail.com", "Name": "PRet" },
    { "email": "csh@gmail.com", "Name": "Anikt" },
    { "email": "dsh@gmail.com", "Name": "Ashutsh" },
    { "email": "esh@gmail.com", "Name": "virat" },
    { "email": "fsh@gmail.com", "Name": "Rahul" },
    { "email": "gsh@gmail.com", "Name": "Yash" },

]


const InvestorAccess = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedCity1, setSelectedCity1] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    return (
        <>

            <div className='lg:w-30rem md:w-30rem w-21rem mb-6'>
                <h2 className='text-900'>Investor Access</h2>
                <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
                <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's</div>
            </div>

            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Fund" className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
            <InputText value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
            <InputText value={email} onChange={(e) => setAddress(e.target.value)} placeholder='Add Email' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
            <InputText value={name} onChange={(e) => setAddress(e.target.value)} placeholder='Add Name' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />

            <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
                <Button label="Add" icon="pi pi-plus" className='p-button p-button-sm py-2 px-2' />
            </div>

            <div>
                <div className="card text-sm">
                    <DataTable value={data} showGridlines responsiveLayout="scroll" className='p-datatable-sm text-sm mt-3'>
                        <Column field="email" header="Email"></Column>
                        <Column field="Name" header="Name"></Column>
                    </DataTable>
                </div>
            </div>
            <br />
            <div className='text-right'>
                <Button label="Save" icon="pi pi-save" className='p-button font-light p-button-sm py-2 px-2' />
            </div>

            <br />






        </>
    )




}

export default InvestorAccess