import './App.css'
import React, { useState } from "react";
import AddMood from './components/AddMood'
import DisplayMoods from './components/DisplayMoods'
function App() {
    const [moods, setMoods] = useState([]);

    const handleAddMood = (mood) => {
        const newMood = {
            id: Date.now(), // Unique ID
            mood: mood,
            timestamp: new Date().toLocaleString(), // Current timestamp
        };
        setMoods([...moods, newMood]);
    }
    const handleRemove=(id)=> {
       setMoods(moods.filter((mood) => mood.id !== id))
    }
  return (
    <>
      <div>
          <h1>Mood Tracker</h1>

<AddMood onAddMood={handleAddMood}/>
          <DisplayMoods moods={moods} handleRemove={handleRemove}/>
      </div>
    </>
  )
}

export default App
