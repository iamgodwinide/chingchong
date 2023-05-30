import React, {useRef, useState} from 'react'
import Mint from './components/MintButton/Mint'

function App() {
  const [accounts, setAccounts] = useState([]);

  async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });
          setAccounts(accounts);
      }
  }

  return (
    <>
      <img src="/img/—Pngtree—chinese coin_6949477.png" className='coins' alt="" srcset="" />
      <img src="/img/City-wok-guy.png" className='worker' alt="" />
      <div className="text-wrap">
        <img src="/img/$CHINGCHONG.png" className='text1' alt="" />
        <img src="/img/$清衝.png" className='text2' alt="" />
        <div className="mint-wrap">
        <Mint accounts={accounts} setAccounts={setAccounts}/>
      </div>
      </div>
      <nav>
        <ul>
        <a href="https://twitter.com/chingchongerc">
            <img src="/img/twitter.png" className='twitter' alt="" />
          </a>
          <a href="https://t.me/chingchongcoin">
            <img src="/img/telegram.png" alt="" />
          </a>
        </ul>
      </nav>
    </>
  )
}

export default App