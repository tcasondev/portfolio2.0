
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
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={ProjectsPage} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/resume' component={Resume} />
    </div>
  );
}

export default App;
