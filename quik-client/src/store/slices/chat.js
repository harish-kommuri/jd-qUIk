import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: {}
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage() {

    },

    addMessageLine() {

    }
  },
})

export const { addMessage, addMessageLine } = chatSlice.actions

export default chatSlice.reducer