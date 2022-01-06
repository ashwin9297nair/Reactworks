import React from 'react'
import 'primeflex/primeflex.css';
// import { Link } from "react-router-dom";

const Banner = () => {
 return (
  <>
   <div id="feedbackbutton">
    <a href='#' class="feedback">Feedback <i className="pi pi-user-edit"></i></a>
   </div>

   <div className="p-grid p-pt-0 p-m-0" style={{ backgroundColor: '#fef5ee' }}>
    <div className="p-col-12 p-md-4 p-lg-4 p-pl-6 p-col-align-center">
     <h3 style={{ color: '#d61f1f' }}>Twilio Customer Engagement Platform</h3>
     <h1 className='text-indigo-800 text-5xl'>Intelligent customer engagement—at scale</h1>
     <p className='text-600'>Twilio powers personalized interactions and trusted global communications to connect you with customers.</p>
     <button className="p-button p-component p-button-sm"><span class="p-button-icon-right pi pi-arrow-right"></span>Sign up and start building</button>
     <p><a href=''>Talk to sales</a></p>

    </div>
    <div className="p-col-12 p-md-8 p-lg-8"><img className='imgCustom' src='./images/banner_pic.jpeg' /></div>
   </div>

   <div className="p-grid p-p-0 p-m-0 ">
    <div className="p-col-12 p-md-10 p-lg-10 p-md-offset-1 p-lg-offset-1">
    <div className='custom-position-size'>
    <div className="p-grid p-p-0 p-m-0 p-shadow-3">
     <div className="p-col-12 p-md-3 p-lg-3 p-col-align-center"><img className='imgCustom' src='images/illustration-idc-promo.original.png' /></div>
     <div className="p-col-12 p-md-7 p-lg-7 p-col-align-center"><h2 style={{ color: '#030b5d' }}>Twilio #1 for Customer Data Platforms</h2>
      <p>IDC report on 2020 market share rankings for Customer Data Platforms is now available.</p></div>
     <div className="p-col-12 p-md-2 p-lg-2 p-col-align-center"> <div className='middel-align-center'><a className='custom-btn1' href='#'>Read and Report</a> </div></div>
    </div>
   </div>

    </div>
   </div>

   <br /><br />

   



  </>
 );
}

export default Banner

