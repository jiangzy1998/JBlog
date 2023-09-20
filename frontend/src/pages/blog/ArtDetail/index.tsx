import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ArtDetail:React.FC = () => {

  const { id } = useParams();

  const fetchArticle = async (id:string | undefined) => {
    if(!id) return;
    const { data } = await fetchAPI(`/article/${id}`, 'GET', {});
    if(!!data){
      console.log(data);
    }
  }

  useEffect(()=>{
    fetchArticle(id);
  }, [id])

  return (
    <section>
      <Link to='/blog'>B</Link>
      <h1>This is Detail Page!</h1>
    </section>
    
  )
}

export default ArtDetail;