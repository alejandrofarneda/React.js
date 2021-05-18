function UsersItem({ user }) {
    return (
        <ul>
            {user.name && <li>{user.name}</li>}
            {user.email && <li>{user.email}</li>}
            {user.description && <li>{user.description}</li>}
        </ul>
    );
}

export default UsersItem;
