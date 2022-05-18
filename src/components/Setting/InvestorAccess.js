import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import InvestorTable from './InvestorTable';
import { Fieldset } from 'primereact/fieldset';
import { withRouter } from 'react-router-dom';
let data = [
  { "email": "ash@gmail.com", "name": "Ashwin" },
  { "email": "bsh@gmail.com", "name": "PRet" },
  { "email": "csh@gmail.com", "name": "Anikt" },
  { "email": "dsh@gmail.com", "name": "Ashutsh" },
  { "email": "esh@gmail.com", "name": "virat" },
  { "email": "fsh@gmail.com", "name": "Rahul" },
  { "email": "gsh@gmail.com", "name": "Yash" },

]
let trial='hello'
let data1 = [
  { "email": ".com1", "name": "Ashwin1" },
  { "email": "bcom1", "name": "PRet1" },
  { "email": "a.com1", "name": "Anikt1" },
  { "email": "dsh@gmail.com1", "name": "Ashutsh1" },
  { "email": ".com11", "name": "virat11" },
  { "email": "ail.com1", "name": "Rahul1" },
  { "email": "gmail.com1", "name": "Yash1" },

]


const InvestorAccess = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [desc, setDesc] = useState('');
  const [propdata, setPropdata] = useState('');
  const [userName, setuserName] = useState('');
  const [errortrue, setErrortrue] = useState(true);
  const [pageReload, setPageReload] = useState(false)
  const [selectedCity1, setSelectedCity1] = useState(null);

  const cities = [
    { name: 'New York', code: 'NY', },
    { name: 'Rome', code: 'RM' },
    // { name: 'London', code: 'LDN' },
    // { name: 'Istanbul', code: 'IST' },
    // { name: 'Paris', code: 'PRS' }
  ];
  useEffect(() => {
    onCityChange(cities[0])

  }, [])

  const onCityChange = (e) => {
    // setPageReload(true)
    setSelectedCity1(e);
    console.log(e, 'eee')
    if (e.name === 'New York') {
      console.log('first')
      let check = [
        { "email": "ash@gmail.com", "name": "Ashwin" },
        { "email": "bsh@gmail.com", "name": "PRet" },
        { "email": "csh@gmail.com", "name": "Anikt" },
        { "email": "dsh@gmail.com", "name": "Ashutsh" },
        { "email": "esh@gmail.com", "name": "virat" },
        { "email": "fsh@gmail.com", "name": "Rahul" },
        { "email": "gsh@gmail.com", "name": "Yash" },

      ]
      setPropdata(check)
    }
    else if (e.name === 'Rome') {
      console.log('sec')
      let check1 = [
        { "email": ".com1", "name": "Ashwin1" },
        { "email": "bcom1", "name": "PRet1" },
        { "email": "a.com1", "name": "Anikt1" },
        { "email": "dsh@gmail.com1", "name": "Ashutsh1" },
        { "email": ".com11", "name": "virat11" },
        { "email": "ail.com1", "name": "Rahul1" },
        { "email": "gmail.com1", "name": "Yash1" },

      ]
      setPropdata(check1)
    }
  }
  const handleChange =(e)=>{
  
    // Here we are checking if the length is equal to 10
    if(e.target.value.length>=10){ 
      window.alert("Username shouldn't exceed 10 characters")
    }
    else if(/\s/g.test(e.target.value)){
      window.alert("Explty")
    }
    else{
    setuserName(e.target.value);
    }
  }
  

  return (
    <>
      <div className='grid flex justify-content-center lg:ml-5 md:ml-5'>
        <div className='col-12 lg:col-10 lg:offset-1 md:col-10 md:offset-1'>
          <h2 className='text-900'>Investor Access</h2>
          <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
          <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's</div>

          <div className="p-field p-grid p-0 m-0 mt-6 mb-4">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Fund</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <Dropdown value={selectedCity1} options={cities} onChange={(e)=>onCityChange(e.value)} optionLabel="name" placeholder='Select your fund' className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
            </div>
          </div>


          <Fieldset legend="Add Investor" className='p-0 m-0 mb-3'>
            <div className='lg:flex md:flex align-items-center' onMouseLeave={() => setErrortrue(false)} onMouseEnter={() => setErrortrue(true)}>
              <div className='lg:mr-2 md:mr-2 lg:mb-0 md:mb-0 mb-2 w-full'>
                <InputText required placeholder='Investor Email ID' className='w-full p-inputtext-sm lg:mt-3 md:mt-3' />
                <div className={"flex align-items-start "+ (errortrue && 'visibilitycheck')}>
                <small id="username-help" className="p-error" >Cannot be less that 10 character</small>
                </div>
              </div>
              <div className='lg:mr-2 md:mr-2 lg:mb-0 md:mb-0 mb-2 w-full'>
                <InputText placeholder='Investor Name' className='w-full p-inputtext-sm lg:mt-3 md:mt-3' value={userName}
                onChange={ handleChange} />
                <div className='flex align-items-start'>
                <small id="username-help" className="p-error">Cannot be less that 10 character</small>
                </div>
              </div>
              
              <div className='text-right'>
                <Button label="Add" icon="pi pi-plus" className='p-button p-button-sm py-2 px-2' />
              </div>
            </div>
          </Fieldset>
          {/* <div>
            Click{' '}
            <span style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/new");
              }}
              className="orangelink"
            >here
            </span>{" "}
            to add a fund

          </div>
          <div>
          <div>
            <span>This is a sentence</span>
            <span className='italic'> with</span>
            <span> one {trial}</span>
          </div>
          </div> */}


          {/* <InputText placeholder='Investor Email' className='p-inputtext-sm mb-3 w-full' />

     <InputText placeholder='Investor Name' className='p-inputtext-sm mb-3 w-full' /> */}



          <InvestorTable data={propdata}/>
        </div>
      </div>

    </>





  )




}

export default withRouter(InvestorAccess)