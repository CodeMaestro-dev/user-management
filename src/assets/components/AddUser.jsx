import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function AddUser({ onSave, selectedUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if(selectedUser) {
      setEmail(selectedUser.email)
      setName(selectedUser.name)
    } else {
      setEmail("")
      setName("")
    }
  }, [selectedUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: Date.now(), name: name, email: email });
    setEmail("");
    setName("");
  };

  return (
    <form
      className="w-full col-start-1 col-end-9 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-7 mt-20"
      onSubmit={handleSubmit}
    >
      <h1 className="uppercase text-center mb-5">{selectedUser? "Save this User" : "Add a User"}</h1>
      <div className="w-full my-5">
        <input
          type="text"
          name="full name"
          placeholder="User's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full rounded-md text-white"
        />
      </div>
      <div className="w-full my-5">
        <input
          type="email"
          name="email"
          placeholder="User's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full rounded-md text-white"
        />
      </div>
      <div className="w-full my-5">
        <input
          type="submit"
          className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full rounded-md text-white"
          value={selectedUser ? "Save User" : "Add User"}
        />
      </div>
    </form>
  );
}

AddUser.propTypes = {
  selectedUser: PropTypes.any,
  onSave: PropTypes.any
};

