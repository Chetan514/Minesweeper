import React, { useState } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import { initialState } from '../../../context/reducer';

export const GameLevel = () => {
    const [{isGameOver, isGameActive, level},dispatch] = useStateValue();
    const [selectedValue, setValue] = useState(level)

    React.useEffect(() => {
        setValue(level)
    },[level]);

    const levels = ['Easy', 'Medium', 'Hard']

    const handleChange = (value) => {
        let rows, cols, length, totalBombs
        if(value === 'Easy') {
            rows = cols = 8
            length = 60;
            totalBombs = 4

        } else if(value === 'Medium') {
            rows = cols = 16
            length = 30;
            totalBombs = 40
        } else {
            rows = cols = 16
            length = 30;
            totalBombs = 50
        }
        const boardOptions = {
            rows,
            cols,
            length,
            totalBombs
        }

        setValue(value);
        dispatch({ type: 'SET_LEVEL', payload: {...initialState, boardOptions, level : value} });
    }

    return (
        <div className="level">
            <select name="level" onChange={(e) => handleChange(e.target.value)} defaultValue={selectedValue} disabled={!isGameOver && isGameActive}>
                {
                    levels.map((level, i) => (
                        <option key={i} value={level}>{level}</option>
                    ))
                }
            </select>
        </div>
    );
};
