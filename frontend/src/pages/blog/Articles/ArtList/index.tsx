import ArtCard, { ArtCardProps } from "@/components/ArtCard";
import Pagination from "@/components/Pagination";
import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect, useState } from "react";


const ArtList:React.FC = () => {

  const [ articles, setArticles ] = useState<ArtCardProps[]>([]);

  // 获取文章列表
  // TODO 需要分页
  const fetchBlogs = async () => {
    const { data } = await fetchAPI("/article", 'GET', { page: 0, size: 10});
    if(!!data){
      setArticles(data);
    }
  }

  // const addBlog = async () => {
  //   const param = {
  //     title: "Angular:深入了解NgRx的优势",
  //     excerpt:"最近在项目组里做了一个 session 分享怎么用 NgRx，以及 NgRx 的优势是什么。大家反馈很不错，写篇文章记录下这次的分享内容。",
  //     article:"最近在项目组里做了一个 session 分享怎么用 NgRx，以及 NgRx 的优势是什么。大家反馈很不错，写篇文章记录下这次的分享内容。在这篇文件里会介绍以下内容： 什么是 NgRx 结合 Demo 代码，介绍 NgRX 的基本用法 从函数编程的角度来看，NgRx 的优势是什么什么是NgRxNgRx 是 state management library，是一个状态管理包，你也可以理解它是 RxJS 和 Redux 的结合体。在真正开始解释什么是 NgRx 以及它的用法，先来看一个很...…",
  //     articleID:2
  //   }
  //   const { data } = await fetchAPI("/article", 'POST', param);
  //   console.log(data);
  // }

  useEffect(()=>{
    fetchBlogs();
  }, [])

  return (
    <section>
      { articles.map((item, index) => (
        <ArtCard key={index} title={item.title} excerpt={item.excerpt} articleID={0}></ArtCard>
      ))}
      
      <Pagination total={5} current={1}></Pagination>
    </section>
    
  )
}

export default ArtList;