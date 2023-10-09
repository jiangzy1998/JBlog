import Quill from 'quill';
import * as DOMPurify from 'dompurify';
import { useEffect } from 'react';
import "quill/dist/quill.snow.css";
import "./index.less";
import Button from '@/components/Button';

const BlogManage:React.FC = () => {
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
  let editor:Quill | null = null;

  useEffect(()=>{
    if(!editor){
      // editor = new Quill('#editor', options);
    }
  }, [])


  const handleSubmit = () => {
    if(!editor){ return };
    console.error("getContents",editor.getContents());
    const dirtyHTML = editor.root.innerHTML;
    const cleanHTML = DOMPurify.sanitize(dirtyHTML);
    console.error("html", cleanHTML);
  }

  
  return (
    <div className='blog-editor'>
      <div className='header-content'>
        <Button type='primary' onClick={()=>handleSubmit()}>提交</Button>
      </div>
      <div id="editor"></div>
     
     
    </div>
    

  )
}

export default BlogManage;
