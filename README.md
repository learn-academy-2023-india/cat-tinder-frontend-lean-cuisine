# Testing with Jest and React Testing Library

- Jest: JavaScript Testing Framework
- React Testing Library: provides methods to write test scripts 
- Static: Consists of peer reviews and inspecting pages for mistakes
- Unit: Looks at one portion of code and verifies the result
- Integration: Tests how our code is working together in our application
- End-to-end: Automate the user going through the whole application


# Setup
- React testing library and Jest are already installed in your React app!
- Run `yarn test`
- Render: Allows me to call upon that component
- Screen: Allows me to actually see the whole node tree that gets sent to a user
- Component that is being tested must be imported
- Wrap BrowserRouter around component in render
- All test files besides App.test.js should be placed in a folder within src named `__tests__`


# Debugging
- screen.debug(): Shows the DOM nodes
- screen.logTestingPlaygroundURL(): Provides a link to an interactive page that helps visualize your page and even help write tests

