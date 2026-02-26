//objects:
let students ={
    name: "saleem",
    regNo: 2380805,
    Section: "C"
    }
    console.log(students.name);
    console.log(students.regNo);

//objects inside array:
let Employee ={
    name: "Ali",
    regNo: 805,
    Section: "A"
    ,course:[{
        field:"Plumber",
        Salary: 5000,
        timing:"5 PM"

    }]
}
    console.log(Employee);
    console.log(Employee.length);
    console.log(Employee.course[0].field);
    
    
    //Array functions:
    let array=["Saleem", "Ali", "Ahmed","Abdullah","Nair"]
    console.log(array.length);
    console.log(array);
    console.log(array.push("naveed"));
    console.log(array);
    console.log(array.pop());
    console.log(array);

     
     

    for(let i=0; i<10; i++){
        console.log("Baig");
        
    }
let i=0;
    while(i<9){
         i++;
         console.log("Hamad");
    }
 
    let j=0;
//do {
  //  console.log("Musharraf");
  //  i++;
    
//} while (j<4);
    

//conditions:
    let marks=85;
    if(marks>=90) {
        console.log("A");
    }
    else if(marks>=80) {
        console.log("B");
    }
    else if(marks>=70) {
        console.log("C");
    }
    else if(marks>=60) {
        console.log("D");
    }
    else{
        console.log("Fail");
        
    }

    // Switch:
    let a=30;
    let b=2;
    let operator='+';
    let result;
switch (operator) {
    case '+':

        result=a+b;
        console.log(result);

        break;
    
         case '-':

        result=a-b;
        console.log(result);
        
        break;
         case '*':

        result=a*b;
        console.log(result);
        
        break;
        
        case '/':

        result=a/b;
        console.log(result);
        
        break;
    default:
        console.log("error");
        
        break;
}
    
    