import React from "react";
import "./TeamCard.css";

const TeamCard = ({ info, secondary }) => {
  return (
    <div className="team-card" style={secondary ? {background: 'var(--primary-500)'} : {}}>
      <div className="team-profile">
        {info.attributes.avatar.data && (
          <img
            src={`http://154.53.59.178:30002${info.attributes.avatar.data.attributes.url}`}
            width={110}
            height={110}
            alt="profile"
          />
        )}
      </div>
      <div className="team-info-container">
        <p className="team-info-name" style={secondary ? {color: 'black'} : {}}>{info.attributes.name}</p>
        <p className="team-info-position" style={secondary ? {color: 'black'} : {}}>{info.attributes.position}</p>
        {/* <a href={info.attributes.linkedin}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clip-path="url(#clip0_2580_27751)">
              <path
                d="M40.8 0H7.2C3.22355 0 0 3.22355 0 7.2V40.8C0 44.7765 3.22355 48 7.2 48H40.8C44.7765 48 48 44.7765 48 40.8V7.2C48 3.22355 44.7765 0 40.8 0Z"
                fill="#0077B5"
              />
              <path
                d="M13.3125 16.4062C15.2282 16.4062 16.7812 14.8532 16.7812 12.9375C16.7812 11.0218 15.2282 9.46875 13.3125 9.46875C11.3968 9.46875 9.84375 11.0218 9.84375 12.9375C9.84375 14.8532 11.3968 16.4062 13.3125 16.4062Z"
                fill="white"
              />
              <path
                d="M22.875 18.1875V36.75V18.1875ZM13.3125 18.1875V36.75V18.1875Z"
                fill="white"
              />
              <path
                d="M22.875 18.1875V36.75M13.3125 18.1875V36.75"
                stroke="white"
                stroke-width="6.1875"
              />
              <path
                d="M25.875 26.4375C25.875 24.5625 27.0938 22.6875 29.25 22.6875C31.5 22.6875 32.3438 24.375 32.3438 26.9062V36.75H38.5312V26.1562C38.5312 20.4375 35.5312 17.8125 31.4062 17.8125C28.2188 17.8125 26.625 19.5938 25.875 20.8125"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2580_27751">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default TeamCard;
