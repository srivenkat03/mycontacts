
let string = "";
let buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML == '='){
             string=eval(string); 
             document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML =='C'){
            string=" "; 
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML =='dark'){
            
        }
        else{
        console.log(event.target);
        string=string+event.target.innerHTML;
        document.querySelector('input').value=string;
        }
}
)});
