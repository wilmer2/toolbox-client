import { configureStore } from '@reduxjs/toolkit'
import filesReducer from '../features/file/files'
import fileNameReducer from '../features/file/fileNames'

export const store = configureStore({
  reducer: {
    files: filesReducer,
    fileNames: fileNameReducer
  }
})
