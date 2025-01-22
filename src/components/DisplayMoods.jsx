import React, {useState} from 'react'

export default function DisplayMoods({moods, handleRemove}) {
 return(
  <div>
         <h3>Mood List:</h3>
      <ul>
          {moods.map((mood) => (
              <li key={mood.id}>
                  <strong>{mood.mood}</strong> - <em>{mood.timestamp}</em>
                  <button onClick={() => handleRemove(mood.id)}>Remove</button>
              </li>

          ))}
      </ul>

                 </div>
                )

             }

