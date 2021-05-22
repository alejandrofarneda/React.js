import { useState } from 'react';
import TodoItem from './TodoItem';
import './Todolist.css';

function Todolist2() {
    let [todo, setTodo] = useState('')
    let [task, sendTask] = useState([])
    return (
        <div className="block">
            <div className='ul'>{task.map((name, i)=>
            <TodoItem key={i} act={name} />            
            )}
            </div>
            <p>
                
            </p>
            <form
                onSubmit={(e) => sendTask([...task, todo]) + setTodo('') + e.preventDefault()}
            >
                <div>Todo:</div>
                <input     
                value={todo}                                  
                onChange={(e) => setTodo([e.target.value])}
                />
                <br />
                <button>Agregar</button><button onClick={(e)=> sendTask([]) + e.preventDefault() }>Limpiar</button>
            </form>
        </div>
    );
}

export default Todolist2;
