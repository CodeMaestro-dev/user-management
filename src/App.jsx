import { useEffect, useState } from "react";

import AddUser from "./assets/components/AddUser"
import UserList from "./assets/components/UserList"

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const handleSave = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === selectedUser.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }

    setSelectedUser(null);
  };

  const handleEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
  };

  const handleDelte = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="bg-[#333333] font-mono text-white h-screen px-0 py-20 lg:p-20">
      <div className="pt-10 px-5 lg:px-10 h-auto grid grid-cols-8  gap-10">
        <AddUser onSave={handleSave} selectedUser={selectedUser} />
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelte} />
      </div>
    </div>
  );
}
