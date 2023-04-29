import React from 'react';
import qzone1 from '../../../src/assets/qZone1.png';
import qzone2 from '../../../src/assets/qZone2.png';
import qzone3 from '../../../src/assets/qZone3.png';

const QZone = () => {
    return (
        <div className='text-center bg-light py-2'>
            <h3>Q-Zone</h3>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default QZone;