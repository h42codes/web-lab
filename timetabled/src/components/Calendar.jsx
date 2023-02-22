import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          {" "}
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </thead>
        <tbody>
          {" "}
          <tr>
            <td className="time">8 am</td>
            <td></td>
            <td></td>
            <Event event="Starbucks ☕️" color="green" location="Somewhere" />
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="Somewhere" />
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="Somewhere" />
            <td></td>
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">12 pm</td>
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
            <td></td>
            <Event event="Starbucks ☕️" color="green" location="Somewhere" />
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="Somewhere" />
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="Somewhere" />
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
            <td></td>
          </tr>{" "}
          <tr>
            <td className="time">5 pm</td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <Event
              event="Fancy Dinner 🎩"
              color="green"
              location="Maple & Ash"
            />
            <Event
              event="Fancy Dinner 🎩"
              color="green"
              location="Maple & Ash"
            />
            <Event event="The Bean 🫘" color="blue" location="Somewhere" />
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Somewhere" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
