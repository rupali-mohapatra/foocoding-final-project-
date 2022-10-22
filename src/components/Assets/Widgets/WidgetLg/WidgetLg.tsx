import React from 'react';
import './WidgetLg.css';

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>

      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2012/02/23/08/37/bag-15709_1280.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Oct 2022</td>
            <td className="widgetLgAmount">$245.00</td>
            <td className="widgetLgStatus">Approved</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Andrews Doe</span>
            </td>
            <td className="widgetLgDate">13 Feb 2022</td>
            <td className="widgetLgAmount">$785.00</td>
            <td className="widgetLgStatus">Approved</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_1280.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Emily Cooper</span>
            </td>
            <td className="widgetLgDate">15 Nov 2022</td>
            <td className="widgetLgAmount">$545.00</td>
            <td className="widgetLgStatus">Pending</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_1280.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Pernille Frotzler</span>
            </td>
            <td className="widgetLgDate">10 Jun 2022</td>
            <td className="widgetLgAmount">$300.00</td>
            <td className="widgetLgStatus">Declined</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
