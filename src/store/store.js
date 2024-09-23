import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

// Define initial state
const initialState = {
  chats: [
    {
      messages: [],
      userInput: "",
    },
  ], // Array of chat sessions
  currentChatIndex: 0, // Index of the current chat session
  loading: false,
  fileSelected: false,
  error: null,
  openApiDialog: false,
  // apiCallCount: 0, // Add this line to keep track of API call count
};

// Create a slice
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      const { chatIndex, messages } = action.payload;
      state.chats[chatIndex].messages = messages;
    },
    setUserInput: (state, action) => {
      const { chatIndex, userInput } = action.payload;
      state.chats[chatIndex].userInput = userInput;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFileSelected: (state, action) => {
      state.fileSelected = action.payload;
    },
    addNewChat: (state) => {
      state.chats.push({ messages: [], userInput: "" });
      state.currentChatIndex = state.chats.length - 1;
    },
    setCurrentChat: (state, action) => {
      state.currentChatIndex = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setApiDialog: (state, action) => {
      state.openApiDialog = action.payload;
    },
    // incrementApiCallCount: (state) => {
    //   state.apiCallCount += 1;
    // },
  },
});

// Export actions
export const {
  setMessages,
  setUserInput,
  setLoading,
  setFileSelected,
  addNewChat,
  setCurrentChat,
  setError,
  clearError,
  setApiDialog,
  // incrementApiCallCount, // Export the new action
} = chatSlice.actions;

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  chat: chatSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist requires this to be false
    }),
});

const persistor = persistStore(store);

export { store, persistor };
