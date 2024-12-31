// React

const heading = React.createElement(`h1`, { id: "heading" }, `Hello World`);

const root = ReactDOM.createRoot(document.getElementById(`root`));

// console.log(heading); // object

root.render(heading);
