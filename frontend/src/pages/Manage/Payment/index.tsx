import "./index.less"

const Payment:React.FC = () => {
  return (
    <div className="payment">
      <div className="payment-header width-10 height-sm">

        <div className="txt-message">
          <h3>本月未超支</h3>
          <span>请继续保持</span>
        </div>
        
        <div className="payment-filter">
          <select>
            <option>本月</option>
            <option>本季度</option>
          </select>
        </div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm">
          <h3>总收入</h3>
        </div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm">
          <h3>总支出</h3>
        </div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm"></div>
      </div>

      <div className="bg-card width-6">
        <div className="card-content height-normal">
          <h3>最近收支变化</h3>
        </div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-normal">
          <h3>支出饼图</h3>
        </div>
      </div>

      <div className="bg-card width-10">
        <div className="card-content payment-list"></div>
      </div>

    </div>
  )
}

export default Payment;