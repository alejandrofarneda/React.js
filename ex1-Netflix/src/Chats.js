import ChatItem from './ChatItem';
import test from './test.json'

function Chats() {

  return (
    <div className="chats">
      <h1>Chats</h1>
      <div>
        {test.chats.map((c, i) =>
          <ChatItem key={i} chat={c} />
        )}
      </div>
    </div>
  );
}

export default Chats;
