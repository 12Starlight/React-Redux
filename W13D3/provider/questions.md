# Provider Questions

What is the difference between having a Provider and not having a Provider wrapping your application?
> Answer: A Provider allows you to have the `store` via `props` to be passed to deeply nested components using `connect()` without having to pass them to their parent compoenents first. If you did not have a provider, you would have to pass the store down through the entire compoenent tree. 

&nbsp;

What does provider allow us to do?
> Answer: A provider allows you to have the store passed to deeply nested components without explicity threading. 