
import './App.css';
import NavBar from './NavBar/NavBar'
import { Route } from 'react-router';
import HomePage from './HomePage/HomePage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'

function App() {
  return (
    <div>
      <NavBar />
      <Route path='/' component={HomePage} />
      <Route path='/home' component={HomePage} />
      <Route path='/projects' component={ProjectsPage} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={Resume} />
    </div>
  );
}

export default App;
