import '../styles/components/comment.scss';
import Reply from './Reply';
import VoteCount from './VoteCount';

const Comment = ({objeto}) => {

  return (
    <>
      {objeto?.comments?.map((data) => (
        <div className="comment" key={data?.id}>
          <VoteCount />
          <div className="comment-content">
            <img src={data?.user?.image?.png} alt="Profile picture" />
            <span>{data?.user?.username}</span>
            <span>{data?.createdAt}</span>
            <p>{data?.content}</p>
          </div>
        <button className='comment__reply'>Reply</button>
        <Reply respostas={data?.replies} />
        </div>
      ))}
  </>  
  )
}

export default Comment
