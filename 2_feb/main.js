    //Take age of both parents/2
    let x = 0;
    let y = 0;
    
 
     
    function Submit(){
        // load the input.values to a variable for manipulation later
        x = document.getElementById("motherAge").value;
        y = document.getElementById("fatherAge").value;

        // clear the input fields
        document.getElementById("motherAge").value= '';
        document.getElementById("fatherAge").value= '';
    }

    function Reveal(){
        let Age = Number(x) + Number(y);
        let gender;
        // if Age/2 < 60, gender = non-binary
        if(Age <= 60){
            gender = "Non-Binary";
        }else if(Age > 60 && Age%2 === 0){ // if Age/2 > 60 && even number, gender = male
            gender = "male"
        }else if (Age > 60 && Age%2 != 0){ // Age2 > 60 && odd number, gender = female
            gender = "female"
        }
        
    
        // console.log
        console.log(Age);
        console.log(gender); 
    }
    
// This means i will need a page to redirect to to reveal the gender or an Alert/Pop-up will be fine
// display function
function Display() {
    let page = document.getElementById("show"); 
    let hidden = page.getAttribute("hidden");

    if(hidden){
        page.removeAttribute("hidden");
        //button.innerText("clear")
    }else {
        page.setAttribute("hidden", "hidden");
        //button.innerText("Veza");
    }
}