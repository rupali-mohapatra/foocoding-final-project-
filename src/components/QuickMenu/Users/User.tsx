import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

export type UserType = {
  id: number;
  name: string;
  email: string;
  website: string;
  phone: string;
};
type UsersType = Array<UserType>;

const User = () => {
  const [users, setUsers] = useState<UsersType>([]);
  const FetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="users">
      <h1>All Users</h1>

      <div className="users_list">
        {users &&
          users.map((user) => (
            //singleusercard
            <div className="users-card" key={user.id}>
              <Link to={`/users/${user.id}`}>
                <p>
                  Name:<span className="normal">{user.name}</span>
                </p>
              </Link>
              <p>
                E-mail:<span className="normal">{user.email}</span>
              </p>
              <p>
                Phone:<span className="normal">{user.phone}</span>
              </p>
              <p>
                Website:<span className="normal">{user.website}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
