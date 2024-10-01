// src/App.js
import React from 'react';
import Calculator from './Pages/calculator';
import UserDataForm from './Pages/form';
import ResumeBuilder from './Pages/resume';

const App = () => {
    return (
        <div>
            <h1>Calculator</h1>
            {/* <Calculator />  */}
            {/* <UserDataForm /> */}
            <ResumeBuilder />
        </div>
    );
};

export default App;
