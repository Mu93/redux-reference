import { connect } from "react-redux";
import { setUser } from "../store/actions/UserActions";

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
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
