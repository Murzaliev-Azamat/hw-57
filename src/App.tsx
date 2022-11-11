import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import type {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser])
  }

  return (
    <div className="container-md">
      <div className="row align-items-start">
        <UserForm onSubmit={addUser}/>
        <Users users={users}/>
      </div>
    </div>
  );
}

export default App;
