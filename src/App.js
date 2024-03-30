// import React from 'react';
// import './App.css';
// import LandingPage from './components/LandingPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Learning Resources</h1>
//       </header>
//       <main>
//         <LandingPage />
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books';
import Websites from './components/Websites';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* Navigation links */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/websites">Websites</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {/* Route definitions */}
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/books" component={Books} />
            <Route path="/websites" component={Websites} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;