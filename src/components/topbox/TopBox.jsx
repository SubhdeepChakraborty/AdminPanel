import React, { useEffect, useState } from "react";
import "./top.scss";
import { topDealUsers } from "../../data";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TopBox = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "https://server-sf9z.onrender.com/api/users?new=true",
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWE0NTU2MWE1NmYwZTBlNGE0YmZjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjU1NzM1MiwiZXhwIjoxNjk1MTk3MzUyfQ.eQZwVlCyJbOJuQCMvtruo4eIvA3avbqYTyDfWSHO5Ck ",
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  // console.log(user);

  const amount = [
    {
      id: 0,
      amount: 200,
    },
    {
      id: 1,
      amount: 149,
    },
    {
      id: 2,
      amount: 200,
    },
    {
      id: 3,
      amount: 149,
    },
    {
      id: 4,
      amount: 200,
    },
    {
      id: 5,
      amount: 200,
    },
    {
      id: 6,
      amount: 149,
    },
  ];

  return (
    <div className="top">
      <h1 className="user">Transactions</h1>
      <div className="list">
        {users.map((user) => (
          <div className="listItem" key={user._id}>
            <div className="users">
              <LazyLoadImage
                effect="blur"
                threshold={100}
                src={
                  user.profilePic ||
                  `https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`
                }
                alt="image"
              />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">₹{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
