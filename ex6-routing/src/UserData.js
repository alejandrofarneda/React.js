import { useUser } from "./UserContext";

export default function UserData(){
    const user = useUser()
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
