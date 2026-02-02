// 3: const: redeclaration not possible, assignment not possible and has blocked scope

const a = 10;
// console.log(a);

// const a = 20;  // redeclaration for const is not possible

a = 30; // this is also not possible for const(reassignment)

{
  const blockScopeVariable = "I'm a blocked scope const keyword";
  console.log(blockScopeVariable);
  console.log(a);
}
console.log(blockScopeVariable); // not accessible outside the block throw error

// // 2.let: redeclaration not possible, assignment can be done and blocked scope:

// let a = 10;
// // console.log(a);

// // let a = 20; // not possible with let
// // console.log(a);

// {
//   let blockScopeVariable = "I'm a blocked scope let keyword";
//   console.log(blockScopeVariable);
//   console.log(a);
// }
// console.log(blockScopeVariable); // not accessible outside the block throw error

// // 1. var: redeclaration, can be re-initialized/ assignment possible/updation and has a global scope

// // var a = 10;
// // // console.log(a);
// // a = 30;
// // // console.log(a);
// // var a = 20;
// // console.log(a);

// var globalVar = "I'm a global var";
// function checkGlobalScope() {
//   console.log(globalVar);
// }
// console.log(globalVar);

// checkGlobalScope();
