import React, { Component } from "react";
import './App.css';
import { NFTStorage } from 'nft.storage';

const apiKey = process.env.REACT_APP_NFT_STORAGE_API_KEY;
const client = new NFTStorage({ token: apiKey });

class App extends Component {
  state = {
    selectedFile: null,
    cid: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = async() => {
    const cid = await client.storeBlob(this.state.selectedFile);

    this.setState({ cid });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Open PID</h1>
        </header>

        <hr />
        <h3>Choose a file</h3>

        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>
          Upload!
        </button>

        {this.state.cid}

        <hr />
      </div>
    );
  }
}

export default App;
