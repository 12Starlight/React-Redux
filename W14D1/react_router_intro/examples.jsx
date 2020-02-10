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