import { useNavigate } from "react-router-dom"
import "./index.less"

export interface ArtCardProps {
  title:string,
  excerpt:string,
  articleID:number,
  updateAt:Date
}

const ArtCard:React.FC<ArtCardProps> = ({
  title,
  excerpt,
  articleID,
  updateAt
}) => {

  const navigate = useNavigate()

  // 跳转到文章详情
  const navToDetail = () => {
    navigate("/blog/" + articleID);
  }

  // 将时间格式转换为 yyyy-MM-dd
  const formatDateToYYYYMMDD = (date:Date) => {
    if(!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并且保证两位数格式
    const day = String(date.getDate()).padStart(2, '0'); // 日期需要保证两位数格式
  
    return `${year}-${month}-${day}`;
  }
  
  return (
    <div className="article-card" >
      <h3 onClick={ () => navToDetail()}>Deploy on multiple env with GitHub Actions</h3>
      <p>This article is going to introduce:  Deploy on multiple environment with GitHub Actons  
        Add reviewers approve a workflow deploying  Reuse workflowPrerequisites  Azure subscription, Resource Group and App Service  Public GitHub repoDeploy on multip...…
      </p>
      <div className="article-card-meta">
        <span className="time">{ formatDateToYYYYMMDD(updateAt) }</span>
      </div>
      <hr />
    </div>
  )
}

export default ArtCard;