import '../styles/components/reply.scss';
import VoteCount from './VoteCount';'../components/VoteCount';

const Reply = ({respostas}) => {

    return (
      <>
        {respostas?.map((data) => (
          <div className="reply" key={data?.id}>
            <VoteCount />
            <div className="comment-content">
              <img src={data?.user?.image?.png} alt="Profile picture" />
              <span>{data?.user?.username}</span>
              <span>{data?.createdAt}</span>
              <p>{data.content}</p>
            </div>
          <button className='comment__reply'>Reply</button>
          
          </div>
        ))}
    </>  
    )
  }
  
  export default Reply
  