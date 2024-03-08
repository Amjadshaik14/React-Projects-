/* eslint-disable react/prop-types */
export default function Button({ children, onAddFriend }) {
  return (
    <button className="button" onClick={onAddFriend}>
      {children}
    </button>
  );
}
