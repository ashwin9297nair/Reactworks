import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import img1 from '../../assets/profile.png'
import { Dialog } from 'primereact/dialog';

const ManagerSettings = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [desc, setDesc] = useState('');
    const [position, setPosition] = useState('center');
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayBasic3, setDisplayBasic3] = useState(false);
    
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

    return (
        <>
            <div className='lg:w-30rem md:w-30rem w-21rem mb-6'>
                <h2 className='text-900'>Manager Settings</h2>
                <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
                <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's</div>
            </div>
            <div></div>
            <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
           
            <div className='flex align-items-center justify-content-start'>
                <div className='mr-4 '>
                        <img src={img1} className='imagecircle' /> 
 
                </div>
                <div className='mr-4'>
                    <Button label="Change picture" className='p-button p-button-sm p-button-secondary py-2 px-2' onClick={() => onClick('displayBasic3')} />
                </div>
                <Dialog header="Change picture" visible={displayBasic3} style={{ width: '50vw' }} onHide={() => onHide('displayBasic3')}>
                    <div >

                        <div className="flex justify-content-center mt-2">
                            <button class="file btn-primary p-button ps-custom-button-1 p-component p-button-sm mr-1" style={{ "position": "relative", "overflow": "hidden" }}>
                                Upload File
                                <InputText type="file"
                                    name="myImage"
                                    accept="image/*"
                                    style={{ "position": "absolute", "opacity": "0", "top": "0", "right": "0" }} />
                            </button>
                        </div>
                        <br />

                    </div>
                    <Button  label="Submit" />
                </Dialog>
            </div>

            <br></br>
            <Button className='p-button p-button-sm' label="Change Email" onClick={() => onClick('displayBasic2')} />
            <br></br>
            <Button className='p-button p-button-sm' label="Change Password" onClick={() => onClick('displayBasic')} />
            <Dialog header="Change password" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
                <small  >Enter your current password</small><br />
                <InputText type="password" placeholder='Current Password' className=' p-inputtext p-inputtext-sm w-7' /><br />
                <br />
                <small  >Enter your new password</small><br />
                <InputText type="password"  placeholder='New Password' className=' p-inputtext p-inputtext-sm w-7' /><br />
                <br />
                <Button className='p-button p-button-sm' label="Submit"  />
            </Dialog>
            <br></br>
    
          

            <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
                <Button icon="pi pi-save" label="Save" className='p-button p-button-sm py-2 px-2' />
            </div>




        </>
    )




}

export default ManagerSettings