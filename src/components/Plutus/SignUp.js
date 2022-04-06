import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProductService } from '../services/ProductCarouselService';
import './CarouselDemo.css';

const SignUp = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    // {
    //  breakpoint: '1024px',
    //  numVisible: 3,
    //  numScroll: 3
    // },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const productService = new ProductService();
  useEffect(() => {
    productService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-3">
            <img src={`showcase/demo/images/product/${product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
          </div>
          <div>
            <h4 className="p-mb-1">{product.name}</h4>
            <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
            <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
            <div className="car-buttons p-mt-5">
              <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
              <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded p-mr-2" />
              <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (

    <>
      <div className="p-grid p-0 m-0 mt-5 p-6 flex align-items-center justify-content-center">
        <div className="p-col-10 p-0 m-0 p-offset-2 p-shadow-3 border-round">
          <div className='p-grid p-0 m-0 flex ps-height-signin-signup'>
            <div className="p-col-12 p-md-6 p-lg-6 bg-indigo-500 ps-border-left flex align-items-center justify-content-center">
              <div className="carousel-demo">
                <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions}
                  itemTemplate={productTemplate} />
              </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-6 pl-4 flex align-items-center sm:justify-content-center lg:justify-content-start">
              <div className='lg:ml-6  sm:mb-3'>
                <h2 className='text-indigo-500'>Sign Up</h2>
                <div>
                  <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Email" /><br />
                  <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Password" /><br />
                  <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Fundhouse" />
                  <Button className="my-2 w-full p-button-sm text-sm" label="Next" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp