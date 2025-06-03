import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Message = {
  id: string;
  threadId: string;
  author: string;
  content: string;
  timestamp: number;
};

type MessagesState = {
  byId: Record<string, Message>;
};

const initialState: MessagesState = {
  byId: {},
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      const message = action.payload;
      state.byId[message.id] = message;
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
