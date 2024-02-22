import React from 'react';
import { NavLink } from 'react-router-dom';

const ListSidePanel = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Notifications</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Plans</NavLink></li>
      <li><NavLink to="/employee">Employees</NavLink></li>
      <li><NavLink to="/">Claims</NavLink></li>
      <li><NavLink to="/">Corporate Claims</NavLink></li>
      <li><NavLink to="/">A Hospitals</NavLink></li>
      <li><NavLink to="/">Profile</NavLink></li>
    </ul>
  </nav>
);

export default ListSidePanel;