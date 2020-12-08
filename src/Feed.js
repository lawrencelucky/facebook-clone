import React from 'react';

import './Feed.css';

import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        message='WOW this works'
        timestamp='This is a timestamp'
        username='Lawrence Lucky'
        image='https://images.unsplash.com/photo-1542810205-0a5b379f9c52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      />
    </div>
  );
};

export default Feed;
