import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  data: []
}

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    requestStarted: (state) => {
      state.loading = true
      state.error = null
    },
    requestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    dataReceived: (state, action) => {
      state.loading = false
      state.data = action.payload
    }
  }
})

export const { requestStarted, requestFailed, dataReceived } = fileSlice.actions

export default fileSlice.reducer
