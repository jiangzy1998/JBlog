import { useEffect, useState } from "react";
import "./BlogManage.less"
import { ArtCardProps } from "@/components/ArtCard";
import { fetchAPI } from "@/utils/apis/fetch";

const lpadNum = (num:number, len:number) => {
  let strNum = num.toString();
  let l = strNum.length;
  while(l < len) {
      strNum = "0" + num;
      l++;
  }
  return strNum;
}

const formatDate = (d:Date | undefined) => {
  if(!d) return "-";
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var milliSeconds = d.getMilliseconds();
  var resStr = year + lpadNum(month, 2) + lpadNum(day, 2) + " " + lpadNum(hours,2) + ":" + lpadNum(minutes,2) + ":" + lpadNum(seconds,2) + "." + lpadNum(milliSeconds, 3);
  return resStr;
}


const BlogManage:React.FC = () => {

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

  useEffect(() => {
    fetchBlogs(0);
  }, [])

  return (
    <table className="blog-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>分类</th>
          <th>创建时间</th>
          <th>更新时间</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        {
          articles.map((item, index) => (
            <tr>
              <td>{item.title}</td>
              <td>--</td>
              <td>{formatDate(item.createAt) || '-'}</td>
              <td>{formatDate(item.updateAt) || '-'}</td>
              <td><a className="link">编辑</a></td>
            </tr>
          ))
        }  
      </tbody>
    </table>
  )
}

export default BlogManage;