import React, { Component } from 'react';
import Web3 from 'web3';
import BlockFile from "../abis/BlockFile.json";
//loadweb3
import './App.css';

const ipfsClien = require('ipfs-http-client')
const ipfs = ipfsClien({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component {

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockChainData();
  }

  
  async loadBlockChainData(){
    const web3 = window.web3;
    const accounts  = await web3.eth.getAccounts();

    this.setState({account:  accounts[0]})
    const networkId = await web3.eth.net.getId();
    const networkData = BlockFile.networks[networkId];
    
    if(networkData)
    {
      //fetch
      const contract = web3.eth.Contract(BlockFile.abi, networkData.address)
      this.setState({ contract })
      const fileHash = await contract.methods.get().call()
      this.setState({ fileHash })

    }
    else
    {
      window.alert('Smart contacts are not deployed to connected networks');
    }

    console.log()
  }


constructor(props){
  super(props);
  this.state = 
  {
    buffer: null,
    fileHash:''
  };
}



async loadWeb3(){
  if(window.ethereum)
  {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable();
  }
  if(window.web3)
  {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else
  {
    window.alert('Please use metamask ');
  }
} 

  captureFile = (event) =>{
    event.preventDefault()
    console.log('File is captured');
    //process file for IPFS
    const file = event.target.files[0];
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = ()=>{
      this.setState({buffer:Buffer(reader.result)});


    }
  }
    onSubmit = (event) =>{
      event.preventDefault()
      console.log('Submitting the file !!');
      ipfs.add(this.state.buffer , (error,result)=>{
        //Stuff
      console.log('IPFS result ',result);
      const fileHash = result[0].hash;
     
      if(error)
      {
        console.log(error);
        return;
      }  
      this.state.contract.methods.set(fileHash).send({from: this.state.account}).then((r)=>{
        return this.setState({fileHash})
      })
      })
    }

  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            href="#"
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
            
          >
         Save your files securely to blockchain 
          </a>
          <ul className="nabar-nav px-3">
            <li className="nav-item-text-nowrap d-none d-sm-none d-sm-block">
            <b><small>{this.state.account}</small></b>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <h2>Upload File</h2>
                <form onSubmit={this.onSubmit}>
                <input type='file' onChange={this.captureFile}/>
                <input type='submit'/>

                </form>
                <a
                  href={`https://ipfs.infura.io/ipfs/${this.state.fileHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Download File 
                </a>
                <p></p>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
