import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            name: ''
        }
    },
    reducers: {
        setValue: (state, action) => {
            Object.keys(action.payload).forEach(e => {
                state.value[e] = action.payload[e]
            })
        }
    }
})

export const { setValue } = userSlice.actions
export default userSlice.reducer