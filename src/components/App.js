import React, { Component } from 'react';

import './App.css';

const ipfsClien = require('ipfs-http-client')
const ipfs = ipfsClien({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    buffer: null,
    fileHash:''
  };
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
      this.setState({fileHash})  
      if(error)
      {
        console.log(error);
        return;
      }  
      })
    }

  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
          >
         Save your files securely to blockchain 
          </a>
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
