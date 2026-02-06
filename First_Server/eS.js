const express = require("express");

const app = express();


app.get("/User", (req, res) => {
    res.send("Hello 👋 Welcome to my Express Server");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// Three pillar of react
// Component - building blocks of a website 
// {
//     class component- created using ES6 class
//     functional component- created using JSX

// }
// Props - properties to pass data from one component to another without using import export
// State - used to manage data within a component that can change over time
// Lifecycle methods - methods that get called at different stages of a component's life (mounting, updating, unmounting){
//     componentDidMount() - called after the component is rendered
//     componentDidUpdate() - called after the component is updated
//     componentWillUnmount() - called before the component is removed from the DOM
// }