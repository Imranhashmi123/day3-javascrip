// // 1.
// var firstaName = "IMRAN";
// var lastName = "hashmi";
// var country = "INDIA";
// var city = "HAZARIBAGH";
// var age = 21;
// var isMarried = "single";


// var typfirstaName = typeof(firstaName);
// console.log(typfirstaName);


// var typlastName = typeof(lastName);
// console.log(typlastName);

// var typcountry = typeof(country);
// console.log(typcountry);

// var typcity = typeof(city);
// console.log(typcity);

// var typage = typeof(age);
// console.log(typage);


// var typisMarried = typeof(isMarried);
// console.log(typisMarried);



// // 2.
// var A = 10;

// var c = typeof(A);
// console.log(c);

// var B = '10';
// var D = typeof(B);
// console.log(D);

// var E = c == D;
// console.log(E);


// var prse = parseInt('9.8');
// var ans = 10;

// var newAns = prse == ans;
// console.log(newAns);


// // 3.
// // 1.
// var fasly = false;
// console.log(Boolean(fasly));

// var newfasly = 0;
// console.log(Boolean(newNfalsy));

// var newNfalsy = -0;
// console.log(Boolean(newNfalsy));


// // 2.
// var  truty = '0';
// console.log(Boolean(truty));

// var newTruty = 'false';
// console.log(Boolean(newTruty));

// var empty = [];
// console.log(Boolean(empty));

// 5.

// let truValue = 4 > 3    // true
// let four = 4 >= 3    // true
// let three = 4 < 3    // false
// let threee = 4 > 3    // true
// let equalto = 4 == 4;  // true
// let strictly = 4 === 4; //true
// let notequal = 4 != 4; // false
// let notstricty = 4 !== 4; //false
// let notequale = 4 != '4'; //false
// let equal = 4 == '4'; //true
// let strictlyString = 4 === '4'; // false

// console.log(truValue);
// console.log(four);
// console.log(three);
// console.log(threee);
// console.log(equalto);
// console.log(strictly);
// console.log(notequal);
// console.log(notstricty);
// console.log(notequale);
// console.log(equal);
// console.log(strictlyString);

// 6.

// let and = 4 > 3 && 10 < 12; //true
// let andto = 4 > 3 && 10 > 12; //false
// let or = 4 > 3 || 10 < 12; //true
// let orr = 4 > 3 || 10 > 12; //true
// let braked = !(4>3); //false
// let notequalee = !(4 < 3); //true
// let flse = !(false); //true
// let andd = !(4 > 3 && 10 < 12); //false
// let anddd = !(4 > 3 && 10 > 12); // true
// let strictlye = !(4 === '4'); // true
// let both = 'python'.length != 'dragon'.length; //false

// console.log(and);
// console.log( andto);
// console.log(or);
// console.log(orr);
// console.log(braked);
// console.log(notequalee );
// console.log(flse);
// console.log(andd);
// console.log(anddd);
// console.log( strictlye);
// console.log(both);

// //7.
// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());
// console.log(date.getTime()/1000);

// // Exercise:level2
// // 1.
// let enterBase = 20;
// let enterHeight = 10;
// let area = (0.5 * enterBase * enterHeight);
// console.log(area);
// // 2.
// let enterSideA= 5;
// let enterSideB= 4;
// let enterSideC= 3;
// let perimeter = (enterSideA + enterSideB + enterSideC);
// console.log(perimeter);
// //3.
// let length = prompt('enter lngth: ');
// let width = prompt('enter bredth: ');
// let rectangle = (parseFloat(length) * parseFloat(width));
// console.log(rectangle);

// let perimeterr = (2*(parseFloat(length) + parseFloat(width)));
// console.log(perimeterr);

// 4.
// let radius = prompt("enter the circle's radius: ");
// let pi = 3.14;

// let areaCircle = (pi * parseFloat(radius) * parseFloat(radius));
// console.log(areaCircle);

// let circumferenceCircle = (2 * pi * parseFloat(radius));
// console.log(circumferenceCircle);
// 5.
// let a = 1;
// let b= 2;
// let c = -2;

// let a1 = a/a;
// let b1 = b/a;
// let c1 = c/a;

// let x_intercpt = -c1/b1;
// console.log(x_intercpt);

// let y_intercpt = c1/a1;
// console.log(y_intercpt);

// let slope = Math.round(((y_intercpt-0)/(0-x_intercpt))*100)/100;
// console.log(slope);

// //6.
// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;

// let slopeM = (y2-y1)/(x2-x1);
// console.log(slopeM);
// //7.

// let compareSlope = slope == slopeM;
// console.log(compareSlope);

// //8.
// let aa = 10;
// let bb = 8;


// let y = (aa**2+6*bb +9);
// console.log(y);

// //9.
// let hours = prompt("enter hours: ");
// let rate = prompt("Enter rate per hour: ");
// let weeklyEarning = (parseFloat(hours) * parseFloat(rate));
// console.log(weeklyEarning);

// 10.
// let name1 = prompt('enter your name: ');
// if (name1.length > 7){
//     console.log("your name is longer")
// }else{
//     console.log("your name is shorter")
// }

// 11.
// let firstaName = prompt('your first name: ');
// let familyName = prompt('your family name: ');
// if(firstaName.length > familyName.length){
//     console.log("your first name", firstaName, "is longer then family name",familyName );
// }else{
//     console.log('your first name", firstaName, "is no longer then family name",familyName ')
// }
// 12.
// var myAge = 19;
// var yourAge = 199;

// var olderThen = yourAge - myAge;

// console.log("I am ",olderThen,"older then you");
// 13.
// let age = prompt("enter your age: ");
// let year = new Date().getfFullYear() - parseFloat(age);
// let leftYear = 18- parseFloat(year);
// if(year > 18){
//     console.log("you are", year, ".you are old enough to drive");
// }

// else{
//     console.log("you are ", year, ". you will be allowed to drive after " ,leftYear,"year");
// }
// 14.
// let year = parseFloat(prompt("enter your year: "));
// let remainingYear = 100 - year;
// let daySecond = 60*60*24;
// let yearSecond = 365*daySecond;
// let remainingSecond = remainingYear * yearSecond;
// console.log("you lived",remainingSecond, "second");

// 15.
// 1.
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let time = date.getHours();
// let minu = date.getMinutes();
// //1
// console.log(year+'-'+month+"-"+day+" "+time+":"+minu);
// //2.

// console.log(day+'-'+month+"-"+year+" "+time+":"+minu);

// //3.
// console.log(day+'/'+month+"/"+year+" "+time+":"+minu);



// let dateInfo = new Date();
// let year = dateInfo.getFullYear();
// let month = dateInfo.getMonth();
// let date = dateInfo.getDate();
// let hours = dateInfo.getHours();
// let minutes = dateInfo.getMinutes();

// function format(a) {
//   if (a < 10) {
//     return (a = `0${a}`);
//   }
//   return a;
// }
// let formatHours = format(hours);
// let formatMinutes = format(minutes);
// console.log(`${year}0-0${month}-${date} ${formatHours}:${formatMinutes}`);


