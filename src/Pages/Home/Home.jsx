import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className=" container lg-h-100 container-home">
        <div className="lg-h-100">
          <div className="row">
            <div className="col-6 mt-19">
              <h1 className=" heading-profile animate-pulse pb-3 font-bold">
                MERN Stack Developer
              </h1>
              <p className=" containerhome text-black mt-9">
                An electrical engineering graduate with a GPA of 3.25, has an
                interest in web development and has attended MERN bootcamp at
                Eduwork and can create a web from scratch from both the frontend
                and backend sides or even both. Skills learned in the bootcamp
                include React Js, MongoDB, Express Js, Node JS, JSON, JWT,
                Bootstrap and Tailwind CSS. During college, actived in
                organizations so he was used to collaborating with teams.
                Currently open for web developer position.
              </p>
            </div>
            <div className="img-profil col-6">
              <img src="./images/profile2.png" alt="" className="m" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
