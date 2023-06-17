/** @format */
//Array as object element
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  //it is map function that takes callback function as argumnent
  let result=arr.map(text)
    //callback function which is passed as argumnet in map function
    function text(element ,i, arr){
      // condition for fliteration
         if(arr[i].profession=="developer")
        console.log(arr[i]);
    }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  // foreach function is high priority function bcz it takes callback function as argument
  let result=arr.forEach(function(element ,i, arr){
    //condition for shuffling
    if(arr[i].profession=="developer")
   console.log(arr[i]);
})
    
    
}

function addData() {
  //Write your code here, just console.log
  //object that is added in array
   let employee={id:4,name:"susan",age:"20",profession:"intern"} 
   // being added object from last with the help of push function
       arr.push(employee);
       //print array at console
  console.log(arr)

}

function removeAdmin() {
  //Write your code here, just console.log
  // use for in loop to treverse in index
  for(let x in arr){
    // codition for remove admin element
    if(arr[x].profession=="admin"){
      //use splice for removing object element
      arr.splice(x, x+1); 
    }      
 }
 console.log(arr)
}
// let result=arr.filter(text)
//     console.log(result)
// function text(element ,i, arr){
//       return arr[i].profession!="admin"
// }
// }

function concatenateArray() {
  //Write your code here, just console.log
 // arr[0].profession="Computer Systems Analyst"
 //create array of object 
  let employee_info = [
    { id: 5, name: "aravind", age: "28", profession: "productManager" },
    { id: 6, name: "saksham", age: "30", profession: "JavaDevloper" },
    { id: 7, name: "karn", age: "29", profession: "DatabaseAdministrator" },
  ];
  //concat the array 
  let add=arr.concat(employee_info );
  console.log(add);
}
