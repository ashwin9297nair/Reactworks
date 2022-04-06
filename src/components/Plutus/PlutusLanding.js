import React from 'react';

const PlutusLanding = () => {
  return (
    <>
      <div className='content01 mb-2'>
        <div style={{ backgroundColor: '#fff', padding: '0' }} className='p-0 m-0'>
          <div className='grid p-0 m-0'>
            <div className='p-col-12 p-md-6 p-lg-4'>
              <div className='ml-3 pr-3 lg:ml-6 lg:pr-6'>
                <img className='brandLogo-img' src='./images/brandNameIndigo.png' />
              </div>
            </div>

            {/* <div className='p-col-12 p-md-6 p-lg-4'>
            </div> */}
          </div>
        </div>

        <div className='ml-3 pr-3 lg:ml-6 lg:pr-6'>
          <div className='grid flex align-items-center p-0 m-0 p-dir-rev'>
          <div className='p-col-12 p-md-7 p-lg-7 text-right'>
              <img className='landing-img' alt='All Brands' src='./images/all_logo_designs.jpg' />
            </div>
            <div className='p-col-12 p-md-5 p-lg-5'>
              <div className='flex align-items-center'>
                <div><img className='w-5rem lg:w-6rem' alt='All Brands' src='./images/one_stop_crypto.png' /></div>
                <div className='border-round text-2xl md:text-3xl font-medium uppercase text-800 text-left ml-2'>Investment</div>
              </div>
              <h1 className='text-4xl lg:text-6xl text-900 font-normal'>Cefi, Defi, NFT and more from one place</h1>
              <p className='text-xl lg:text-2xl text-indigo-700 font-normal mb-6'>
                Web3AssetManager aggregates your crypto investment and provides investment opportunities across platforms
              </p>
              <button class="p-button p-button-sm mr-2">
                <span class="p-button-label p-c font-light">MetaMask </span>
              </button>
              <button class="p-button p-button-sm">
                <span class="p-button-label p-c font-light">Wallet Connect</span>
              </button>
            </div>

            
          </div>

        </div>
      </div>
      <div class="col-12 border-bottom-1 border-200"></div>
      <div className='mt-1 ml-3 pr-3 lg:ml-6 lg:pr-6'>
        <div className='grid p-0 m-0 pb-3 flex align-items-center'>
          <div className='p-col-12 p-md-6 p-lg-6 md:flex align-items-center text-center text-sm'>
            <div>
              <a className='p-2' href='#'>About</a>
              <a className='p-2' href='#'>Docs</a>
              <a className='p-2' href='#'>Privacy</a>
              <a className='p-2' href='#'>Terms</a>
            </div>

            <div className='mt-2'>
              <span><img className='mr-1' style={{ width: '24px' }} alt='Discort' src='./images/plutus/discort.png' /></span>
              <span><img className='mr-1' style={{ width: '24px' }} alt='Twitter' src='./images/plutus/twitter.png' /></span>
              <span><img className='mr-1' style={{ width: '24px' }} alt='Linkedin' src='./images/plutus/linkedin.png' /></span>
              <span><img className='mr-1' style={{ width: '24px' }} alt='Telegram' src='./images/plutus/telegram_icon.png' /></span>
              <span><img className='mr-1' style={{ width: '24px' }} alt='Telegram' src='./images/plutus/medium_icon.png' /></span>
            </div>

          </div>
          <div className='p-col-12 p-md-6 p-lg-6 md:text-right text-center'>
            <div className='text-base'>©2022 by PrideVel Business Solutions LLC.</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PlutusLanding;