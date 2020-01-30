// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Problem 1
// write a function to return the symetric diff of two arrays 
// ex: sym ([1,2,3], [2,3,4,5]);
// should return [1,4,5]; i.e the result should be only in either of two arrays but not in both

function sym(a1,a2) {
  // your code here  
  let f1 = a1.filter((x,i)=> a2.indexOf(x) === -1 ? x : false);
  let f2 = a2.filter((x,i)=> a1.indexOf(x) === -1 ? x : false);
  return f1.concat(f2);
}

// test here
var x1 = sym([1, 2, 3], [5, 2, 1, 4]);
var y1 = sym([1, 2, 3], [2,3,4,5]);
console.log(x1);
//should return [3,5,4]
console.log(y1);
// should return [1,4,5];

// Problem 2
// write a function to bubble sort the given array 
// ex: [3,2,1,5,6,4] should return o/p of [1,2,3,4,5,6];


function bubbleSort(array) {
  // your code here
  return array.sort((a,b)=> a-b);
}

var x2 = bubbleSort([2,1,3,11,10,9]);
var y2 = bubbleSort([100,90,80])

console.log(x2);
// should return [1,2,3,9,10,11]
console.log(y2);
// should return [80,90,100]

// Problem 3 
// write a function to sum the squares of an array 
// ex: [1,2,3] should retun 14
//ex: [1,2,3,4,5] should return 55

function sumsq(array) {
  // your code below
  return array.map(x => x * x).reduce((acc,cur)=> acc+cur,0);
}

var x3 = sumsq([1,2,3]);
var y3 = sumsq([1,2,3,4,5]);

console.log(x3);
// should return 14
console.log(y3);
// should return 55

//problem 4
// using recursion create a range of numbers returned in an array 
// the array of numbers should start with startNum and end with endNum where startNum < endNum
// Ex: rangeOfNumbers(1,5) should return [1,2,3,4,5]

function rangeOfNumbers(startNum, endNum) {
  // your code below
  if(startNum === endNum) {
    return [startNum];
  }else {
   return [startNum].concat(rangeOfNumbers(startNum+1,endNum))
  }
}

var x4 = rangeOfNumbers(1,5);
var y4 = rangeOfNumbers(6,9);
console.log(x4);
console.log(y4);

// Problem 5 
// Merge all overlapping intervals.
// Ex: [[1,3],[2,6]]
// should return [1,6]
// Ex: [[1,5], [3,7], [8,9]]
// should return [[1,7], [8,9]];

var merge = function(intervals) {
  // your code here
   // your code here
 if(intervals.length <= 1)
    return intervals;

  var stack = [];
  var top   = null;

  // sort the intervals based on their start values
  intervals = intervals.sort();

  // push the 1st interval into the stack
  stack.push(intervals[0]);

  // start from the next interval and merge if needed
  for (var i = 1; i < intervals.length; i++) {
    // get the top element
    top = stack[stack.length - 1];

    // if the current interval doesn't overlap with the 
    // stack top element, push it to the stack
    if (top[1] < intervals[i][0]) {
      stack.push(intervals[i]);
    }
    // otherwise update the end value of the top element
    // if end of current interval is higher
    else if (top[1] < intervals[i][1])
    {
      top[1] = intervals[i][1];
      stack.pop();
      stack.push(top);
    }
  }

   console.log(...stack);
};

merge([[1,3],[2,6]])
merge([[1,5], [3,7], [8,9]])

// Problem 6
// create an input field with submit button that accepts numbers and throws field level error when entered text. 

let textInp = document.getElementById('textVal');
let error = document.getElementById('error');
textInp.addEventListener('keyup', function() {
  debugger;
  let strPat = /[a-zA-Z]/;
  strPat.test(textInp.value) ? 
  error.innerHTML="Enter only in numbers" :  error.innerHTML="";
});

// Problem 7
// Integrate google API and console the results for the given search box when clicked on search button.

let apikey = "AIzaSyCyoDwY1ibbFVZJWh0Krn5VPj7V0i8VdEc"; // API KEY
let cx = "004351855598862006687:fffcrxua94v"; // CSE ID 
let searchBtn = document.getElementById('search');
  let input=document.getElementById("site-search");
let searchResults = document.getElementById('search-results');
let clearSearch = document.getElementById('clearSearch');

function triggersearch(){

  searchResults.innerHTML="";
  fetch(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${input.value}`).then(response => response.text()).then(text => {
        let result = JSON.parse(text)
        result.items.forEach(item => {
          debugger;
            /* add it to your results div */
            // item.link, item.title, ...etc
            var node = document.createElement("h2");               
            node.innerHTML =`<h4 style="
            font-size: 16px;
            color: #1155CC;
            text-decoration: underline;
            line-height: 22px;margin:10px 0">${item.title}</h4>
            <p style="font-size:12px;margin:5px 0">${item.snippet}</p>
            <a href='${item.link}'
            style="color: #009933;
            line-height: 15px;font-size:11.5px;margin:0">${item.link}</a></p>`;
            searchResults.appendChild(node);
        })
    })
    /* make sure the form isn't actually submitted by returning false */
    return false 
}
searchBtn.addEventListener('click', triggersearch);
clearSearch.addEventListener('click', ()=> {searchResults.innerHTML=""
input.value=""})


// Problem 8
// Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print the message “Done”
// your code below
let i=0;
var myfunc = setInterval(function(){
    i = i + 1;
    console.log('Hello World'); 
    if(i == 5) {
        clearInterval(myfunc);
        console.log('Done'); 
    }

}, 1000);

//setInterval( () => console.log("hello world"),1000)


// Problem 9 
// Create a JS countdown timer with a 10 sec countdown that has start, stop and clear buttons.
// your code below.
let btnStart = document.getElementById("start");
let btnStop= document.getElementById("stop");
let btnClear = document.getElementById("clear");
let time, count =10;
function countDisplay() {
  document.getElementById('countdown').innerHTML = count;
}
function countStart() {
   countDisplay();
    if(count ===0) {
      count = 10;
    } else {
      count--;
      time = setTimeout(countStart,1000)
    }
}

btnStart.addEventListener('click', countStart);
btnStop.addEventListener('click', () => clearTimeout(time));
btnClear.addEventListener('click',()=> {
  clearTimeout(time);
  count =10;
  document.getElementById('countdown').innerHTML=""})

//Problem 10
// create a modal dialog that opens and closes on click of button "modal"
// inside the modal dialog display upvote and downvote counter
let upVoteCount = document.getElementById('up-count');
let downVoteCount = document.getElementById('down-count');
let upVoteBtn = document.getElementById('upVote');
let downVoteBtn = document.getElementById('downVote');

function upVote() {
  upVoteCount.innerHTML = Number(upVoteCount.innerHTML) + 1;
}
upVoteBtn.addEventListener('click',upVote);

function downVote() {
  downVoteCount.innerHTML = Number(downVoteCount.innerHTML) + 1;
}
downVoteBtn.addEventListener('click',downVote);

let modalBtn = document.getElementById("modalBtn");
let modal = document.getElementById("modal-dailog");
let modalClose = document.getElementById("modal-close");

modalBtn.addEventListener('click', function() {
  modal.classList.contains('modal-open') ? modal.classList.remove('modal-open') : modal.classList.add('modal-open')
})

modalClose.addEventListener('click', () => 
modal.classList.remove('modal-open'))
// Problem 11
// write a code to flatten an array to one dimensional

function flatten(array){
   console.log(array.flat(Infinity));
};


flatten([1,[2],[77,3],[73]])
//output should be [1,2,77,3,73]

flatten([1,[2],[77,3,[5,[4],9],10],12,[33]])
//output should be [1,2,77,3,5,4,9,10,12,33]


// Problem 12
// Create a password and confirm password fileds with validation of password should contain Uppercase, Lowercase, numbers and a special charter with minimum of 8 characters with javascript.
let pInp = document.getElementById('password');
let cInp = document.getElementById('cpassword');
let error1 = document.getElementById('error2');
let error2 = document.getElementById('error3');

pInp.addEventListener('keyup', function() {
  debugger;
  let passPat = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  passPat.test(pInp.value) ? 
  error1.innerHTML="":
  error1.innerHTML="Password Should Contain lest one digit,number,lowercase, uppercase " 
});
cInp.addEventListener('keyup', function() {
  debugger;
  pInp.value == cInp.value? 
  error2.innerHTML="":
  error2.innerHTML="Password Should Match" 
});



// Problem 13
// Find smallest and largest number in a given array

function smallAndLargeNum(arr){
   console.log(
  `small number: ${Math.min(...arr)}, 
   large Number: ${Math.max(...arr)}`
   )
}

smallAndLargeNum([5,7,3,45,44,999,1,78])
// should return "Small Number: 1, Large Number: 999"

smallAndLargeNum([0.5,0.8,-0.3,4.5,44,-9,1])
// should return "Small Number: -999, Large Number: 4.5"

// Problem 14
// Generate a sequence of numbers
function generateSequence(num1, num2){
    console.log(Array((num2 - num1)+1).fill().map((x,i) =>  num1 <= num2 ? x = num1++ : false )); 
}

//let obj1 = new generateSequence();
// obj1.sequence(); should return a sequence
generateSequence(5,10); 
//should return [5,6,7,8,9,10]
generateSequence(-2,5); 
 //should return [-2,-1,0,1,2,3,4,5]


// Problem 15
// Design a pagination functionality which shows 5 pages on view like < 1 2 3 4 5 >




