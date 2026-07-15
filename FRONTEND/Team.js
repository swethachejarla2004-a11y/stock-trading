import React from 'react';

const Team = () => {
    return (
        <div className="team-container">
            <h1>People</h1>
            <div className="team-members">
                <div className="member">
                    <img src="media/images/nithinKamath.jpg" alt="Nithin Kamath" style={{borderRadius: '100%', width: '300px', height: '300px', objectFit: 'cover'}} />
                    <h3 className="mt-4">Nithin Kamath</h3>
                    <p>Founder, CEO</p>
                </div>
                <div className="member">
                    <img src="media/images/nikhilKamath.jpg.png" alt="Nikhil Kamath" style={{borderRadius: '100%', width: '300px', height: '300px', objectFit: 'cover'}} />
                    <h3 className="mt-4">Nikhil Kamath</h3>
                     <p>Co-Founder & CFO</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
