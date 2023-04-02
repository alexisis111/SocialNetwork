import React from 'react';
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div>
            <h1>This page not found, Go to <Link to='/profile'>profile</Link></h1>
        </div>
    );
}

export default NotFoundPage;
