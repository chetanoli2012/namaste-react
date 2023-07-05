import React from "react";
import { GITHUB_FETCH_SINGLE_USER_API } from "../utils/constants";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(`${GITHUB_FETCH_SINGLE_USER_API}chetanoli2012`);
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component has been updated with the new data");
  }

  componentWillUnmount() {
    console.log("This is where we do cleanup");
  }

  render() {
    const { userInfo } = this.state;
    return !Object.keys(userInfo).length ? (
      <Shimmer />
    ) : (
      <div className="user-card">
        <img
          className="user-avatar-url"
          alt="Github user avatar"
          src={userInfo?.avatar_url}
        ></img>
        <h2>Name: {userInfo?.name || "N/A"}</h2>
        <h3>Location: {userInfo?.location || "N/A"}</h3>
        <h4>Contact: {userInfo?.login || "N/A"}</h4>
      </div>
    );
  }
}

export default UserClass;
