import React from 'react';
import UserItem from "./UserItem";
import {User} from "../../types";

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({users}) => {
  return (
    <div className="col">
      <h4>Users</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;