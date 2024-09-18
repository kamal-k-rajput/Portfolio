import React from "react";
import { Link } from "react-router-dom";

export const DisplayList = ({ listItems }) => {
  return (
    <table className="unorderred">
      <tbody>
        {listItems.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="singer">{item.singer}</td>
              <td>
                <Link to={item.link} className="play-button">
                  Listen
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
