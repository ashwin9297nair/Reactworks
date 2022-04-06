import { Card } from 'primereact/card';
import React, { Component } from 'react';
// import Moralis from 'moralis';
// import Web3 from 'web3';
import axios from 'axios';
import _, { add } from 'lodash';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabPanel, TabView } from 'primereact/tabview';
import { Divider } from 'primereact/divider';
import { Checkbox } from 'primereact/checkbox';
// import { ethers } from 'ethers';

// Moralis.start({
//   serverUrl: 'https://kz6gugt8lfij.usemoralis.com:2053/server',
//   appId: 'MEoK7FwOuiRN4pTMQbSBOrDfvD29XvGqfu8avXDA',
// });

// const web3 = new Web3(window.web3.currentProvider);

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chain: null,
      address: null,
      amount1: null,
      value1: null,
      tokenlist: [],
      tokenAddress: null,
      authentication: false,
      disable: false,
      errMsg: '',
      showError: false,
      decimal: null
    };
  }
  componentDidMount = async () => {
    // Moralis.enableWeb3()
    // Moralis.authenticate().then(async (user) => {
    //   if (user) {
    //     this.setState({ authentication: true });
    //   }
    // });
    // const web3 = new Web3(window.web3.currentProvider);




  };

  // send = async (event) => {
  //   if (
  //     this.state.chain !== null &&
  //     (this.state.tokenAddress !== null && this.state.tokenAddress !== undefined) &&
  //     (this.state.value1 !== null && this.state.value1 !== '') &&
  //     (this.state.amount1 !== null && this.state.amount1 !== '')
  //   ) {

  //     if (this.state.amount1 <= this.state.tokenAddress.balance) {
  //       const web3 = new Web3(window.web3.currentProvider);
  //       const userAddress = window.localStorage.getItem('publicAddress');
  //       console.log(userAddress)

  //       this.setState({ disable: false });
  //       event.preventDefault();
  //       console.log(this.state.tokenAddress)

  //       let tokenAddress = this.state.tokenAddress;
  //       console.log(this.state.tokenAddress)
  //       console.log(tokenAddress)
  //       let toAddress = this.state.value1;

  //       let fromAddress = userAddress;
  //       // Use BigNumber
  //       let decimals = web3.utils.toBN(this.state.decimal);

  //       let amount = (this.state.amount1);
  //       console.log(amount)
  //       let minABI = [
  //         // transfer
  //         {
  //           "constant": false,
  //           "inputs": [
  //             {
  //               "name": "_to",
  //               "type": "address"
  //             },
  //             {
  //               "name": "_value",
  //               "type": "uint256"
  //             }
  //           ],
  //           "name": "transfer",
  //           "outputs": [
  //             {
  //               "name": "",
  //               "type": "bool"
  //             }
  //           ],
  //           "type": "function"
  //         }
  //       ];
  //       // let value = web3.utils.toBN(amount.toString() * ((10) ** (decimals)));
  //       // let value = ethers.utils.parseUnits(amount.toString(), 'gwei')
  //       // let value = web3.utils.toWei(amount.toString(), 'ether');

  //       let contract = new web3.eth.Contract(minABI, tokenAddress.code);
  //       let value = web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether'))

  //       if (tokenAddress.label === 'ETH' && tokenAddress.code === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
  //         console.log('hello')
  //         window.ethereum.request({
  //           method: 'eth_sendTransaction',
  //           chainId: "0x1",
  //           params: [
  //             {
  //               from: fromAddress,
  //               to: toAddress,
  //               value: web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
  //             }

  //           ]
  //         })
  //       } else if (tokenAddress.label === 'BNB' && tokenAddress.code === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
  //         window.ethereum.request({
  //           method: 'eth_sendTransaction',
  //           chainId: "0x38",
  //           params: [
  //             {
  //               from: fromAddress,
  //               to: toAddress,
  //               value: web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
  //             }
  //           ]
  //         })
  //       } else if (tokenAddress.label === 'AVAX' && tokenAddress.code === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
  //         window.ethereum.request({
  //           method: 'eth_sendTransaction',
  //           chainId: "0xa86a",
  //           params: [
  //             {
  //               from: fromAddress,
  //               to: toAddress,
  //               value: web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
  //             }
  //           ]
  //         })
  //       }
  //       else {

  //         try {
  //           let value = web3.utils.toBN(amount.toString() * ((10) ** (decimals)));
  //           contract.methods.transfer(toAddress, value).send({ from: fromAddress, })
  //             .on('transactionHash', function (hash) {
  //               console.log(hash);
  //             });
  //         } catch {
  //           let value = web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether'));
  //           contract.methods.transfer(toAddress, value).send({ from: fromAddress, })
  //             .on('transactionHash', function (hash) {
  //               console.log(hash);
  //             });
  //         }


  //       }



  //     } else {
  //       this.setState({ disable: true, showError: true });
  //     }
  //   }




  //   // if (this.state.chain == null) {
  //   //   this.setState({ errMsg: 'Please Select a Chain' });
  //   // }
  //   // if (this.state.value1 == null) {
  //   //   this.setState({ errMsg: 'Please enter the Address' });
  //   // }
  //   // if (this.state.tokenAddress == null) {
  //   //   this.setState({ errMsg: 'Please enter the Address' });
  //   // }
  //   // if (this.state.amount1 == null) {
  //   //   this.setState({ errMsg: 'Please enter a Amount' });
  //   // }


  // };

  itemTemplate = (option) => {
    return (
      <div className="flex justify-content-between">
        <div className="flex">
          <img src={option.img} className="h-1rem w-1rem mr-1" />
          <div className='p-dropdown-filter'>{option.label}</div>
        </div>
        <div className="text-right">{option.balance}</div>
      </div>
    );
  };

  handleChain = async (e) => {
    this.setState({ disable: false });

    const defaultAddress = window.localStorage.getItem('publicAddress');


    console.log(e.target.value);
    if (e.target.value.code == 'eth') {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
      });
      this.setState({
        chain: e.target.value,
        amount1: '',
        amount2: '',
      });
      const a = [];

      const list = await axios.get(
        'https://api.1inch.exchange/v3.0/1/tokens' //56bin //137pol
      );
      const listOfTokens = _.values(list.data.tokens);
      console.log(listOfTokens);
      listOfTokens.map((value, index, array) => {
        const data = {
          label: array[index].symbol,
          code: array[index].address,
          img: array[index].logoURI,
          decimal: array[index].decimals,
        };
        a.push(data);
      });
      console.log(a);



      const userTokens = await axios.get(`https://api.covalenthq.com/v1/1/address/0x4cd202065e25ae7deb768d1e85739459e6e1af68/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_f4e3ad4d6ace494d80f2020cc49`)
      const userData = userTokens.data.data.items


      const finalData = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < userData.length; j++) {
          if (a[i].code == userData[j].contract_address && userData[j].balance !== "0") {
            const tokenData = {
              label: a[i].label,
              code: a[i].code,
              img: a[i].img,
              decimal: a[i].decimal,
              balance: userData[j].balance / 10 ** userData[j].contract_decimals
            };
            finalData.push(tokenData)
          }
        }

      }
      console.log(finalData);


      this.setState({ tokenlist: finalData });
    }
    if (e.target.value.code == 'matic') {
      this.setState({ chain: e.target.value, amount1: '', amount2: '' });
      if (window.ethereum) {
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x89',
                    rpcUrls: ['https://polygon-rpc.com/'],
                    chainName: 'Matic Mainnet',
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
        );
      }

      const a = [];

      const list = await axios.get(
        'https://api.1inch.exchange/v3.0/137/tokens' //56bin //137pol
      );
      const listOfTokens = _.values(list.data.tokens);
      console.log(listOfTokens);
      listOfTokens.map((value, index, array) => {
        const data = {
          label: array[index].symbol,
          code: array[index].address,
          img: array[index].logoURI,
          decimal: array[index].decimals,
        };
        a.push(data);
      });

      console.log(a[0].decimal)

      a.map((item, index, array) => {
        if (array[index].code == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
          array[index].code = '0x0000000000000000000000000000000000001010'
        }
      })

      const userTokens = await axios.get(`https://api.covalenthq.com/v1/137/address/0x4cd202065e25ae7deb768d1e85739459e6e1af68/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_f4e3ad4d6ace494d80f2020cc49`)
      const userData = userTokens.data.data.items

      const finalData = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < userData.length; j++) {
          if (a[i].code == userData[j].contract_address && userData[j].balance !== "0") {
            const tokenData = {
              label: a[i].label,
              code: a[i].code,
              img: a[i].img,
              decimal: a[i].decimal,
              balance: userData[j].balance / 10 ** userData[j].contract_decimals
            };
            finalData.push(tokenData)
          }
        }

      }
      console.log(finalData);


      this.setState({ tokenlist: finalData });
    }
    if (e.target.value.code == 'bsc') {
      this.setState({ chain: e.target.value, amount1: '', amount2: '' });

      if (window.ethereum) {
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          console.log(error);
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code == '4902') {
            console.log('hello');
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x38',
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    chainName: 'Binance Smart Chain BSC',
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
        );
      }

      const a = [];

      const list = await axios.get(
        'https://api.1inch.exchange/v3.0/56/tokens' //56bin //137pol
      );
      const listOfTokens = _.values(list.data.tokens);
      console.log(listOfTokens);
      listOfTokens.map((value, index, array) => {
        const data = {
          label: array[index].symbol,
          code: array[index].address,
          img: array[index].logoURI,
          decimal: array[index].decimals,
        };
        a.push(data);
      });
      console.log(a);

      const userTokens = await axios.get(`https://api.covalenthq.com/v1/56/address/0x4cd202065e25ae7deb768d1e85739459e6e1af68/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_f4e3ad4d6ace494d80f2020cc49`)
      const userData = userTokens.data.data.items

      const finalData = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < userData.length; j++) {
          if (a[i].code == userData[j].contract_address && userData[j].balance !== "0") {
            const tokenData = {
              label: a[i].label,
              code: a[i].code,
              img: a[i].img,
              decimal: a[i].decimal,
              balance: userData[j].balance / 10 ** userData[j].contract_decimals
            };
            finalData.push(tokenData)
          }
        }

      }
      console.log(finalData);


      this.setState({ tokenlist: finalData });

    }
    if (e.target.value.code == 'avax') {
      this.setState({ chain: e.target.value, amount1: '', amount2: '' });

      if (window.ethereum) {
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xa86a' }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          console.log(error);
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code == '4902') {
            console.log('hello');
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xa86a',
                    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                    chainName: 'Avalanche Mainnet',
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
        );
      }

      const list = await axios.get(
        'https://api.1inch.io/v4.0/43114/tokens' //56bin //137pol
      );

      const listOfTokens = _.values(list.data.tokens);
      const a = []
      console.log(listOfTokens);
      listOfTokens.map((value, index, array) => {
        const data = {
          label: array[index].symbol,
          code: array[index].address,
          img: array[index].logoURI,
          decimal: array[index].decimals,
        };
        a.push(data);
      });

      const userTokens = await axios.get(`https://api.covalenthq.com/v1/43114/address/0x4cd202065e25ae7deb768d1e85739459e6e1af68/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_f4e3ad4d6ace494d80f2020cc49`)
      const userData = userTokens.data.data.items

      const finalData = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < userData.length; j++) {
          if (a[i].code == userData[j].contract_address && userData[j].balance !== "0") {
            const tokenData = {
              label: a[i].label,
              code: a[i].code,
              img: a[i].img,
              decimal: a[i].decimal,
              balance: userData[j].balance / 10 ** userData[j].contract_decimals
            };
            finalData.push(tokenData)
          }
        }

      }
      console.log(finalData);


      this.setState({ tokenlist: finalData });

    }

    if (e.target.value.code == 'arb') {
      this.setState({ chain: e.target.value, amount1: '', amount2: '' });

      if (window.ethereum) {
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xa4b1' }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          console.log(error);
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code == '4902') {

            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xa4b1',
                    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
                    chainName: 'Arbitrum Mainnet',
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
        );
      }

      const list = await axios.get(
        'https://api.1inch.io/v4.0/42161/tokens'//56bin //137pol
      );

      const listOfTokens = _.values(list.data.tokens);
      const a = []
      console.log(listOfTokens);
      listOfTokens.map((value, index, array) => {
        const data = {
          label: array[index].symbol,
          code: array[index].address,
          img: array[index].logoURI,
          decimal: array[index].decimals,
        };
        a.push(data);
      });

      const userTokens = await axios.get(`https://api.covalenthq.com/v1/42161/address/0x4cd202065e25ae7deb768d1e85739459e6e1af68/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_f4e3ad4d6ace494d80f2020cc49`)
      const userData = userTokens.data.data.items

      const finalData = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < userData.length; j++) {
          if (a[i].code == userData[j].contract_address && userData[j].balance !== "0") {
            const tokenData = {
              label: a[i].label,
              code: a[i].code,
              img: a[i].img,
              decimal: a[i].decimal,
              balance: userData[j].balance / 10 ** userData[j].contract_decimals
            };
            finalData.push(tokenData)
          }
        }

      }
      console.log(finalData);


      this.setState({ tokenlist: finalData });


    }


  };

  handleMax = () => {
    this.setState({ amount1: this.state.tokenAddress.balance, disable: false, showError: false })
    console.log(this.state.tokenAddress);
  }

  render() {
    const defaultAddress = window.localStorage.getItem('publicAddress');

    const chain = [
      { label: 'Ethereum', code: 'eth' },
      { label: 'Polygon', code: 'matic' },
      { label: 'Binance', code: 'bsc' },
      { label: 'Avalanche', code: 'avax' },
      { label: 'Arbitrum', code: 'arb' },

    ];
    return (
      // <div className="lg:col-4 lg:col-offset-4 md-8 md:col-offset-2 sm-12 sm:col-offset-0">
      <div className='grid m-0 p-0'>
        <div className='lg:col-5 lg:col-offset-3 md-8 md:col-offset-1'>
          <div class="ps-transfer-box">
            <div className='flex align-items-center justify-content-center text-2xl font-bold text-indigo-500 p-2'>Transfer</div>
            <div className='ps-transfer-box-border'></div>
            <div className='p-4'>
              <small id="username-help" className="p-error">
                {this.state.errMsg}
              </small>
              <Dropdown
                className="inputfield w-full my-2 surface-100 p-inputtext-sm"
                options={chain}
                value={this.state.chain}
                placeholder="Network"
                onChange={(e) => this.handleChain(e)}
              />
              <br />
              {/* <span className="p-float-label my-3"> */}
              <InputText
                className="inputfield w-full my-2 surface-100 p-inputtext-sm"
                id="inputtext"
                placeholder="Recipient Address"
                value={this.state.value1}
                onChange={(e) =>
                  this.setState({ value1: e.target.value, disable: false })
                }
              />
              <div className='my-2'>
                <div className='ps-transfer-box p-2 surface-100'>
                  <div className='flex justify-content-between'>
                    <div className='text-xs'>Recipient</div>
                    <div className='text-xs'>0x568b5aa753bc7074544310139672afda9969cb08</div>
                  </div>
                  <div className='grid p-0 pb-0'>
                    <div className='col-10'>
                      <div className='flex align-items-center mt-2'>
                        <div>
                          <Checkbox className='p-inputtext-sm' inputId="cb1" ></Checkbox>
                        </div>
                        <div>
                          <InputText
                            className="p-inputtext-sm border-0 border-100 h-1rem w-20rem surface-100"
                            id="inputtext"
                            placeholder="Address or ENS"                           
                          />
                        </div>

                      </div>
                    </div>
                    <div className='col-2 text-right flex justify-content-end align-items-center'>
                      <i className="pi pi-wallet"></i>
                      <i className="pi pi-angle-right"></i>
                    </div>
                  </div>
                  


                </div>
              </div>
              {/* <label htmlFor="inputtext">Recipient Address</label> */}
              {/* </span> */}
              <Dropdown
                className="inputfield w-full my-2 surface-100 p-inputtext-sm"
                value={this.state.tokenAddress}
                options={this.state.tokenlist}
                onChange={(e) => {
                  this.setState({ tokenAddress: e.value, decimal: e.value.decimal, disable: false });
                }}

                placeholder="Select a Token"
                itemTemplate={this.itemTemplate}
                filter
                showClear={false}
                filterBy="label"
              />
              <div className="p-inputgroup my-2">
                <InputText
                  className="inputfield w-full surface-100 p-inputtext-sm"
                  value={this.state.amount1}
                  placeholder="0.0"
                  onChange={(e) =>
                    this.setState({ amount1: e.target.value, disable: false, showError: false })
                  }
                />
                <Button className='p-2 pr-3 pl-3' label="Max" onClick={this.handleMax} />
              </div>


              <div className='flex justify-content-between mb-4'>
                <div>
                  Plutus Free
                </div>
                <div className='text-indigo-500'>
                  $0.01% - Fast
                </div>
              </div>
              {this.state.showError && (
                <small id="username-help" className="p-error ml-3">
                  Insufficient Balance
                </small>
              )}
              <Button
                disabled={this.state.disable}
                label="Transfer"
                onClick={this.send}
                className="my-2 w-full p-button-sm text-lg"
              />

              {/* <TabPanel header="NFTs">
              Coming Soon */}
              {/* <InputText
                className="inputfield w-full my-2"
                value="Ethereum"
                disabled
              />
              <br />
              <span className="p-float-label">
                <InputText
                  className="inputfield w-full my-2"
                  id="inputtext"
                  value={this.state.value1}
                  onChange={(e) => this.setState({ value1: e.target.value })}
                />
                <label htmlFor="inputtext">Recipient Address</label>
              </span>
              <div className="flex justify-content-evenly my-2">
                <InputText className="w-full" />
              </div>
              <Button label="Send" className="my-2 w-full" /> */}
              {/* </TabPanel>
          </TabView> */}
            </div>












          </div>
        </div>
      </div>



      // </div>
    );
  }
}
