# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- - We use the Context API when we have global data that lots of components share (things like user or theme), or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions - the only source of information for the store, payload info from app to the store
- Reducer - functions that finalize changes to the app state, Uses the action creators to figure out the specific change in that time.
- Store - represents a single JavaScript Object, it is everything that changes and it holds state for the application.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch actions. Thunk allows action-creators for async through redux

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- Context API because of how much easier and cleaner it is to use compared to Redux. Gets rid of props and passing around data is quick between which component it is needed in.
