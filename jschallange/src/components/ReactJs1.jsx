import React from "react";
//***all js needed for react
//**Object
const person = {
  name: "drippy",
  age: 20,
  isMarried: false,
};
const { name, age, isMarried } = person;
//can be the same with
{
  /*const name="jock"
const age=20;
const person ={
    name,
    age,
    isMarried:false.
};*/
}
//use values of person and change the name in it to jack
//**Speread syntax
const person2 = { ...person, name: "jack" };
const names = ["drippy", "jack", "moana"];
const names2 = [...names, "joel"];

//** filter and map functions
//execute names
names.map((name) => {
  return <div>{name}</div>;
});
names.filter(() => {
  return name !== "pedro";
});

//**Async await, promise and fetch

//**Arrow function or function
const ReactJs1 = () => {
  let age = 10;
  //**Ternary operators
  let name = age > 10 ? "drippy" : "jock"; //if this is true this else this
  //also if this is true this else this
  return age > 10 ? (
    <div>
      <button
        onClick={() => {
          console.log("essentialexample");
        }}
      ></button>
    </div>
  ) : (
    <div>jack</div>
  );
};

export default ReactJs1;
