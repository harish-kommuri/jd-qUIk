import React from 'react';
const UserProfileCard = ({ name, id, profilePicture }) => {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #0076d7',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            maxWidth: '300px'
        }}>
            <div style={{ textAlign: 'center', display: "flex" }}>
                <img src={profilePicture} alt={name} style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px solid #0076d7',
                    marginBottom: '15px'
                }}
                />
                <div style={{ marginLeft: "10px" }}>
                <h3 style={{
                    color: '#111111',
                    margin: '10px 0'
                }}>{name}</h3>
                <p style={{
                    color: '#0076d7',
                    fontWeight: 'bold',
                    backgroundColor: '#f0f8ff',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    display: 'inline-block'
                }}>ID: {id}</p>
                </div>
            </div>
        </div>
    )
};

export default UserProfileCard;
