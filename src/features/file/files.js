import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from '../../api/client'

const initialState = {
  error: null,
  status: 'idle',
  data: []
}

export const fetchFiles = createAsyncThunk('files/fetchFiles', async (params) => {
  const fileName = params?.fileName ?? ''

  const response = await client.get(`/files/data?fileName=${fileName}`)

  return response?.data
})

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    resetState: (state) => {
      state.error = null
      state.status = 'idle'
      state.data = []
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchFiles.pending, (state) => {
      state.status = 'loading'
      state.error = null
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

export const selectFileState = (state) => state.files
export const { resetState } = fileSlice.actions

export default fileSlice.reducer
