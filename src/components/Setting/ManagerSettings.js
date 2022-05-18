import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import img1 from '../../assets/profile.png'
import { Dialog } from 'primereact/dialog';


const ManagerSettings = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [errorpos, setErrorpos] = useState(null);
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [desc, setDesc] = useState('');
  const [position, setPosition] = useState('center');
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayBasic3, setDisplayBasic3] = useState(false);
  const [step, setStep] = useState('1');

  const dialogFuncMap = {
    'displayBasic': setDisplayBasic,
    'displayBasic2': setDisplayBasic2,
    'displayBasic3': setDisplayBasic3,

  }
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  }

  const verifylength=(e,length,pos)=>{
    if(e.length>=length){
      setError('Cannot be more than '+length)
      setErrorpos(pos)
    }
     
  }

  return (
    <>

      <div className='grid flex justify-content-center lg:ml-5 md:ml-5'>
        <div className='col-12 lg:col-10 lg:offset-1 md:col-10 md:offset-1'>
          <h2 className='text-900'>Manager Settings</h2>
          <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
          <div className='mb-4 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's</div>

          <div className='flex align-items-center justify-content-start ml-8 pl-7 my-3'>
            <div className='mr-4'>
              <img className='imagecircle' src={img1} />
            </div>
            <div className='mr-4'>
              <Button icon="pi pi-pencil" className='p-button p-button-sm p-button-secondary py-2 px-2' onClick={() => onClick('displayBasic3')} />
            </div>
          </div>
          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 h-2rem font-semibold text-800">First name</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12"  onMouseLeave={() => {setError('')}}>
              <InputText value={name} onChange={(e) =>{ e.target.value.length<=5 && setName(e.target.value);verifylength(e.target.value,5,1)}} className='p-inputtext-sm lg:w-24rem md:w-24rem w-full' />
              {(name.length>=5 && errorpos===1) && <div id="username2-help" className="p-error text-sm mb-1 ">{error}</div>}
            </div>

          </div>

          <div className="p-field p-grid p-0 m-0 mt-2">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 h-2rem font-semibold text-800">Last name</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12" onMo>
              <InputText value={lastname} onChange={(e) =>{e.target.value.length<=5 && setLastname(e.target.value);verifylength(e.target.value,5,2)}} className='p-inputtext-sm lg:w-24rem md:w-24rem w-full' />
              {(lastname.length>=4 && errorpos===2) && <div id="username2-help" className="p-error text-sm mb-1 ">{error}</div>}
            </div>
          </div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 col-12 p-0 m-0 pl-1 font-semibold text-800">Email ID</label>
            <div className="lg:col-10 lg:col-10 col-12 p-0 m-0 ">
              <div className="p-inputgroup lg:w-24rem md:w-24rem w-full pb-2">
                <InputText value={name}  placeholder='sample@gmail.com' className='p-inputtext-sm my-2' />
                <Button icon="pi pi-pencil" className="p-button-sm my-2 p-button-secondary" onClick={() => onClick('displayBasic2')} />
              </div>
            </div>
          </div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 col-12 p-0 m-0 pl-1 font-semibold text-800">Password</label>
            <div className="lg:col-10 lg:col-10 col-12 p-0 m-0">
              <div className="p-inputgroup lg:w-24rem md:w-24rem w-full pb-2">
                <InputText value={name}  placeholder='..........................' className='p-inputtext-sm' />
                <Button icon="pi pi-pencil" className="p-button-sm  p-button-secondary" onClick={() => onClick('displayBasic')} />
              </div>
            </div>
          </div>

          <hr className='border-dashed border-400 my-6' />

          <h2 className='text-900'>Fund House Description</h2>
          <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
          <div className='mb-4 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's</div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Name</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <InputText value={name}  className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
            </div>
          </div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Address</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <InputText value={name}  className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
            </div>
          </div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Email</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <InputText value={name}  className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
            </div>
          </div>

          <div className="p-field p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 pl-1 font-semibold text-800">Website</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <InputText value={name}  className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full' />
            </div>
          </div>

          <div className="p-grid p-0 m-0">
            <label className="lg:col-2 lg:col-2 p-0 m-0 col-12 lg:pt-3 md:pt-3 pl-1 font-semibold text-800">Description</label>
            <div className="lg:col-10 lg:col-10 p-0 m-0 col-12">
              <InputTextarea value={desc}  className='p-inputtext-sm my-2 lg:w-24rem md:w-24rem w-full h-8rem' />
              <div className='text-right'>{desc.length}/30</div>
            </div>
          </div>





          <Dialog className='w-20rem' header="Change picture" visible={displayBasic3} onHide={() => onHide('displayBasic3')}>
            <div>
              <div className="flex justify-content-center">
                <img alt="not fount" className='imagecircletrial' src={img1} />
                <br />
              </div>
              <div className="flex justify-content-center mt-2">

                <Button className="p-button-sm p-button-secondary py-2 px-2" style={{ "position": "relative", "overflow": "hidden" }}>
                  Select File
                  <InputText type="file"
                    name="myImage"
                    accept="image/*"
                    style={{ "position": "absolute", "opacity": "0", "top": "0", "right": "0" }} />
                </Button>
              </div>
              <br />
              <div className='text-center'>
                <Button className='p-button-sm ' label="Submit" />
              </div>
            </div>

          </Dialog>

          <div className='mt-2 lg:mb-6 md:mb-6 mb-3'>
            {/* <Button className='p-button p-button-sm p-button-secondary py-2 px-2 mr-1' label="Change Email" onClick={() => onClick('displayBasic2')} />
            <Button className='p-button p-button-sm p-button-secondary py-2 px-2 mr-1' label="Change Password" onClick={() => onClick('displayBasic')} /> <br /> */}
            <div className='text-right'><Button icon="pi pi-save" label="Save" className='p-button p-button-sm' /></div>
          </div>

        </div>
      </div>



      {/* <Dialog header="Change password" className='w-24rem' visible={displayBasic} onHide={() => onHide('displayBasic')}>
        <InputText type="password" placeholder='Current Password' className=' p-inputtext p-inputtext-sm w-full mb-2' /><br />
        <InputText type="password" placeholder='New Password' className=' p-inputtext p-inputtext-sm w-full mb-2' /><br />
        <div className='text-right'><Button className='p-button p-button-sm' label="Submit" onClick={() => onHide('displayBasic')} /></div>
      </Dialog>
       */}

<Dialog header="Change password" className='w-24rem border-round text-sm surface-600' visible={displayBasic} onHide={() => onHide('displayBasic')}>
            <span className="p-float-label mt-4">
              <InputText type="password" className=' p-inputtext p-inputtext-sm w-full' />
              <label htmlFor="in">Enter current password</label>
            </span>
            <small id="username2-help" className="p-error block">This is error</small>
            <span className="p-float-label mt-4">
              <InputText type="password" className=' p-inputtext p-inputtext-sm w-full' /><br />
              <label htmlFor="in">Enter new password</label>
            </span>
            <small id="username2-help" className="p-error block">This is error</small>
            <div className='text-right'><Button className='p-button p-button-sm' label="Submit" /></div>
          </Dialog>
      <Dialog header="Change Email-ID" className='w-24rem' visible={displayBasic2} onHide={() => onHide('displayBasic2')}>
        {step === '1' ?
          <div>
            <span className="p-float-label">
              <InputText type="password" className=' p-inputtext p-inputtext-sm w-full mb-1' /><br />
              <label htmlFor="in">Enter password</label>
            </span>

            <small id="username2-help" className="p-error block">This is error</small>

            <br />
            <span className="p-float-label">
              <InputText className='p-inputtext p-inputtext-sm w-full mb-1' /><br />
              <label htmlFor="in">Enter new Email-ID</label>
            </span>

            <small id="username2-help" className="p-error block">This is error</small>

            <br />
            <div className='text-right'><Button className='p-button p-button-sm' /></div>
          </div>
          : step === '2' ?
            <div>
              <span className="p-float-label">
                <InputText type="password" className='p-inputtext p-inputtext-sm w-full mb-1' /><br />
                <label htmlFor="in">Enter 4 digit OTP</label>
              </span>

              <small id="username2-help" className="p-error block">This is error</small>

              <br />
              <div className='text-right'><Button className='p-button p-button-sm' label="Submit" /></div>
            </div>
            : null
        }
      </Dialog>

    </>
  )




}

export default ManagerSettings