import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import FundAccess from './FundAccess';
import FundHouse from './FundHouse';
import InvestorAccess from './InvestorAccess';
import ManagerSettings from './ManagerSettings'

const ProfileSettings = () => {
  const [option, setOption] = useState(1);

  return (
    <>



      {/* <div className="grid p-0">
            <div className="col-12 lg:col-6 md:col-6 flex align-items-center">
              <div className="p-mr-1 lg:block md:block sm:block hidden ">
                <button class="p-button bg-indigo-400 p-component p-button-rounded ps-buttonCustom p-button-icon-only">
                  <img alt='Test' className='ps-customImg' src='./images/plutus/dummy-icon.png' />
                </button>
              </div>
              <div className='lg:block md:block sm:block hidden '>
                <strong className='text-lg text-sm text-600 font-semibold'>0x2d74c87461F08b0914fcC5... </strong><br />
                <a className='text-sm' href='#'>address@gmail.com</a> <i className="pi pi-pencil"></i>
              </div>
              <div>
              </div>
            </div>

            <div className="p-col-6 text-right lg:block md:block sm:block hidden ">
              <div className="card-container p-0 py-3">
                <div className="inline p-input-icon-right">
                  <InputText placeholder='Search Tokens' className='p-inputtext ps-inputtext-custom surface-100 p-inputtext-sm p-ml-1 text-sm' />
                  <i className="pi pi-search" />
                </div>
              </div>
            </div>
          </div> */}

      {/* For mobile device---------------- */}

      <div className='p-grid p-0 m-0 lg:mr-6 md:mr-6 '>
        <div className="col-12 lg:col-3 md:col-3 m-0 p-0 shadow-2">
          <div className='ps-fixed-col'>
          <div className='pl-4'>
            <h2 className='text-900 pt-0'>Settings</h2>
          </div>

          <div onClick={() => setOption(1)} className={"transition-duration-300 cursor-pointer "+(option===1 ? 'ps-setting-box' : 'ps-setting-box-white') }>
            <div className='flex'>
              <div className='mr-3 mt-1'>
                <img alt='Manager Settings' src='./images/setting/manager_setting.png' style={{ width: "20px" }} />
              </div>
              <div>
                <div className='text-lg font-medium text-900'>Manager Settings</div>
                <div className='text-sm'>Manager can change details about his personal profile</div>
              </div>
            </div>
          </div>

          <div onClick={() => setOption(2)} className={"transition-duration-300 cursor-pointer "+(option===2 ? 'ps-setting-box' : 'ps-setting-box-white') }>
            <div className='flex'>
              <div className='mr-3 mt-1'>
                <img alt='Manager Settings' src='./images/setting/InvestorAccess_icon.png' style={{ width: "21px" }} />
              </div>
              <div>
                <div className='text-lg font-medium text-900'>Investor Access</div>
                <div className='text-sm'>Manager can add/remove investors from his fund</div>
              </div>
            </div>
          </div>

          <div onClick={() => setOption(3)} className={"transition-duration-300 cursor-pointer "+(option===3 ? 'ps-setting-box' : 'ps-setting-box-white') }>
            <div className='flex'>
              <div className='mr-3 mt-1'>
                <img alt='Manager Settings' src='./images/setting/Fund_Access.png' style={{ width: "20px" }} />
              </div>
              <div>
                <div className='text-lg font-medium text-900'>Fund Access</div>
                <div className='text-sm'>Manager can add/remove investors from his fund</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-12 sm:col-9 lg:col-9 m-0 p-0 lg:px-0 md:px-0 px-3">

          <div className='mt-2'>
            {(option === 1) && (<div ><ManagerSettings /></div>)}
            {(option === 2) && (<div ><InvestorAccess /></div>)}
            {(option === 3) && (<div ><FundAccess /></div>)}
            {(option === 4) && (<div><FundHouse /></div>)}
          </div>

        </div>

      </div>

    </>
  )
}

export default ProfileSettings