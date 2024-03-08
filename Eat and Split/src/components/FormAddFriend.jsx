/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
const FormAddFriend = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

  function handleName(e) {
    setFriendName(e.target.value);
  }
  function handleImage(e) {
    setFriendImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !friendImage) return;
    const id = crypto.randomUUID();
    const newFriend = {
      friendName,
      friendImage: `${friendImage}?${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };
    onAddFriend(newFriend);
    setFriendImage("https://i.pravatar.cc/48");
    setFriendName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" value={friendName} onChange={handleName} />
      <label>🌆Image URL</label>
      <input type="text" value={friendImage} onChange={handleImage} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
