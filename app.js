// { OBJECT }

// SYNTAX OF OBEJCT
// var studentobject = {
//     stdName: "Arsh",
//     stdAge: 19,
//     stdCity: "karachi",
//     stdEmail: "arsh@gmail.com",
//     stdGender: "male",
// }

// {Consoling methond }

// 1.Bit Hard
// console.log(studentobject["stdEmail"])

// 2. Bit simple
// console.log(studentobject.stdEmail)

// {Method to push data in object }

//               Method # 1 { BIT HARD }
// pushing Array into Object
// studentobject["stdCourses"] = ["HTML", "CSS", "JS"]
// console.log(studentobject);

//               Method # 2 { SMIPLE }
// pushing Array into Object
// studentobject.courses = ["html", "css", "js"]
// console.log(studentobject);


// Type #2 of { Function }

// Anonymous Function
// var abc = function () {
//     console.log("Anonymous Function Call..")
// }
// abc()


// {OBJECT METHOD }
// var studentobject = {
//     stdName: "Arsh",
//     stdAge: 19,
//     stdCity: "karachi",
//     stdGetName: function () {
//         console.log("Hello world..")
//     },
//     stdEmail: "arsh@gmail.com",
//     stdGender: "male",
// }
// Calling method
// studentobject.stdGetName()


// METHOD 2 TO CALL
// var studentobject = {
//     stdName: "Arsh",
//     stdAge: 19,
//     stdCity: "karachi",
//     stdEmail: "arsh@gmail.com",
//     stdGender: "male",
//     stdGetName: function () {
//         return "Hello world "
//     }
// }
// console.log(studentobject.stdGetName())


//                    {Object Constructor }
// function Student(name, age, email, city, education) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.city = city;
//     this.education = education;
// }

// var student1 = new Student("Arsh", 19, "arsh@gmail.com", "karachi", "A-levels")

// var student2 = new Student("Hamza", 28, "hamza@gmail.com", "lahore", "O-levels")

// Calling method of Consturctor Functions
// console.log(student1);
// console.log(student2)


//       TASK BY SIR ON Constructor function
// function Book(name, price, editi, auth) {
//     this.Bname = name;
//     this.Bprice = price;
//     this.Bedition = editi;
//     this.Bauthor = auth;
// }

// var book1 = new Book("Oliver twist", 200, 1.0, "Charles Dickens")

// var book2 = new Book("Matilda", 150, 1.2, "Roald Dahl")

// console.log(book1)
// console.log(book2)