import Quill from 'quill';
import DOMPurify from 'dompurify';
import { ChangeEvent, useEffect, useState } from 'react';
import "quill/dist/quill.snow.css";
import "./index.less";
import Button from '@/components/Button';
import { fetchAPI } from '@/utils/apis/fetch';

const options = {
  debug: 'info',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
};

const BlogManage:React.FC = () => {
  
  let editor:Quill | null = null;
  const [ blogTitle, setBlogTitle ] = useState("无标题");
  useEffect(()=>{
    if(!editor){
      editor = new Quill('#editor', options);
    }
  }, [])


  const handleSubmit = async () => {
    if(!editor){ return };
    console.error("getContents",editor.getContents());
    const dirtyHTML = editor.root.innerHTML;
    const cleanHTML = DOMPurify.sanitize(dirtyHTML);
    console.error("html", cleanHTML);
    const param = {
      title: blogTitle,
      excerpt: "null",
      article: dirtyHTML
    }
    const { data } = await fetchAPI("/article", 'POST', param);
    console.log(data);
  }

  const blogTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setBlogTitle(newTitle);
  }

  
  return (
    <div className='blog-editor'>
      <div className='header-content'>
        <div>
          <input value={blogTitle} onChange={blogTitleChange}/>
        </div>
        <div>
          <button onClick={handleSubmit}>更新</button>
          {/* <Button type='primary' onClick={handleSubmit}>更新</Button> */}
        </div>
        
      </div>
      <div id="editor"></div>
    </div>
    

  )
}

export default BlogManage;