import { useState } from 'react';
import '../styles/components/comment.scss';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import VoteCount from './VoteCount';


const Comment = ({objeto}) => {
  const [replyId, setReplyId] = useState();
  const [novoObjeto, setNovoObjeto] = useState(objeto);

  function show(id) {
   setReplyId(id); 
  }

  function deleteComment(id) {
    const storedData = localStorage.getItem('dados');
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
  
      // Filtrar os comentários, removendo o item com o ID correspondente
      const updatedComments = parsedData.comments.filter(comment => comment.id !== id);
  
      // Filtrar as respostas, removendo os itens com o ID correspondente
      const updatedReplies = parsedData.comments.map(comment => {
        const updatedComment = { ...comment };
        updatedComment.replies = updatedComment.replies.filter(reply => reply.id !== id);
        return updatedComment;
      });
  
      // Atualizar o objeto com os comentários e respostas atualizados
      parsedData.comments = updatedComments;
      parsedData.comments.forEach((comment, index) => {
        comment.replies = updatedReplies[index].replies;
      });
  
      // Atualizar o localStorage com os dados atualizados
      localStorage.setItem('dados', JSON.stringify(parsedData));
  
      // Atualizar o estado do componente, se necessário
      setNovoObjeto(parsedData);
    }
  }

  function editComment(id) {
  setReplyId(id); 
  }



  return (
    <>
      {objeto?.comments?.map((data) => (
        <div className="comment-container" key={data?.id}>
          <div className="comment-limit-container">
            <div className="comment">
              <VoteCount score={data?.score}/>
              <div className="comment-top-content">
                <img src={data?.user?.image?.png} alt="Profile picture" />
                <span>{data?.user?.username}</span>
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
            <div className="reply-container">
              <Reply objeto={objeto} replyData={data}/>
            </div>
            
          </div>
        </div>
      ))}
  </>  
  )
}

export default Comment
