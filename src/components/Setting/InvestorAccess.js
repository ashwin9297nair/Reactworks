import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import InvestorTable from './InvestorTable';
let data = [
    { "email": "ash@gmail.com", "name": "Ashwin" },
    { "email": "bsh@gmail.com", "name": "PRet" },
    { "email": "csh@gmail.com", "name": "Anikt" },
    { "email": "dsh@gmail.com", "name": "Ashutsh" },
    { "email": "esh@gmail.com", "name": "virat" },
    { "email": "fsh@gmail.com", "name": "Rahul" },
    { "email": "gsh@gmail.com", "name": "Yash" },

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

            <InputText placeholder='Investor Email' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' />

            <InputText placeholder='Investor Name' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' />
            <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
                <Button label="Add"  icon="pi pi-plus" className='p-button p-button-sm py-2 px-2' />
            </div>
            <InvestorTable data={data}    />
        </>





    )




}

export default InvestorAccess