import { useState } from "react";
import { useEffect } from "react";



export const useFetch = (url, method="GET") => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isPending, setIspending] = useState(false);
    const [options, setOptions] = useState(null);


    const optionsData = (data) =>{
        if (method=="POST"){
            setOptions({
                method:"POST",
                body:JSON.stringify(data), 
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
            })
        }
    }
  
    useEffect(() => {
      const fetchPosts = async (options) => {
        setIspending(true);
        try {
          const response = await fetch(url,{...options});
          const responseData = await response.json();
          if (response.ok) {
            setPosts(responseData);
            setError("");
            setIspending(false);
          } else {
            setError(responseData.error);
            setIspending(false);
          }
        } catch (error) {
          setError("An error occurred while fetching posts.");
        }
      };

      if (method === "GET") {
        fetchPosts();
      }
      else if (method === "POST" && options) {
        fetchPosts(options)
      }
  
      fetchPosts();
    }, [url,method,options]);
  return (
   {posts,error,isPending,optionsData}
  )
}
