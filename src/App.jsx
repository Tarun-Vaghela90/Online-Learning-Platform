// import React from 'react';
import './App.css';
import CourseList from './componets/CourseCard/CourseList';
import  AppBar  from './componets/Appbar/Appbar';

function App() {
  return (
    <>
    <AppBar/>
    <div className="centerWrapper">
      <CourseList />
    </div>
    </>
  );
}

export default App;
