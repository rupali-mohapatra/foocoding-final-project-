import React, { useState } from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';
const NewUser = () => {
  const [newUserData, setNewUserData] = useState(
    {
    id: 0,
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _newUserData = { ...newUserData } as any;
    _newUserData[e.target.name] = e.target.value;
    setNewUserData(_newUserData);
  };
  const handlePostData = async() => {
    await fetch('https://jsonplaceholder.typicode.com/Users', {
  method: 'POST',
  body: JSON.stringify({
    name: '',
    id: '',
    email: '',
    phone: '',
    website: '',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    console.log('new User Data', newUserData);
    alert('Data posted successfully');
  };
  return (
    <div className="new-user">
      <h1>Add a new user</h1>
      <Link to="/users">Go Back</Link>
      <div className="new-user_form">
        <div className="new-user_form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={newUserData.name}
            placeholder="John Doe"
          />
        </div>
        <div className="new-user_form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={newUserData.email}
            placeholder="johndoe@test.com"
          />
        </div>
        <div className="new-user_form-group">
          <label htmlFor="">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={newUserData.phone}
            placeholder="111100000"
          />
        </div>
        <div className="new-user_form-group">
          <label htmlFor="">Website</label>
          <input
            type="url"
            name="website"
            onChange={handleChange}
            value={newUserData.website}
            placeholder="url"
          />
        </div>
        <div className="new-user_form-group">
          <button onClick={handlePostData}>Save User data</button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
