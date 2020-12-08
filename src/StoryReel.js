import React from 'react';

import './StoryReel.css';

import Story from './Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileSrc='https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='Abigail'
      />

      <Story
        image='https://images.unsplash.com/photo-1607348881296-78b064fbd811?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileSrc='https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='Gonxallez'
      />

      <Story
        image='https://images.unsplash.com/photo-1561720842-51b575d6f799?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileSrc='https://images.unsplash.com/photo-1581704906775-891dd5207444?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='Jon'
      />

      <Story
        image='https://images.unsplash.com/photo-1500629723675-4d6b0685936a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileSrc='https://images.unsplash.com/photo-1590756252677-8b92843273bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='Bellion'
      />

      <Story
        image='https://images.unsplash.com/photo-1499540785729-ac6adfa4efbf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileSrc='https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='Underground'
      />
    </div>
  );
};

export default StoryReel;
