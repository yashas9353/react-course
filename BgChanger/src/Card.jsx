import React from "react";

export default function Card(props) {
  const obj = props.someObj;
  console.log(props);
  return (
    <div>
      <h1 className="text-blue-600 text-center flex">
        {obj.name} and {obj.age} and {props.name}
      </h1>
    </div>
  );
}
