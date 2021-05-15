import Badge from './Badge'

function ChatItem({ chat }) {

  return (
    <div className="chat">
      <div className="title">
        <span className="name">{chat.name}</span>
        <span className="date">{chat.date}</span>
      </div>
      <div className="body">
        <span>{chat.lastMessage}</span>
        <Badge value={chat.unread} />
      </div>
    </div>
  );
}

export default ChatItem;
