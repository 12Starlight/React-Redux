// Redirect Example
<Route 
  exact 
  path='/'
  render={() => (this.PaymentResponse.currentUser ? <Home /> : <Redirect to='/login' /> )}
/>

// Not the best Auth pattern, more in depth patterns will be taught at a later time. 



