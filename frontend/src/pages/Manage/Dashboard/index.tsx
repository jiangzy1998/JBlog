import "./index.less"

const Dashboard:React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header width-10 height-sm">
        <h3>Welecome back</h3>
        <span>October 26</span>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm"></div>
      </div>
      <div className="bg-card width-3">
        <div className="card-content height-sm"></div>
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