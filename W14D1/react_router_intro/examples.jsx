// Import React Redux
import { Route, HashRouter } from 'react-router-dom'


// Route Examples
// will work, but unnecessarily slow
<Route path="/one" component={() => <span>One</span>} />

// preferred
<Route path="/one" render={() => <span>One</span>} />


// HashRouter And Route Working Example
const Root = () => (
  <HashRouter>
    // HashRouter can only have a single child component, so we wrap our routes in this div
    <div>
      <Header />
      <Route exact path="/" component={Feed} />
      <Route path="/users" component={Users} />
    </div>
  </HashRouter>
);
export default Root; 


// Route Wildcard Example // separate component that has routes for that slice of state
const Users = () => (
  // render the index of no id is included
  <Route exact path="/users" component={UsersIndex} />

  // otherwise render the profile page for that user
  <Route path="/users/:userId" component={Profile} />
); 
