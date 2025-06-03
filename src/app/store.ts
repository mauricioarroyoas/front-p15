import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from "../features/messages/messagesSlice";
//Thread from Mauricio

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    // threads: threadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
