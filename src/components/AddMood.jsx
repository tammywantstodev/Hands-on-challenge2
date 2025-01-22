import {Moods} from '../data/moodData'
import {useState} from 'react'
export default function AddMood({onAddMood}) {
const [mood, setNewMood] = useState('')

    const handleAddMood = (e) => {
        const selectedMood = e.target.value; // Get the selected mood
        setNewMood(selectedMood); // Update local state
        onAddMood(selectedMood); // Pass the selected mood to the parent
    }
    return(
        <div>
            <h2>My mood right now is:</h2>
        <form>
            <select onChange={handleAddMood} >
                {Moods.map(Mood => (
                    <option value={Mood}  key={Mood}>{Mood}</option>
                ))}
            </select>
        </form>
        </div>
    )

}