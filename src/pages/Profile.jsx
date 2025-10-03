import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user) return <p>No user logged in</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow rounded">
      <h1 className="text-2xl mb-4">Profile</h1>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white px-3 py-1 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
