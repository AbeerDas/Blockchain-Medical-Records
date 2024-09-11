import './App.css';

import { useEffect } from 'react';
import { loadProvider, loadNetwork } from './store/interactions';
import { useDispatch } from "react-redux"
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    console.log(provider)
  }
  useEffect(() => {
    loadBlockchainData();
  });
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
