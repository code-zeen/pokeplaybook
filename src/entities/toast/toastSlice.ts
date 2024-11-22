import { toast } from '@/shared/hooks/use-toast.ts'
import { createSlice } from '@reduxjs/toolkit'

const toastSlice = createSlice({
    name: 'toast',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => action.type.endsWith('/rejected'), () => {
                toast({
                    title: 'Error',
                    description: 'Something went wrong',
                    variant: 'destructive',
                    duration: 5000,
                })
            })
    }
})

export default toastSlice.reducer