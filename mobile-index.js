const mobile_influencer_list = [
    "social influencers",
    "community leaders",
    "caregivers organizations",                              
    "parent groups",
    "KOLs/physicians",
    "tech startups"
]
let mobile_value = 0
const mobile_rotator =document.getElementById("mobile-rotating-span")

const mobile_remove_rotate= ()=> {
mobile_rotator.classList.remove("mobile-rotate-appear");
}
const mobile_manual_btns = document.getElementsByClassName("mobile-manual-btn")



var mobile_radios = document.forms["mobile-formA"].elements["mobile-radio-btn"];

let mobile_prev_manual =  mobile_manual_btns[2]


for(var i = 0, max = mobile_radios.length; i < max; i++) {
    mobile_radios[i].onclick = function() {
        const mobile_rbs = document.querySelectorAll('input[name="mobile-radio-btn"]');
            
            for (const rb of mobile_rbs) {
                if (rb.checked) {
                  
                    
                   
                    
                    
                    mobile_prev_manual.classList.remove("mobile-manual-btn-clicked");
                    
                    if (rb.id=== "mobile-radio-1"){
                        var y = document.getElementById("mobile-first");
                       
                        y.style["margin-left"] = 0;
                       
                        mobile_new_dark = mobile_manual_btns[0]
                        mobile_new_dark.classList.add("mobile-manual-btn-clicked");
                    }
                    else if (rb.id=== "mobile-radio-2"){
                        var y = document.getElementById("mobile-first");
                        y.style["margin-left"] = "-100%";
                        mobile_new_dark = mobile_manual_btns[1]
                        mobile_new_dark.classList.add("mobile-manual-btn-clicked");
                      
                    }
                    else if (rb.id=== "mobile-radio-3"){
                        var y = document.getElementById("mobile-first");
                        y.style["margin-left"] = "-200%";
                        
                        mobile_new_dark = mobile_manual_btns[2]
                        mobile_new_dark.classList.add("mobile-manual-btn-clicked");
                    }
                    else if (rb.id=== "mobile-radio-4"){
                        var y = document.getElementById("mobile-first");
                        y.style["margin-left"] = "-300%";
                        
                        mobile_new_dark = mobile_manual_btns[3]
                        mobile_new_dark.classList.add("mobile-manual-btn-clicked");
                    }
                    else if (rb.id=== "mobile-radio-5"){
                        var y = document.getElementById("mobile-first");
                        y.style["margin-left"] = "-400%";
                       
                        mobile_new_dark = mobile_manual_btns[4]
                        mobile_new_dark.classList.add("mobile-manual-btn-clicked");
                    }
                    mobile_prev_manual = mobile_new_dark
                    break;
                }
            }
    }
}



const mobile_dostuff = () => {   
mobile_rotator.innerHTML = mobile_nextText();
mobile_rotator.classList.remove("mobile-actually-rotate");
mobile_rotator.classList.add("mobile-rotate-appear");
setTimeout( mobile_remove_rotate, 500);
}


function mobile_every_three_seconds(){
mobile_rotator.classList.add("mobile-actually-rotate");

setTimeout( mobile_dostuff, 500);


}

function mobile_nextText(){
if (mobile_value === mobile_influencer_list.length) {
mobile_value = 0
choice = "health influencers"
}
else {
choice = mobile_influencer_list[mobile_value]
mobile_value += 1
}

return choice;
}

setInterval(mobile_every_three_seconds, 4000);