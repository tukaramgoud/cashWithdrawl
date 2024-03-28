// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  checkAmount = rupees => {
    this.setState(pervState => ({amount: pervState.amount - rupees}))
  }

  render() {
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="sarah-name-container">
            <h1 className="s-styling">s</h1>
            <p className="sarah-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <h1 className="rs-in-digits">{amount}</h1>
              <p className="rs-in-words">In Rupees</p>
            </div>
          </div>

          <p className="sarah-name">Withdraw</p>
          <p className="balance-heading-2">CHOOSE SUM (IN RUPEES)</p>
          <DenominationItem withDraw={this.checkAmount} />
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
