// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="sarah-name-container">
            <h1 className="s-styling">s</h1>
            <p className="sarah-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <h1 className="balance-heading">Your Balance</h1>
            <div>
              <h1 className="rs-in-digits"> 2000</h1>
              <p className="rs-in-words">In Rupees</p>
            </div>
          </div>

          <h1 className="sarah-name">Withdraw</h1>
          <p className="balance-heading-2">CHOOSE SUM (IN RUPEES)</p>
          <div>
            <button type="button" className="button">
              50
            </button>
            <button type="button" className="button">
              100
            </button>
            <button type="button" className="button">
              200
            </button>
            <button type="button" className="button">
              500
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
