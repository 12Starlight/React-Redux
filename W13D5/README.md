React W13D5 Outline

- Intro to Jbuilder
    - What are the side effects of using `render json: @users`?
    - What are two reasons we want to use jbuilder over `render json:`?
        - Filter data we send up
        - Add more to the data we send up
    - Where do we put our json.jbuilder files?
    - What are some jbuilder methods we can use and how do they change our json response?
    - How do we make our routes that return json default to returning json instead of html?
- Jbuilder Documentation
    - Take a look at this and compare how the json.jbuilder methods convert the data into json objects
- Normalizing State Shape
    - Why do we want to normalize the data?
        - Data can be easily duplicated if we don’t normalize it, making it harder to update the data across all instances. If we normalize the data, then we never have any repeat data.
        - Nested data means that the reducer logic has to be more complex and updating deeply nested data can be hard. Normalizing the data removes this issue
        - If one thing in a parent of deeply nested data is updated, then any information watching for changes in those nested data could re-render unnecessarily, causing many unnecessary re-renders. Normalizing the data makes re-render caused by change in data minimal
- Updating Normalized Data
    - See Slice Reducer Composition Section Only
        - action has a type
        - Add commentId to the comments array (in addComment function) in the posts reducers (through the  postsById function)
        - Add actual comment information (addCommentEntry function) in the comment reducer (through commentsById function)
- jBuilder Lecture
    - See how to make jbuilder files and see how to use jBuilder documentation
- Normalized State Lecture
    - How to normalize state in reducers using jBuilder info
- Selectors Lecture
    - See how to create selectors and why they are useful
- Jbuilder Project
    - Learn how to create jBuilder files and how we can see their output using the browser
- Pokedex (Part 1)
    - Learn how to create a React-Redux frontend app using jBuilder


Need to make sure this still works. Double checking that this works : D