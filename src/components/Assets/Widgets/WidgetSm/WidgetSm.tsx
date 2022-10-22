import React from 'react';
import { FaEye } from 'react-icons/fa';
import './WidgetSm.css';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <FaEye className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mary Johansson</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <FaEye />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mark Andersson</span>
            <span className="widgetSmUserTitle">Graphic Designer</span>
          </div>
          <button className="widgetSmButton">
            <FaEye />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aleena Murphy</span>
            <span className="widgetSmUserTitle">Software QA </span>
          </div>
          <button className="widgetSmButton">
            <FaEye />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
