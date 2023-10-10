import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "quill/dist/quill.core.css";

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
      
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html: '<p>normal</p><p><strong>bold</strong></p><p><strong><em>line</em></strong></p><p><strong style="color: rgb(230, 0, 0);"><em>red</em></strong></p><h1>h1h1</h1>' }} />
    </section>
    
  )
}

export default ArtDetail;