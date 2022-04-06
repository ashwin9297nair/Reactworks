import React, { Component } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { axios } from 'primereact/axios'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import history from '../services/history.json'


class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: history,
            copied: false,
            saveBtnTooltipText: '',
            globalFilter: ''
        }
    }


    showSuccess() {
        this.toast.show({
            severity: 'success',
            summary: 'Copied!',
            detail: '',
            life: 1500,
        });
    }

    columnOne = (e) => {
        return (
            <div>
                <div className='font-bold'>{e.date.split(',')[0]}</div>
                <div>
                    <div>{e.hash.slice(0, 6)}...{e.hash.slice(63)}
                        <CopyToClipboard text={e.hash} onCopy={() => this.setState({ copied: true })}>
                            <i style={{ cursor: 'pointer' }} className="pi pi-copy ml-1 mt-1 text-sm" tooltip={this.state.saveBtnTooltipText}
                                onClick={() => {
                                    this.setState({ saveBtnTooltipText: 'Copied!' });
                                    this.showSuccess();
                                }} ></i>
                        </CopyToClipboard>
                    </div>
                    <small>{e.network.toUpperCase()}</small>
                </div>
            </div>
        )
    }

    columnTwo = (e) => {
        if (e.type === "Send") {
            return (
                <div>
                    <div>
                        <div className='flex'>
                            <div className='mr-1 mt-1 font-bold text-sm'>{e.type}</div>
                            <div className='pi pi-arrow-circle-right mt-1'></div>
                        </div>
                        <div className='text-left'>{e.address.slice(0, 6)}...{e.address.slice(38)}
                            <CopyToClipboard text={e.address} onCopy={() => this.setState({ copied: true })}>
                                <i style={{ cursor: 'pointer' }} className="pi pi-copy ml-1 mt-1 text-sm" tooltip={this.state.saveBtnTooltipText}
                                    onClick={() => {
                                        this.setState({ saveBtnTooltipText: 'Copied!' });
                                        this.showSuccess();
                                    }} ></i>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            )
        }
        else if (e.type === "Receive") {
            return (
                <div>
                    <div>
                        <div className='flex'>
                            <div className='mr-1 mt-1 font-bold text-sm'>{e.type}</div>
                            <div className='pi pi-arrow-circle-left mt-1'></div>
                        </div>
                        <div className='text-left'>{e.address.slice(0, 6)}...{e.address.slice(38)}
                            <CopyToClipboard text={e.address} onCopy={() => this.setState({ copied: true })}>
                                <i style={{ cursor: 'pointer' }} className="pi pi-copy ml-1 mt-1 text-sm" tooltip={this.state.saveBtnTooltipText}
                                    onClick={() => {
                                        this.setState({ saveBtnTooltipText: 'Copied!' });
                                        this.showSuccess();
                                    }} ></i>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            )
        }
        else if (e.type === "Exchange") {
            return (
                <div>
                    <div>
                        <div className='flex'>
                            <div className='mr-1 mt-1 font-bold text-sm'>{e.type}</div>
                            <div className='pi pi-arrows-h mt-1'></div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    columnThree = (e) => {
        if (e.type === "Send") {
            return (
                <div>
                    <div className='flex'>
                        <div className='mr-1'>{e.amount.toFixed(4)}</div>
                        <div>{e.coin}</div>
                    </div>
                </div>
            )
        }
        else if (e.type === "Receive") {
            return (
                <div>
                    <div className='flex'>
                        <div className='mr-1'>{e.amount.toFixed(4)}</div>
                        <div>{e.coin}</div>
                    </div>
                </div>
            )
        }
        else if (e.type === "Exchange") {
            return (
                <div>
                    <div>
                        <div className='flex'>
                            <div className='mr-1'>+{e.amount1.toFixed(4)}</div>
                            <div>{e.coin1}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-1'>{e.amount2.toFixed(4)}</div>
                            <div>{e.coin2}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    columnFour = (e) => {
        if (e.type === "Send") {
            return (
                <div>
                    <div className='flex'>
                        <div className='mr-1'>Gas Fee: </div>
                        <div>{e.gas.toFixed(4)}</div>
                    </div>
                </div>
            )
        }
        else if (e.type === "Exchange") {
            return (
                <div>
                    <div className='flex'>
                        <div className='mr-1'>Gas Fee: </div>
                        <div>{e.gas.toFixed(4)}</div>
                    </div>
                </div>
            )
        }
    }



    render() {
        const data = this.state.data;

        const header = (
            <div className="table-header">

                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" value={this.state.globalFilter} onChange={(e) => this.setState({ globalFilter: e.target.value })} className='text-sm' placeholder="Search by Tokenname, Date, Transaction Type..." />
                </span>
            </div>
        );

        return (
            <div>
                <Toast ref={(el) => (this.toast = el)} />
                <div className="mb-3">
                    <Button label="All Chains" onClick={() => this.setState({ globalFilter: '' })} className="p-button p-button-sm text-sm p-2 font-light mr-1" />
                    <Button label="Arbitrum" onClick={() => this.setState({ globalFilter: 'arbitrum' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                    <Button label="Avalanche" onClick={() => this.setState({ globalFilter: 'avalanche' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                    <Button label="Binance" onClick={() => this.setState({ globalFilter: 'binance' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                    <Button label="Ethereum" onClick={() => this.setState({ globalFilter: 'ethereum' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                    <Button label="Polygon" onClick={() => this.setState({ globalFilter: 'polygon' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                    <Button label="Fantom" onClick={() => this.setState({ globalFilter: 'fantom' })} className="p-button p-button-outlined p-button-sm text-sm p-2 hover:bg-indigo-100 font-light mr-1" />
                </div>
                <DataTable value={data} className='text-sm' emptyMessage="No Transactions Found" ref={(el) => this.dt = el} header={header} globalFilter={this.state.globalFilter} paginator
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}>
                    <Column field='date' className='text-sm' body={this.columnOne} />
                    <Column className='text-right' field='type' body={this.columnTwo} />
                    <Column className='text-right' field='coin' body={this.columnThree} />
                    <Column className='text-right' field='network' body={this.columnFour} />
                </DataTable>
            </div>
        )
    }
}

export default Transaction