import React, { Component } from 'react';
import { Tooltip } from 'primereact/tooltip';
import pIcon from '../../assets/p_icon.png'

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
    }

    

    handleLogout = () => {

        this.props.history.push('/signout')

    };

    render() {

        let items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                command:
                    '/',
            },
            // { label: 'Explore on', icon: 'pi pi-th-large' },
            {
                label: 'Address Box',
                command: '/setting',
                icon: 'pi pi-box',

            },
            // {
            //   label: 'Email',
            //   icon: 'pi pi-envelope',
            //   command:
            //     '/email'

            // },
            // {
            //   label: 'NFTs',
            //   icon: 'pi pi-palette',
            //   command:
            //     '/NFTs'

            // },
            // {
            //   label: 'History',
            //   icon: 'pi pi-history',
            //   command:
            //     '/history'

            // },
            {
                label: 'CeFi',
                icon: 'pi pi-wallet',
                command: '/CeFi'
            },
            {
                label: 'Records',
                command: '/records',
                icon: 'pi pi-database',
            },
            {
                label: 'Send',
                icon: 'pi pi-send',
                command: '/send',
            },
            {
                label: 'Swap',
                icon: 'pi pi-sort-alt',
                command: '/swap',
            },
            {
                label: 'Research',
                icon: 'pi pi-chart-line',
                command: '/coinlist'
            },

        ];

        return (
            <div className="p-0 w-5rem flex flex-column fixed overflow-auto h-full"
                style={{ backgroundColor: '#f0f0f0' }}>


                <div className="text-xl font-bold text-center mb-4 mt-4" >
                    <img src={pIcon} alt='' className="w-3rem h-3rem" />
                </div>

                <div className="">

                    {items.map((item, index, array) => {
                        return (
                            <>
                                <Tooltip target=".nav-link" />
                                <div className={this.state.active == item.label ? 'nav-link text-xl text-center text-primary p-2 border-primary cursor-pointer border-y-none border-left-none border-right-3 my-2 hover:text-primary' :
                                    'nav-link text-xl text-center p-2 cursor-pointer border-y-none border-left-none my-2 hover:text-primary'}
                                    onClick={() => { this.props.history.push(item.command); this.setState({ active: item.label }) }}
                                    data-pr-tooltip={item.label} data-pr-position="right"
                                >
                                    <i className={item.icon}></i>
                                </div>

                            </>
                        )
                    })}
                    <Tooltip target=".nav-link" />
                    <div className='nav-link text-xl text-center p-2 cursor-pointer border-y-none border-left-none my-2'
                        onClick={() => this.handleLogout()}
                        style={{ color: 'red' }}
                        data-pr-tooltip='Sign Out' data-pr-position="right"
                    >
                        <i className='pi pi-sign-out'></i>
                    </div>

                    {/* onClick={() => {
                        this.setState({ active: item.label });
                        this.props.history.push(item.command);
                      }} */}


                    {/* <Button
                    label="Sign Out"
                    className="p-button-danger m-3"
                    onClick={this.handleLogout}
                  /> */}
                </div>






            </div>
        )
    }
}


export default Sidemenu;