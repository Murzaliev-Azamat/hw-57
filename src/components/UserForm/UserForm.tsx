import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface UserFormProps {
  onSubmit: (newUser: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev, [name]: value}))
  };

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setUser(prev => ({...prev, [name]: checked}))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({id: Math.random().toString(), ...user})
  };

  return (
    <form onSubmit={onFormSubmit} className="col">
      <h4>Add user</h4>
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" className="form-control" value={user.name} onChange={onTextFieldChange}/>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" className="form-control" value={user.email} onChange={onTextFieldChange}/>
      </div>
      <div className="form-group mb-2">
        <label><input name="isActive"
                      type="checkbox"
                      checked={user.isActive}
                      onChange={onCheckBoxChange}/> isActive</label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="select">Role</label>
        <select name="role"
                className="form-control"
                value={user.role}
                onChange={onTextFieldChange}
        >
          <option disabled value="">Select a role</option>
          <option>user</option>
          <option>editor</option>
          <option>admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add user</button>
    </form>
  );
};

export default UserForm;