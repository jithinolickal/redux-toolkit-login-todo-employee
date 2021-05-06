import { createSlice } from '@reduxjs/toolkit'
import Data from '../components/employee/Data/data.json'

const initialState = {
    employeeState : Data
}

const employeeSlice = createSlice({
    name: "Employee Slice",
    initialState,
    reducers: {
    
    }
});

export const {} = employeeSlice.actions

export const employeeSelector = state => state.employee.employeeState;

export default employeeSlice.reducer