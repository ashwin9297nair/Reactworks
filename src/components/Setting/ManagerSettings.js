import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ManagerSettings = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

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
            <div>

                <div className='flex align-items-center justify-content-start'>
                    <div className='mr-4'>
                        <img src='./images/upload_img.png' />
                    </div>
                    <div className='mr-4'>
                        <Button label="Change photo" icon="pi pi-file" className='p-button p-button-sm p-button-secondary py-2 px-2' />
                    </div>
                    <div>
                        <Button label="Remove" className='p-button font-light p-button-danger p-button-text py-2 px-2' />
                    </div>
                </div>

                {/* {selectedImage && (
                    <div>
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )} */}
                <br />
                {/* <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                /> */}
            </div>

            <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
            <InputText value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Password' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />

            <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
                <Button icon="pi pi-save" label="Save" className='p-button p-button-sm py-2 px-2' />
            </div>




        </>
    )




}

export default ManagerSettings