/*
wnat to creat in react 
<div id ="parent">
       <div id = "child">
       <h1>hello i am a h1</h1>
       <h2>hello i am a h2</h2>

       </div>
 </div>      
*/

const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement(
        "div",
        { id: "child" },[
        React.createElement("h1", {}, "hello I am a h1"), 
        React.createElement("h2", {}, "hello I am a h2")  /* this is call arry of child*/
     ]),
     React.createElement(
        "div",
        { id: "child2" },[
        React.createElement("h1", {}, "hello I am a h1"), 
        React.createElement("h2", {}, "hello I am a h2")  /* this is call arry of child*/
     ]),
    ]

);
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
