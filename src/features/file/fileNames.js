import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from '../../api/client'

const initialState = {
  error: null,
  status: 'idle',
  data: []
}

export const fetchFileNames = createAsyncThunk('files/fetchFileNames', async () => {
  const response = await client.get('/files/list')

  return response?.data
})

export const fileNamesSlice = createSlice({
  name: 'fileNames',
  initialState,
  reducers: {

  },
  extraReducers (builder) {
    builder.addCase(fetchFileNames.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
      .addCase(fetchFileNames.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.data = action.payload
      })
      .addCase(fetchFileNames.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  }
})

export const selectFileNamesState = (state) => state.fileNames

export default fileNamesSlice.reducer
