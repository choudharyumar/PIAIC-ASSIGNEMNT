import PromptSync from "prompt-sync";
let prompt=PromptSync()
let questions=['Q1) What is the capital of pakistan?','Q2) Which team won the world cup 2022?',
'Q3) How many vovels in alphabat','Q4) Who will become the next pm of Pakistan?']
let count=0
console.warn(questions[0]);
    if(questions[0])
{
   let a = prompt("A:ISlamabad B:Karachi ,C:lahore, D:layyah |")
    if(a=='A')
{
    count++;
}
}

console.warn(questions[1]);
    if(questions[1])
{
   let a = prompt("A:india B:pakistan ,C:newzeland, D:england |")
    if(a=='B')
{
    count++;
}
}

console.warn(questions[2]);
    if(questions[2])
{
   let a = prompt("A:2 B:3 ,C:5, D:1 |")
    if(a=='C')
{
    count++;
}
}


console.warn(questions[3]);
    if(questions[3])
{
   let a = prompt("A:umar B:nawaz ,C:imran, D:fazlu r rehman |")
    if(a=='D')
{
    count++;
}
}
console.warn('You have score '+count+" Marks out of 4" );        