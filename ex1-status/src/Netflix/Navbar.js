function Navbar({ user }) {

  return (
    <div className="navbar">
      <div className="logo">Netflix</div>
      <div className="user">
        <img src={user.avatar} alt="Avatar" />
        {user.username}
      </div>
    </div>
  );
}

export default Navbar;
