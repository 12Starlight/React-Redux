// Switch Example
<Switch>
  <Route path='some/url' component={SomeComponent} />

  <Route path='some/other/url' component={OtherComponent} />
    // without the switch, DefaultComponent would always render
    // now it will only render when neither of the other routes match  
  <Route component={DefaultComponent} />
    // Note: we have not set a path in the above Route, so it will simply 
    // use the default path of '/'
</Switch>