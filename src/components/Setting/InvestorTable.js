import React, { useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
// import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

// import './DataTableDemo.css';


const InvestorTable = (props) => {
    console.log(props.data, 'pops')

    let emptyProduct = {
        email: '',
        name: '',
    };


    const [products, setProducts] = useState('');
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [position, setPosition] = useState('center');

  const [displayBasic, setDisplayBasic] = useState(false);

  const dialogFuncMap = {
    'displayBasic': setDisplayBasic,
  

  }

    useEffect(() => {
        setProducts(props.data)
    }, [props]);


    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = async () => {
        let _products = products.filter(val => val.email !== product.email);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });

    }

    const actionBodyTemplate = (rowData) => {
        console.log(rowData, 'rowData')
        return (
            <React.Fragment>
                <div className='text-right'>
                    <Button icon="pi pi-pencil" className='p-button p-button-sm p-button-secondary py-2 px-2 mr-1' onClick={() => onClick('displayBasic')}  />
                    <Button icon="pi pi-trash" className="p-button-sm py-2 px-2 p-button-danger" onClick={() => confirmDeleteProduct(rowData)} />
                </div>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header flex align-items-center justify-content-between">
            <div className="lg:text-lg lg:font-normal md:text-lg md:font-normal">Manage Products</div>
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText className='p-inputtext-sm pt-2 pb-2 w-12rem' type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>
        </div>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button p-button-sm py-2 px-2 mb-3" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-danger p-button-sm py-2 px-2 mb-3" onClick={deleteProduct} />
        </React.Fragment>
    );
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
        <div className="datatable-crud-demo">
            <Toast ref={toast} />
            <DataTable ref={dt} value={products} selection={selectedProducts} className='p-datatable-sm text-sm mt-3'
                dataKey="email" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column> */}
                <Column field="email" header="Code" sortable ></Column>
                <Column field="name" header="Name" sortable ></Column>
                <Column body={actionBodyTemplate} exportable={false} ></Column>
            </DataTable>


            <Dialog visible={deleteProductDialog} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-2 text-3xl text-orange-400" />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>
            <Dialog header="Change password" className='w-24rem' visible={displayBasic} onHide={() => onHide('displayBasic')}>
                <span className="p-float-label">
                    <InputText className=' p-inputtext p-inputtext-sm w-full mb-2' /><br />
                    <label htmlFor="in">Enter Wallet Address</label>
                </span>
                <small id="username2-help" className="p-error block pb-2">This is error</small>
                <br />
                <span className="p-float-label">
                    <InputText  className=' p-inputtext p-inputtext-sm w-full mb-2' /><br />
                    <label htmlFor="in">Enter Wallet name</label>
                </span>
                <br />
                <div className='text-right'><Button className='p-button p-button-sm' label="Submit" /></div>
            </Dialog>
        </div>
    );
}
export default InvestorTable


