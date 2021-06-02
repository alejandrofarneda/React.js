import { useSelector } from 'react-redux';

export default function UserData() {
    const user = useSelector((s) => s.user);
    return (
        <div className="char">
            <div>{user.username}</div>
            <img
                className="img"
                src={user.avatar}
                alt={user.username}
                width="250"
                height="200"
            />
        </div>
    );
}
