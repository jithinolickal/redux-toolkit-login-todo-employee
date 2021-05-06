import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoState:[]
}

const todoSlice = createSlice({
    name: "todoslice",
    initialState,
    reducers: {
        saveNewItem : (state, action) => {
            state.todoState.push(action.payload);
        },
        updateStriked : (state, action) => {
            const newValue = state.todoState.map(obj =>
                obj.id === action.payload ? { ...obj, striked : !obj.striked } : obj
            );
            state.todoState = newValue;
        },
        removeItem : (state, action) => {
            const newValueRemoved = state.todoState.filter(function( obj ) {
                return obj.id !== action.payload;
            });
            state.todoState = newValueRemoved;
        }
    }
});

export const {saveNewItem, updateStriked, removeItem} = todoSlice.actions
export const todoSelector = state=> state.todos.todoState;
export default todoSlice.reducer