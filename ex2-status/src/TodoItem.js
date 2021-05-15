import './Todolist.css';

function TodoItem({ act }) {
    return <div className="li">{act ? '- ' + act : act}</div>;
}
export default TodoItem;
