import React from 'react';
import {User} from "../../types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <div>
      <span>{user.name}</span> <span>{user.email}</span> <span></span> <span></span>
    </div>
  );
};

export default UserItem;