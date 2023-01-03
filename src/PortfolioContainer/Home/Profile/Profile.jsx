import React from "react";
import Typical from "react-typical";
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href="https://github.com/Jeffg2221">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jeffg2221/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, Im <span className="highlighted-text">Jeff</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev 🔴",
                                        1000,
                                        "Full Stack Developer 💻",
                                        1000,
                                        "MERN Stack Dev 😎",
                                        1000,
                                        "Cross Platform Dev 🌐",
                                        1000,
                                        "React/React Native Dev 🏆",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack for building applications with front and back end
                                operations.
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn"> Lets work together {" "}</button>
                        <a href="Jeff.Gomez.resume.Dec.2022.pdf" download='Jeff.Gomez.resume.Dec.2022.pdf'>
                            <button className=" btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
