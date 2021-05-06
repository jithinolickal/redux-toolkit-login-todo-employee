import { createSlice } from '@reduxjs/toolkit'
import Data from '../components/employee/Data/data.json'

const initialState = {
    employeeState : []
}

const employeeSlice = createSlice({
    name: "Employee Slice",
    initialState,
    reducers: {
        saveEmployees : (state, action)=>{
            state.employeeState = action.payload;
        },
        deleteEmployees : (state, action)=>{
            const empStateAfterDelete = state.employeeState.filter(function( obj ) {
                return obj.id !== action.payload;
            });
            state.employeeState = empStateAfterDelete;
        },
    }
});

export const { saveEmployees, deleteEmployees } = employeeSlice.actions

export const employeeSelector = state => state.employee.employeeState;

export default employeeSlice.reducer