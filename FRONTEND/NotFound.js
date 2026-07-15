import React from 'react';

const NotFound = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center">
                <h1 className="display-1">404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a href="/" className="btn btn-primary">Go Home</a>
            </div>
        </div>
    );
};

export default NotFound;
