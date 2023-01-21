import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, seterror] = useState("search for profile");
  useEffect(() => {
    getdata();
  }, [error]);

  let getdata = async () => {
    let response = await axios.get(
      "http://kraken-dev2.eba-nihyfucf.ap-south-1.elasticbeanstalk.com/profiles/"
    );
    let data = response.data["profiles"];
    setProfiles(data);
  };

  let search_profile = async (e) => {
    e.preventDefault();
    let query = e.target.query.value;
    let response = await axios.get(
      `http://kraken-dev2.eba-nihyfucf.ap-south-1.elasticbeanstalk.com/profiles/?query=${query}`
    );
    let data = response.data["profiles"];
    setProfiles(data);
  };
  let add_profile = async (e) => {
    e.preventDefault();
    let query = e.target.query.value;
    let response = await axios.get(
      `http://kraken-dev2.eba-nihyfucf.ap-south-1.elasticbeanstalk.com/create_profile/${query}`
    );
    if (response.data["error"]) {
      seterror("User not found");
    } else {
      seterror("success");
    }
  };

  return (
    <div>
      <div className="header">
        <strong>Developer's corner </strong>
        <h2>
          Connect with your local dev's by adding your twitter handle and get
          featured
        </h2>
      </div>
      <div className="main__container">
        <br />
        <div className="search__container">
          <div className="form__wrapper1">
            <form onSubmit={search_profile} id="search__form">
              <input type="text" name="query" placeholder="try 'node dev'" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="form__wrapper2">
            <form onSubmit={add_profile} id="search__form">
              <input type="text" name="query" placeholder="add my profile" />
              <input
                type="submit"
                value="@twitter"
                className="add_twitter_btn"
              />
            </form>
          </div>
          <br />
        </div>
        <div className="profile__list">
          {profiles.map((profile, index) => (
            <div className="profile_details_preview" key={index}>
              <div className="profile_details_header">
                <Link to={profile.url}>
                  <img
                    className="profile_details_image"
                    src={profile.profile_image_url}
                    alt="profile"
                  />
                </Link>
                <div>
                  <strong>{profile.username}</strong>
                  <br />
                  <a href={profile.url}>@{profile.username}</a>
                </div>
                <p>{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
