import React from "react";

type Control = "TextBox" | "Dropdown";
let notes: Control;

class ComplexTypes extends React.Component {
  render() {
    return <div> This is Complex Type </div>;
  }
}

export default ComplexTypes;

type StringOrArray = string | string[];

function stringArray(stringOrArray: StringOrArray): string {
  if (typeof stringOrArray === "string") {
    return stringOrArray;
  } else if (typeof stringOrArray === "object") {
    return stringOrArray[0];
  } else {
    return stringOrArray[0];
  }
}

// class Person {
//   id: Number;
//   firstName: string;
//   surname: string;
// }

// class Company {
//   id: number;
//   name: string;
// }

// type PersonOrCompany = Person | Company;

// function logName(personOrCompany: PersonOrCompany) {
//   if (personOrCompany instanceof Person) {
//     console.log(`${personOrCompany.firstName}
//     ${personOrCompany.surname}`);
//   } else {
//     console.log(personOrCompany.name);
//   }
// }



function getData<T>(url : string) : Promise<T> {
    return fetch(url).
    then( response => {
       return response.json();
    });
}


function codense(stringOrArray : string | string[]) : string | string[]{
    return typeof stringOrArray === "string" ? stringOrArray : stringOrArray;
}