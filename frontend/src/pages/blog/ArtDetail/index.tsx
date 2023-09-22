import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArtDetail:React.FC = () => {

  const { id } = useParams();

  const [ article, setArticle ] = useState<any>(null);

  const fetchArticle = async (id:string | undefined) => {
    if(!id) return;
    const { data } = await fetchAPI(`/article/${id}`, 'GET', {});
    // 如果没有查到文章详情
    if(!!data && data.length == 0){
      console.log(data);
      return;
    }
    setArticle(data[0]);
  }

  useEffect(()=>{
    fetchArticle(id);
  }, [id])

  return (
    <section>
      <Link to='/blog'>Back</Link>
      <span>{ !!article && article.article }</span>
    </section>
    
  )
}

export default ArtDetail;