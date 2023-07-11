import '../styles/components/comment.scss';
import Reply from './Reply';
import VoteCount from './VoteCount';

const Comment = ({objeto}) => {

  return (
    <>
      {objeto?.comments?.map((data) => (
        <div className="comment-container">
          <div className="comment" key={data?.id}>
            <div className="vote-count">
              <VoteCount />
            </div>
            <div className="comment-top-content">
              <img src={data?.user?.image?.png} alt="Profile picture" />
              <span>{data?.user?.username}</span>
              <p>{data?.createdAt}</p>
            </div>
            <button className='comment__reply-button'><img src="/images/icon-reply.svg" alt="Reply"/>Reply</button>
            <p>{data?.content}</p>
            
          </div>
          <Reply respostas={data?.replies} />
        </div>
      ))}
  </>  
  )
}

export default Comment
