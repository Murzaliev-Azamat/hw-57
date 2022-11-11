import React from 'react';
import type {User} from "../../types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  let statusUser = '';

  if (user.isActive) {
    statusUser = 'online';
  } else {
    statusUser = 'offline'
  }

  return (
    <div>
      <span>{user.name} </span>
      <span>{user.email} </span>
      <span>{statusUser} </span>
      <span>{user.role} </span>
    </div>
  );
};

export default UserItem;