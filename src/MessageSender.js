import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import firebase from 'firebase';

import './MessageSender.css';

import db from './firebase';
import { useStateValue } from './StateProvider';

const MessageSender = () => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput('');
    setImageUrl('');
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            className='messageSender__input'
            placeholder={`What's on your mind, ${user.displayName}?`}
            onChange={e => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            placeholder={`Image URL (Optional)`}
            onChange={e => setImageUrl(e.target.value)}
          />
          <button type='submit' onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
