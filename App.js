// const heading = React.createElement(
//     "h1",
//      {id:"heading" , xyz:"abc"}, 
//      "Hello World from React"
//      );

//      console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const heading = React.createElement(
//                 "h1",
//                 {  id:"myheading" , xyz:"abc" }, 
//                 "Hello welcome to my World"
//                 );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//                  "div",
//                   { id:"parent"},
//                         [React.createElement(
//                             "div",
//                             {id:"child"},
//                                 [React.createElement("h1", {id:"childs1"}, "Its a heading tag1"),
//                                 React.createElement("h2", {id:"childs2"}, "Its a child h2 tag")]
//                         ),
//                         React.createElement(
//                             "div",
//                             {id:"child2"},
//                                 [React.createElement("h1", {id:"childs3"}, "Hello this is childs tag"),
//                                 React.createElement("h2", {id:"childs4"}, "This is childs tag 4")],
//                         )]
//                 );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const heading = React.createElement(
    "div",
    {id:"parent"},
        [React.createElement(
            "div",
                {id:"child"},
                [React.createElement("h1", {id:"childA"}, "Hello A"),
                React.createElement("h1", {id:"childB"}, "HelloB")]
        ),
        React.createElement(
            "div",
            {id:"child2"},
                [React.createElement("h2", {id:"child2A"}, "Hello child2A"),
                React.createElement("h2", {id:"child2B"}, "Hello child2B")]
        )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);