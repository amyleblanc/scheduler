import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList({days, value, onChange}) {
  return (
    <>
      <ul>
        {
          days.map(d => (
            <DayListItem 
              key={d.id} 
              name={d.name} 
              spots={d.spots} 
              selected={d.name === value} 
              setDay={() => onChange(d.name)}
            />
          ))
        }
      </ul>
    </>
  );
}