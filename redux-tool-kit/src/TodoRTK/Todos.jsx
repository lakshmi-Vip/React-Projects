import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlice";


const Todos = () => {
    const dispatch = useDispatch()
    const tods = useSelector((state) => state.todo.value)

    return(
        <>
        <p>RTk Todo</p>
        <input type="text" id="todo" placeholder="Enter Todo" />
        <button onClick={() => {
            const todo = document.getElementById("todo").value
            dispatch(addTodo(todo))
        }}>Add Todo</button>
        <ul>
            {tods.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))}
            </ul>
        <p>Total Todos: {tods.length}</p>
        </>
    )
}

export default Todos