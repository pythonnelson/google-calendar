// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';

function App() {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  console.log(currentMonth)
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div classNameflex flex-1>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
