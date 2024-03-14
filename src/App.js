import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);


export default App;