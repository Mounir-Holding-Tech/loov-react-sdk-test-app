import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import  { LoovPay,LoovPayLoadComponent }  from 'react-loovpay';




function App() {


  const [loading, setLoading] = useState(false);
  const loovPay = new LoovPay('YourAppKey', 'YourMerchantKey');
  loovPay.setLoadingCallback(setLoading);


  const handleSdkMethod = async () => {
    loovPay.startLoading();
    try {
      await loovPay.checkStatus('reference');
      loovPay.stopLoading();
    } catch (error) {
      loovPay.stopLoading();
    }
  };


  return (
    <div className="App">
      <header className="App-header mb-96">
       
            
          {loading &&  <>
            <LoovPayLoadComponent />
            <img src={logo} className="App-logo" alt="logo" />
            </>}
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleSdkMethod}>Execute SDK Check Status Method</button>
            <div className='flex flex-col my-20'>

              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
      </header>
    </div>
  );
}

export default App;
