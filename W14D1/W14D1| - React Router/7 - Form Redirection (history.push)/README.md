# **Form Redirection Questions**

1. How do we use history.push?
>Answer: Use <kbd>< Redirect to='/somewhere' ></kbd> and <kbd>< Switch ></kbd> statements instead. However, if we did want to do it in let us say a <kbd>#handleSubmit</kbd> function, we would first return the <kbd>response</kbd>. Then attach a <kbd>.then</kbd> onto the returned response and find the <kbd>id</kbd>. This is done by first, using <kbd>Object.values()</kbd> and keying into that array to find the id. Then setting that to <kbd>bleatId</kbd>. Afterwords, we create a variable <kbd>bleatForm</kbd> and set it to <kbd>this</kbd> in order to point to the returned response which we can use as <kbd>bleatForm.props.history.push(`/bleats/${ bleatId }`)</kbd>.

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;1.jpg "Returning Response Example")

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;2.jpg "")