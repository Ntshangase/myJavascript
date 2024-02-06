    //Take age of both parents/2
    let x = 0;
    // if Age/2 < 60, gender = non-binary
    // if Age/2 > 60 && even number, gender = male
    // Age2 > 60 && odd number, gender = female
 
     
    function Submit(){
        
        x = document.getElementById("motherAge").value;
        document.getElementById("motherAge").value= '';
    }

    function Reveal(){
        console.log(x);
        
    }
    
// This means i will need a page to redirect to to reveal the gender or an Alert/Pop-up will be fine
