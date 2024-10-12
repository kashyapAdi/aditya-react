/* <div id="parent">
    <div id =" child">
        <h1>i am a batman</h1>
        <h2>i am barman 2 </h2>
    </div>
</div> 
 <div id =" child 2">
        <h1>i am a batman</h1>
        <h2>i am barman 2 </h2>
    </div> 
react element(object)=html(browser understands)

*/
// const parent=React.createElement(

//     "div",
//     {id:"parent"},
//    [ React.createElement("div",{id:"child"},[
//     React.createElement("h1",{}," i am a man  ")
//     React.createElement("h2",{}," i am a batman 2"),
// ]), React.createElement("div",{id:"child 2"},[
//     React.createElement("h1",{}," i am a batman"),
//     React.createElement("h2",{}," i am a batman 2"),
// ])]
// );
//  isley JSX exit karta ki yeh upar chutiya jo  code hai usko sahi karne ke liye
// const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent);

// const heading = React.createElement("h1" ,{id:"heading"} , "hello world ");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// todo                          React Element 
// ?how we create heading in react  ,if we wanted to render elemnent to work in html we use render

// ?const heading = React.createElement("h1", {id:"heading"}, " namaste aditya hu me");

// ?JSX (transpiled before it reaches the js)- parcel-babel : is the java script compiler
// ?jsx in sab chutiye code ko sahi karega , ab jsx se heaading banaate hai
//?babel is javscript compiler, it convert jsx to react .create element,it convert diff type of code to different code

// const jsxHeading= <h1 id="heading">namaste aditya hu me using jsx</h1>;

//! this is react element it contain small letter and no arrorw function

// const elem=<span> react element</span>
// const title= (

//     <h1 className =" head">
//         {elem}
//         me hu tera
//         </h1>
// );



//todo  this is React Component because react component have capital letter 
const Title = ()=> (<h1 class="head">namaste aditya hu me using jsx</h1>);
const Title1= ()=> (<h1 class ="headd"> namaste me hu avinash</h1>);

// !REACT COMPONENT types
// ?CLASS BASED COMPONENT-OLD  WAY
//? FUNCTIONAL COMPONENT -NEW WAY
  

// todo react functional component

// ?we can write in this method also with return function 
//  const HeadingComponent=()=> {
//     return <h1 className ="heading">namaste aditya hu me</h1>;
// };

const title= (

    <h1 className =" head">
        me hu tera
        </h1>
);
 
// const data = api.getData();

//! component composition:-
// we can write javascript code using {} in below 
const number= 10000;
const HeadingComponent=()=> (
    <div id ="container">
        <Title/>
        <Title1/>
        {title}
     <h2>{number}</h2> 
        <h1 className="heading">namaste  me</h1>
    </div>
);
  




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);              // render is a function which is used to render react element to html
