import '../styles/components/replyInput.scss';

const ReplyInput = ({objeto}) => {
  return (
    <div className='reply-input' >
        <img src={objeto.currentUser.image.png} alt="User picture" />
        <textarea name="comment-input" id="comment-input" cols="60" rows="5"></textarea>
        <button type="submit">REPLY</button>
    </div>
  )
}

export default ReplyInput
