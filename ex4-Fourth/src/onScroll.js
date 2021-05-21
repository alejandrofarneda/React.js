
import useScroll from './Hooks/useScroll';
import './Modal.css';

function OnScroll() {
    const y = useScroll()
    return (
        <div className="scroll">
            <p>{y}</p>
        </div>
    );
}

export default OnScroll;
