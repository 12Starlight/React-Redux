# Debugging Arrow Functions Questions

Why is it better to make arrow functions have explict returns rather than implicit returns?
> Answer: This is so, we can debug our functions.

&nbsp;

How do we convert a fat-arrow function with implicit return to one with explicit return? (Practice this)

        // Implicit
        const functionImplicit = (whatever) => ({
          type: 'JUST_DO_IT',
          whatever
        });

        // Explicit
        const functionExplicit = (whatever) => {
          return {
            type: 'JUST_DID_IT',
            whatever
          }
        };