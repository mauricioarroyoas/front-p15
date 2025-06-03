import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Message } from '../features/messages/messagesSlice';

type Props = {
  threadId: string;
};

export default function MessageList({ threadId }: Props) {
  const messages = useSelector((state: RootState) =>
    Object.values(state.messages.byId).filter(msg => msg.threadId === threadId)
  );

  return (
    <div className="space-y-2 p-4">
      {messages.map((msg) => (
        <div key={msg.id} className="bg-gray-100 rounded p-2">
          <div className="text-sm font-bold">{msg.author}</div>
          <div>{msg.content}</div>
          <div className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
}
