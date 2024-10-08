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


const parent=React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement("div",{id:"child"},[
    React.createElement("h1",{}," i am a batman"),
    React.createElement("h2",{}," i am a batman 2"),
]), React.createElement("div",{id:"child 2"},[
    React.createElement("h1",{}," i am a batman"),
    React.createElement("h2",{}," i am a batman 2"),
])]
); 
// isley JSX exit karta ki yeh upar chutiya jo  code hai usko sahi karne ke liye 
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);



// const heading = React.createElement("h1" ,{id:"heading"} , "hello world ");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);