const div=  document.querySelector("div");
const input=  document.createElement("input");
input.value="Full Stack Course";
input.type="text";
input.placeholder="Enter some content";
input.id="Course Field";
const h1= document.createElement("h1");
h1.innerText="Dynamic Content in HTML";
const button=document.createElement("button");
button.textContent="Click me"
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener('click',function (){
    window.alert("Hey , This is an Window");
});