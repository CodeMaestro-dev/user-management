import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function AddUser({ onSave, selectedUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState("");

  useEffect(() => {
    if(selectedUser) {
      setAge(selectedUser.email)
      setName(selectedUser.name)
      setDOB(selectedUser.dob)
    } else {
      setAge("")
      setName("")
      setDOB("")
    }
  }, [selectedUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: Date.now(), name: name, age: age, dob: dob });
    setAge("");
    setName("");
    setDOB("")
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
          className="bg-[#2B2B2B] focus:bg-slate-500 px-5 py-3 w-full rounded-md text-white"
          required
        />
      </div>
      <div className="w-full my-5">
        <input
          type="number"
          name="age"
          placeholder="User's Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-[#2B2B2B] focus:bg-slate-500 px-5 py-3 w-full rounded-md text-white"
          required
        />
      </div>
      <div className="w-full my-5">
        <input
          type="date"
          name="dob"
          placeholder="User's Date of Birth"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          className="bg-[#2B2B2B] focus:bg-slate-500 px-5 py-3 w-full rounded-md text-white"
          required
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

