import React, { useState, useEffect } from 'react';
import Api from "./Api";
import Comment from "./Comment";

function Get() {
    const [dados, setDados] = useState(null);
    //const [commentsData, setCommentsData] = useState();
    const comment = dados?.comments[0]?.content;
    const createdAt = dados?.comments[0]?.createdAt;
    const picture = dados?.comments[0]?.user?.image?.png;
    const user = dados?.comments[0]?.user?.username;
  
    useEffect(() => {
        Api.get()
        .then((response) => setDados(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
  
    //Create, Read, Update, Delete
    
// Jogar dentro deste componente a estrutura do comment


  return (
    <div>
        {/*
        {dados?.comments?.map((data) => (
        <div key={dados?.id}>
            <div className="comment-content">
            <p>{data?.content}</p>
            </div>
        </div>
        ))}
        */}
        <Comment objeto={dados} />
            

      {/*  <img src={picture} alt="Profile picture" />
        <span>{user}</span>
        <span>{createdAt}</span>
        <p>{comment}</p>
  */}
    </div>
  )
}

export default Get
