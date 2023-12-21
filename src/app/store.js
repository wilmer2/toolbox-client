import { configureStore } from '@reduxjs/toolkit'
import filesReducer from '../features/file/files'

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
})
