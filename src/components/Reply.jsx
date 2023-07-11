import '../styles/components/reply.scss';
import VoteCount from './VoteCount';'../components/VoteCount';

const Reply = ({respostas}) => {

    return (
      <>
        {respostas?.map((data) => (
          <div className="reply" key={data?.id}>    
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
        ))}
    </>  
    )
  }
  
  export default Reply
       