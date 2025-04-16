import { createSlice, nanoid} from '@reduxjs/toolkit';


const TodoSlice = createSlice({
    name: 'todo',
    initialState: { value: []},
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.value = [...state.value, action.payload]
                //state.value.push(action.payload)
            },
         prepare:(text) => {
            return {

                payload: {
                    id: nanoid(),
                    text,
                    completed: false
                }
            }
         }
        },
        removeTodo: {
            reducer: (state, action) =>{
                // const index = state.value.findIndex((todo) => todo.id === action.payload)
                // if(index !== -1) {
                //     state.value.splice(index,1)
                // }
                state.value = state.value.filter((todo) => todo.id !== action.payload)
                
            }
        }
    }
})
export const { addTodo, removeTodo }  = TodoSlice.actions
export default TodoSlice.reducer