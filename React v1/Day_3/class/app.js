import React from "react"; //
import ReactDOM from "react-dom/client"; //

const heading = React.createElement(
  // object till renders
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// jsx
const jsxHeading = <h1 id="heading"> React -- JSX🚀</h1>; // object till render

// console.log(jsxHeading);

// @ functional component

const elem = <span>React Element</span>;

const Title = function () {
  return <h1 className="heading">TITLE React using JSX🚀</h1>;
};
const HeadingComponent2 = () => (
  <>
    {elem} {/* using react element */}
    <Title /> {/* Using component in component- component composition*/}
    {Title()}
    <h1 className="heading">Namaste React from Functional Component</h1>
  </>
);

//                                      (or)

const HeadingComponent3 = () => {
  return (
    <div className="container">
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // replace everything
// root.render(jsxHeading);
root.render(<HeadingComponent2 />);
