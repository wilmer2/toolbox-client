import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from '../../api/client'

const initialState = {
  error: null,
  status: 'idle',
  data: []
}

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  const response = await client.get('/files/data')

  return response?.data
})

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    dataReceived: (state, action) => {
      state.loading = false
      state.data = action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchFiles.pending, (state) => {
      state.status = 'loading'
    })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.data = action.payload
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  }
})

export const { dataReceived } = fileSlice.actions
export const selectFileState = (state) => state.files

export default fileSlice.reducer
