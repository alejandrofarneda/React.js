import test from './test.json';
import UsersItem from './UsersItem';

function Users() {
    return (
        <div className="users">
            <h1>Users</h1>
            <div>
                {test.Users.map((u) => (
                    <UsersItem key={u.id} user={u} />
                ))}
            </div>
        </div>
    );
}

export default Users;
