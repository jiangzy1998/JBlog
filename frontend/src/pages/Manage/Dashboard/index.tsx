import "./index.less"

const Dashboard:React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header width-10 height-small"></div>
      <div className="bg-card width-3">
        <div className="card-content height-small"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-small"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-small"></div>
      </div>

      <div className="bg-card width-6">
        <div className="card-content height-normal"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-normal"></div>
      </div>

      <div className="bg-card width-3">
        <div className="card-content height-normal"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-normal"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-normal"></div>
      </div>
    </div>
  )
}

export default Dashboard;