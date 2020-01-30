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

const myarr = [{ "req_no": 1, "title": "test1" },
        { "req_no": 2, "title": "test2" },
        { "req_no": 3, "title": "test3" },
        { "req_no": 4, "title": "test4" },
        { "req_no": 5, "title": "test5" },
        { "req_no": 6, "title": "test6" },
        { "req_no": 7, "title": "test7" },
        { "req_no": 8, "title": "test8" },
        { "req_no": 9, "title": "test9" },
        { "req_no": 10, "title": "test10" },
        { "req_no": 11, "title": "test11" },
        { "req_no": 12, "title": "test12" },
        { "req_no": 13, "title": "test13" },
        { "req_no": 14, "title": "test14" },
        { "req_no": 15, "title": "test15" },
        { "req_no": 16, "title": "test16" },
        { "req_no": 17, "title": "test17" },
        { "req_no": 18, "title": "test18" },
        { "req_no": 19, "title": "test19" },
        { "req_no": 20, "title": "test20" },
        { "req_no": 21, "title": "test21" },
        { "req_no": 22, "title": "test22" },
        { "req_no": 23, "title": "test23" },
        { "req_no": 24, "title": "test24" },
        { "req_no": 25, "title": "test25" },
        { "req_no": 26, "title": "test26" }];
const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
const pagination_visible_pages = 4;
// hide pages from pagination from beginning if more than pagination_visible_pages
        function hide_from_beginning(element) {
            if (element.style.display === "" || element.style.display === "block") {
                element.style.display = "none";
            } else {
                hide_from_beginning(element.nextSibling);
            }
        }
        
        // hide pages from pagination ending if more than pagination_visible_pages
        function hide_from_end(element) {
            if (element.style.display === "" || element.style.display === "block") {
                element.style.display = "none";
            } else {
                hide_from_beginning(element.previousSibling);
            }
        }
        
        // load data and style for active page
        function active_page(element, rows, req_per_page) {
            var current_page = document.getElementsByClassName('active');
            var next_link = document.getElementById('next_link');
            var prev_link = document.getElementById('prev_link');
            var next_tab = current_page[0].nextSibling; 
            var prev_tab = current_page[0].previousSibling;
            current_page[0].className = current_page[0].className.replace("active", "");
            if (element === "next") {
                if (parseInt(next_tab.text).toString() === 'NaN') {
                    next_tab.previousSibling.className += " active";
                    next_tab.setAttribute("onclick", "return false");
                } else {
                    next_tab.className += " active"
                    render_table_rows(rows, parseInt(req_per_page), parseInt(next_tab.text));
                    if (prev_link.getAttribute("onclick") === "return false") {
                        prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
                    }
                    if (next_tab.style.display === "none") {
                        next_tab.style.display = "block";
                        hide_from_beginning(prev_link.nextSibling)
                    }
                }
            } else if (element === "prev") {
                if (parseInt(prev_tab.text).toString() === 'NaN') {
                    prev_tab.nextSibling.className += " active";
                    prev_tab.setAttribute("onclick", "return false");
                } else {
                    prev_tab.className += " active";
                    render_table_rows(rows, parseInt(req_per_page), parseInt(prev_tab.text));
                    if (next_link.getAttribute("onclick") === "return false") {
                        next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
                    }
                    if (prev_tab.style.display === "none") {
                        prev_tab.style.display = "block";
                        hide_from_end(next_link.previousSibling)
                    }
                }
            } else {
                element.className += "active";
                render_table_rows(rows, parseInt(req_per_page), parseInt(element.text));
                if (prev_link.getAttribute("onclick") === "return false") {
                    prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
                }
                if (next_link.getAttribute("onclick") === "return false") {
                    next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
                }
            }
        }

        // Render the table's row in table request-table
        function render_table_rows(rows, req_per_page, page_no) {
            const response = JSON.parse(window.atob(rows));
            const resp = response.slice(req_per_page * (page_no - 1), req_per_page * page_no)
            $('#request-table').empty()
            $('#request-table').append('<tr><th>Index</th><th>Request No</th><th>Title</th></tr>');
            resp.forEach(function (element, index) {
                if (Object.keys(element).length > 0) {
                    const { req_no, title } = element;
                    const td = `<tr><td>${++index}</td><td>${req_no}</td><td>${title}</td></tr>`;
                    $('#request-table').append(td)
                }
            });
        }

        // Pagination logic implementation
        function pagination(data, myarr) {
            const all_data = window.btoa(JSON.stringify(myarr));
            $(".pagination").empty();
            if (data.req_per_page !== 'ALL') {
                let pager = `<a href="#" id="prev_link" onclick=active_page('prev',\"${all_data}\",${data.req_per_page})>&laquo;</a>` +
                    `<a href="#" class="active" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>1</a>`;
                const total_page = Math.ceil(parseInt(myarr.length) / parseInt(data.req_per_page));
                if (total_page < pagination_visible_pages) {
                    render_table_rows(all_data, data.req_per_page, data.page_no);
                    for (let num = 2; num <= total_page; num++) {
                        pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
                    }
                } else {
                    render_table_rows(all_data, data.req_per_page, data.page_no);
                    for (let num = 2; num <= pagination_visible_pages; num++) {
                        pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
                    }
                    for (let num = pagination_visible_pages + 1; num <= total_page; num++) {
                        pager += `<a href="#" style="display:none;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
                    }
                }
                pager += `<a href="#" id="next_link" onclick=active_page('next',\"${all_data}\",${data.req_per_page})>&raquo;</a>`;
                $(".pagination").append(pager);
            } else {
                render_table_rows(all_data, myarr.length, 1);
            }
        }

        //calling pagination function
        pagination(data, myarr);


        // trigger when requests per page dropdown changes
        function filter_requests() {
            const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
            pagination(data, myarr);
        }