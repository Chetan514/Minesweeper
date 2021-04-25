import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import './Flag.css';

export const Flag = () => {
    const { boardOptions, flagCount } = useStateValue()[0];
    return (
        <div className="header__flag">
            <span role="img" aria-label="flag">
                🚩
        </span>
        : {boardOptions.totalBombs - flagCount}
        </div>
    );
};
