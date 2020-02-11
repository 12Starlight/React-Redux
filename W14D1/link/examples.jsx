// Link to='/somewhere'
<Link to='/about'>About</Link> 

// Link onClick={}
<Link to='/about' onClick={e => this.handleClick(e)} >Link</Link>


// Nav Link activeClassName prop example
// app.jsx
<NavLink to={`users/${user.id}`}
  activeClassName='active'>{user.name}</NavLink>

// when at path `users/123` the following html is rendered
<a href='#/users/123' class='active' >Michael</a>

// when not at path `users/123` the following is html rendered
<a href='#/users/123' >Michael</a>


// Nav Link activeStyle prop example
<NavLink to={`users/${user.id}`}
  activeStyle={{fontWeight: 'bold'}} >{user.name}</NavLink>

// when at path `users/123` the following html is rendered
<a href='#/users/123' style='font-weight:bold;'
  class='active'>Michael</a>

// when not at path `users/123` the following is html rendered
<a href='#/users/123'>Michael</a>

