import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import ChannelList from '../components/Chat/ChannelList';
import Channels from '../components/Chat/Channels';

const Message = () => {
    const client = StreamChat.getInstance(process.env.GET_STREAM_KEY);
  return (
    <div className="home_page bg-black rounded-2xl overflow-hidden">
    <div className="mb-0">
    <div className='flex'>
        <ChannelList />
        <Channels />
    </div>
    </div>
</div>
  )
}

export default Message