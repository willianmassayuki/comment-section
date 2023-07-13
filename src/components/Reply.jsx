import { useState } from 'react';
import '../styles/components/reply.scss';
import VoteCount from './VoteCount';
import ReplyInput from './ReplyInput';

const Reply = ({objeto, replyData}) => {
  const [replyId, setReplyId] = useState();
  const [novoObjeto, setNovoObjeto] = useState(objeto);
  const [novaRes, setNovaRes] = useState(replyData);

  function show(id) {
   setReplyId(id); 
  }

  

  function editComment(id) {
    

  console.log(novaRes); 
  }

  function deleteComment(id) {
    // Obter os dados armazenados no localStorage
    const storedData = localStorage.getItem('dados');
  
    if (storedData) {
      // Converter os dados de volta para um objeto
      const parsedData = JSON.parse(storedData);
  
      // Encontrar o índice do elemento com o ID fornecido
      const index = parsedData.findIndex(item => item.comments.map((dados) => (dados.id === id) ));
      console.log(index);
  
      if (index !== -1) {
        // Remover o elemento do array
        parsedData.splice(index, 1);
  
        // Atualizar o localStorage com os dados atualizados
        localStorage.setItem('dados', JSON.stringify(parsedData));
  
        // Atualizar o estado do componente, se necessário
        setDados(parsedData);
      }
    }
  }

    return (
      <>
        {novaRes?.replies?.map((data) => (
        <div className="reply-wrapper" key={data?.id}>
          <div className="reply" >    
                <VoteCount score={data?.score}/>
              <div className="comment-top-content">
                <img src={data?.user?.image?.png} alt="Profile picture" />
                <span>{data?.user?.username}</span>
                {data?.user?.username == objeto?.currentUser?.username ? 
                  <span className='tag-you'>you</span>
                  : 
                  null
                }
                <p>{data?.createdAt}</p>
              </div>
              { data?.user?.username == objeto?.currentUser?.username ? 
                <div className='author-buttons'>
                  <button className='comment__reply-button delete-button' onClick={() => deleteComment(data.id)}><img src="/images/icon-delete.svg" alt="Delete"/>Delete</button>
                  <button className='comment__reply-button' onClick={() => editComment(data.id)}><img src="/images/icon-edit.svg" alt="Edit"/>Edit</button>
                </div>
              :
                <div className='author-buttons'>
                  <button className='comment__reply-button' onClick={() => show(data.id)}><img src="/images/icon-reply.svg" alt="Reply"/>Reply</button>
                </div>
              }
              <p>{data?.content}</p>
            </div>
            <div className="inativo" id={`${replyId == data?.id ? "show" : "any"}`}>
            <ReplyInput objeto={objeto}/>
          </div>
        </div>
        ))}
    </>  
    )
  }
  
  export default Reply
       