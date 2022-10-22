
import React, { useEffect, useState } from 'react';
import { MdPublish } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import './Styles.css';
import { UserType } from './User';

const SingleUser = () => {
  const params = useParams();
  const [user, setUser] = useState<UserType>();
  const [singleUser, setSingleUser] = useState(
    {
      id: 0,
      name: '',
      email: '',
      phone: '',
      website: '',
    }
  );

  useEffect(() => {
    const singleUserApiUrl = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
    fetch(singleUserApiUrl)
      .then((response) => response.json())
      .then((json) => setUser(json));
    console.log('Params', params);
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _singleUserData = { ...singleUser } as any;
    _singleUserData[e.target.name] = e.target.value;
    setSingleUser(_singleUserData);
  };

  const handlePostData = async () => {
   await fetch(`https://jsonplaceholder.typicode.com/Users/${params.userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: '',
        name: '',
        email: '',
        phone: '',
        website: ''
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
      },
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    console.log('single User Data', setSingleUser);
  }   
  return (
    <div className="singleUser">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddBtn">
          <Link to="/users/new">Add new user</Link>
        </button>
        <Link to="/users">Go Back</Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            {user && (
              <>
                <div className="userDisplayTitle">
                  <p>Name:</p>
                  <span className="userDisplayDetail">{user.name}  </span>

                  <p>Email Id: </p>
                  <span className="userDisplayDetail">{user.email}</span>

                  <p>Phone:</p>
                  <span className="userDisplayDetail">{user.phone}</span>

                  <p>Website:</p>
                  <span className="userDisplayDetail">{user.website}</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  onChange={handleChange}
                  className="userUpdateInput"
                  
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  placeholder="email"
                  onChange={handleChange}
                  className="userUpdateInput"
                  
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  placeholder="000000000"
                  onChange={handleChange}
                  className="userUpdateInput"
                  
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  placeholder="url"
                  onChange={handleChange}
                  className="userUpdateInput"
                 
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                
              </div>
              <button onClick={handlePostData}  className="userUpdateBtn">
                Update<MdPublish/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
