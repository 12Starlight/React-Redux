1. What is happening in our webpack.config?
> Answer: It is bundling all of our files together and converting our jsx files 
> into js using babel. 


2. How do we use `import` and `export`?(remind them of reading from last night's hw)
> Answer: We import all the files or functions we want, then import them where we want 
> to use them.


3. Why do we have this line: `import 'React'` even when we arent using `React.Component`?
> Answer: Even though it looks like we are not useing React.Component, when babel 
> transpiles a jsx file it uses the `import 'React'`. All components, thus need the 
> import statement. 