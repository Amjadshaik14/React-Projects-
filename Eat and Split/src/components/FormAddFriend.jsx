/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };
    onAddFriend(newFriend);
    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" value={name} onChange={handleName} />
      <label>🌆Image URL</label>
      <input type="text" value={image} onChange={handleImage} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
