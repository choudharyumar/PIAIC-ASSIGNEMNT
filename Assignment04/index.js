import PromptSync from "prompt-sync";
let prompt=PromptSync()
function calculator(){
    let a=+prompt('put hte value of a  :','');
    let c=prompt('put the operator which you want like (+,-,*,/)  :','');
    let b=+prompt('put hte value of b  :','');
   
    if (c== '+')
    {
        return a+b;
    }
    if (c== '-')
    {
        return a-b;
    }
    if (c== '*')
    {
        return a*b;
    }
    if (c== '/')
    {
        return a/b;
    }

}
let d=calculator();
console.log(d);