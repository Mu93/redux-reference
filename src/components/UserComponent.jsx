import { connect } from "react-redux";

const UserComponent = ({ user, setUser }) => {
  return (
    <div>
      <p>User: {user}</p>
      <button onClick={() => setUser("John")}>Set User</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
