# React Board Game Inventory App with Auth

**Visit the live demo here:** [Live Demo](https://agitated-curran-e4cde6.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login and Signup using the login and signup form. On success, redirect to the `/board-games` page. | .5|
| If the user tries to visit any page but they are not logged in, redirect them to this Auth page   |        .5 |
| Logout by clicking the logout button                                                       |       .5 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : contains routes for home/auth page, `create`, `board-games/:id`, `/board-games`, `/shopping-list` |.5|
| `App()` : tracks user state, passing the `setUser` callback to the `AuthPage` |.5|
| `App()`:  If user is logged in, header contains logout button and links to the Create and List pages. |.5|
|  `App()`:  Use a ternary to decide whether to let users visit particular routes, depending on whether there is a user in `App.js` state |1|
| `AuthPage({ setUser })` : tracks user form state and allows users to sign up and sign in |1|
| `AuthPage({ setUser })` : Sets the `user` in `App.js` state, using the `setUser` function passed down from the parent |1|
| `CreatePage()` : Tracks form state for `title`, `genre`, `min_players`, `max_players`, designer` and `description`. Uses controlled form inputs (value property is linked to react state) |1|
| `CreatePage()` : On submit, create a game in supabase using form data and redirect user back to the list page using the correct react-router-dom hook |1|
| `DetailPage()` : Fetches and displays the appropriate game on load. The `useEffect` dependency array should account for changes in the URL id param. |1|
| `ListPage()` : Fetches and displays all games on load by using .map and the `Game` component. |.5|
| `Game()` : Renders a single game, with a react-rotuer-dom Link that takes the user to the detail page  |.5|

### Stretch goal ideas:
- Refactor the form that we use in Update and Create to a resuable component. It will replace the form in CreatePage and UpdatePage, since those two are basically the same, with very small differences. Looking at those difference youy will be to answer the question: What props does this form component need?
- 
![image](https://user-images.githubusercontent.com/16160135/150246042-72212c59-82b4-46d5-8cbc-a053d661ab31.png)

![image](https://user-images.githubusercontent.com/16160135/150426141-462957b3-9342-47f8-824a-b09ebf39d7b8.png)
