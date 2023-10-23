import ArtCard, { ArtCardProps } from "@/components/ArtCard";
import Pagination from "@/components/Pagination";
import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect, useState } from "react";
import "./index.less"


const ArtList:React.FC = () => {

  const [ articles, setArticles ] = useState<ArtCardProps[]>([]);

  // 获取文章列表
  // TODO 需要分页
  const fetchBlogs = async ( page:number = 1, size:number = 10 ) => {
    const { data } = await fetchAPI(`/article?page=${page}&size=${size}`, 'GET', {});
    if(!!data){
      data.forEach((item:any) => {
        item.articleID = item._id
      });
      setArticles(data);
    }
  }
  
  const paginationChange = (page:number) => {
    fetchBlogs(page);
  }

  return (
    <div className="articles">
      <div>
        { articles.map((item, index) => (
          <ArtCard key={index} title={item.title} excerpt={item.excerpt} updateAt={item.updateAt} articleID={item.articleID}></ArtCard>
        ))}
      </div>
      
      <div>
        <Pagination total={1} current={1} onChange={paginationChange}></Pagination>
        <div>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default ArtList;