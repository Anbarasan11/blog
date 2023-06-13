import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Createpost.css";

export const Creatpst = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [validation, setValidation] = useState(""); 

    const navigate = useNavigate()

    const {data,error, optionsData} = useFetch('https://jsonplaceholder.typicode.com/posts',"POST");

    const handleSubmit = (e) =>{
      e.preventDefault();
     if(!title){
      setValidation("Title Should Not Be Empty");
     }
    else if(!content){
      setValidation("Content Should Not Be Empty");
     }
     else{
     setValidation("");
            console.log({title, body:content, userId:1});
            optionsData({title, body:content, userId:1});   
    }

    };
    useEffect(()=>{
      if(data && data.length!==0){
        const timer = setTimeout(() => navigate("/"),3000);
        return () => clearTimeout(timer)
      }
    },[data,navigate])
  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label  className="label">
            <h6>Title:</h6>
          </label>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea className="form-control"  value={content} onChange={(e)=>setContent(e.target.value)} / >
        </div>

          { validation && ( <div className="alert alert-danger" role="alert">
            {validation}
          </div>)
          }

        {
          data && data.length!== 0 && (<div className="alert alert-success" role="alert">
            Post Created Successfully!
          </div>)
        }
        {
          error && <div className="alert alert-danger" role="alert">
            {error}
          </div>
        }
        <div className="float-end">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>

      </form>

    </div>
  )
}
