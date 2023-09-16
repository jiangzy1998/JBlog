import { useNavigate } from "react-router-dom"
import "./index.less"

const ArtCard:React.FC = () => {

  const navigate = useNavigate()

  const navToDetail = () => {
    navigate("/blog/1")
  }
  return (
    <div className="article-card" onClick={ () => navToDetail()}>
      <h2>Deploy on multiple env with GitHub Actions</h2>
      <p>This article is going to introduce:  Deploy on multiple environment with GitHub Actons  
        Add reviewers approve a workflow deploying  Reuse workflowPrerequisites  Azure subscription, Resource Group and App Service  Public GitHub repoDeploy on multip...…
      </p>
      <div></div>
    </div>
  )
}

export default ArtCard;