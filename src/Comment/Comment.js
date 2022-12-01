import React from 'react';
import { CommentWrapper } from './Comment.styles';
import emptyAvatar from '../Assets/emptyAvatar.png'
const Comment = ({avatar, user, content}) => {
  return (  
    <CommentWrapper>
        <div className='user-info'>
            <img src={avatar ? avatar : emptyAvatar}></img>
            <h4>{user}</h4>
        </div>
        <p>{content}</p>
    </CommentWrapper>
  )
}

export default Comment