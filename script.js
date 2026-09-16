//question 1.1
const first_name = "John";
const last_name = "Javascript";
let age1 = "21";
let university = "University of John Programmer";
let year_of_study = 3;

//question 1.2
let math_grade = 7;
let java_grade = 6;
let english_grade = 9;

const total_grades = math_grade + java_grade + english_grade;
const average_grade = total_grades / 3;

console.log("Total grade: " + total_grades + "\nAverage grade: " + average_grade);

//question 1.3
let price = 80;
let quantity = 3;
let discount = 0.10;

const final_price = (price * quantity) * discount
console.log("Final price: " + final_price);

//question 1.4
let a = 15;
let b = 4;

console.log(a % b);
console.log(a ** b);
console.log(a > b ? true : false);
console.log(a == b ? true : false);

//question 2.1
let grade = parseInt(prompt("Input grade: "));

if(grade >= 90)
{
    console.log("Excellent");
}
else if(grade >= 80)
{
    console.log("Very Good");
}
else if(grade >= 70)
{
    console.log("Good");
}
else if(grade >= 50)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//question 2.2
let age;

if(age >= 18)
{
    console.log("Can vote and receive a student discount.");
}
else if(age >= 16)
{
    console.log("User can receive a student discount.");
}
else
{
    console.log("The user is elligable to nothing.");
}

//question 2.3
let username = "student";
let password = "js123";

if(username == "student" && password == "js123")
{
    console.log("Login successful");
}
else
{
    console.log("Invalid credentials");
}

//question 2.4

//== compares two values while ignoring their data type
console.log(2 == "2") //returns true

//=== compares two values while taking into account their data type
console.log(2 === "2") // returns false

//question 3.1
const student =
{
    firstName: "Josh",
    lastName: "Programmer",
    age2: 25,
    studentID: "JS975843",
    program: "IT",
    year: 2023,
    averageGrade: 80
}

//question 3.2
console.log(student.firstName + " " + student.lastName + ", " + student.program + ", " + student.year + ", " + student.averageGrade);

//question 3.3
student.averageGrade = 90;
student.year = 2024;

student.email = "josh.programmer@school.it"

let text = "";
for(let x in student)
{
    text += student[x] + " ";
}

//question 3.4
function getStatus(object)
{
    if(object.averageGrade >= 90)
    {
        return "Excellent student";
    }
    else if(object.averageGrade >= 70)
    {
        return "Good student";
    }
    else
    {
        return "Needs improvement";
    }
}

console.log(getStatus(student));

//question 4.1
const newStudent =
{
    firstName: "Jeff",
    lastName: "Jefferson",
    age: 20,
    program: "IT",
    averageGrade: 65,
    creditsCompleted: 6
}

//question 4.2
function calcEligability(student)
{
    if(student.age >= 18 && student.averageGrade >= 50)
    {
        return "Eligable";
    }
    else
    {
        return "Not Eligable";
    }
}

//question 4.3
let courseFee = 500;

function calcPrice(student)
{
    if(student.averageGrade >= 90)
    {
        return courseFee = courseFee * 0.25;
    }
    else if(student.averageGrade >= 80)
    {
        return courseFee = courseFee * 0.15;
    }
    else if(student.averageGrade >= 70)
    {
        return courseFee = courseFee * 0.1;
    }
    else
    {
        return courseFee;
    }
}

console.log(calcPrice(newStudent));

//question 4.4
function calcStudyLevel(student)
{
    if(student.creditsCompleted >= 120)
    {
        return "Graduating";
    }
    else if(student.creditsCompleted >= 60)
    {
        return "Advanced";
    }
    else if(student.creditsCompleted >= 30)
    {
        return "Intermediate";
    }
    else
    {
        return "Beginner";
    }
}

console.log(calcStudyLevel(newStudent.creditsCompleted));

//question 4.5
console.log
(
    "----- STUDENT REPORT -----" + "\n" +
    "\n" +
    "Name: " + newStudent.firstName + " " + newStudent.lastName + "\n" +
    "Program: " + newStudent.program + "\n" +
    "Average Grade: " + newStudent.averageGrade + "\n" +
    "Eligability: " + calcEligability(newStudent) + "\n" +
    "Course Fee: " + calcPrice(newStudent) + "\n" +
    "Study Level: " + calcStudyLevel(newStudent) + "\n" +
    "\n" +
    "--------------------------"
);