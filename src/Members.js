import React from "react";
import profile from "./profile1.jpg";
import profile6 from "./profile6.jpg";
import person3 from "./person3.jpg";
import person4 from "./person4.jpg";
import person5 from "./person5.jpg";
import users from "./Components/user.json";

let images = [profile, profile6, person3, person4, person5];

function Members() {
  return (
    <div>
      <div className="users p-20">
        <div className="flex flex-wrap justify-center">
          {users.map((user) => (
            <div
              className="user  p-5 bg-slate-400 w-60 mb-10 ml-5"
              key={user.id}
            >
              <div className="pl-5 rounded-full">
                <img
                  src={images[user.id]}
                  alt="img"
                  className=" max-h-40 rounded-full"
                ></img>
              </div>

              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
