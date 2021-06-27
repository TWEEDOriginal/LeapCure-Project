const influencer_list = [
                        "social influencers",
                        "community leaders",
                        "caregivers organizations",                              
                        "parent groups",
                        "KOLs/physicians",
                        "tech startups"
]
let value = 0
let new_big = null
const rotator =document.getElementById("rotating-span")

const carousels = document.getElementsByClassName("slide")
const manual_btns = document.getElementsByClassName("manual-btn")
var radios = document.forms["formA"].elements["radio-btn"];
let prev_carousel = carousels[2]
let prev_manual =  manual_btns[2]
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        const rbs = document.querySelectorAll('input[name="radio-btn"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                  
                    
                        prev_carousel.classList.remove("big-card");
                        prev_carousel.classList.add("smaller-card");
                    
                    
                        prev_manual.classList.remove("manual-btn-clicked");
                    
                    if (rb.id=== "radio-1"){
                        var y = document.getElementById("first");
                        y.style["margin-left"] = 0;
                        new_big = carousels[0]
                        new_big.classList.add("big-card");
                        new_big.classList.remove("smaller-card");
                        new_dark = manual_btns[0]
                        new_dark.classList.add("manual-btn-clicked");
                    }
                    else if (rb.id=== "radio-2"){
                        var y = document.getElementById("first");
                        y.style["margin-left"] = "-80%";
                        new_big = carousels[1]
                        new_big.classList.add("big-card");
                        new_big.classList.remove("smaller-card");
                        new_dark = manual_btns[1]
                        new_dark.classList.add("manual-btn-clicked");
                      
                    }
                    else if (rb.id=== "radio-3"){
                        var y = document.getElementById("first");
                        y.style["margin-left"] = "-160%";
                        new_big = carousels[2]
                        new_big.classList.add("big-card");
                        new_big.classList.remove("smaller-card");
                        new_dark = manual_btns[2]
                        new_dark.classList.add("manual-btn-clicked");
                    }
                    else if (rb.id=== "radio-4"){
                        var y = document.getElementById("first");
                        y.style["margin-left"] = "-240%";
                        new_big = carousels[3]
                        new_big.classList.add("big-card");
                        new_big.classList.remove("smaller-card");
                        new_dark = manual_btns[3]
                        new_dark.classList.add("manual-btn-clicked");
                    }
                    else if (rb.id=== "radio-5"){
                        var y = document.getElementById("first");
                        y.style["margin-left"] = "-320%";
                        new_big = carousels[4]
                        new_big.classList.add("big-card");
                        new_big.classList.remove("smaller-card");
                        new_dark = manual_btns[4]
                        new_dark.classList.add("manual-btn-clicked");
                    }
                    prev_carousel = new_big
                    prev_manual = new_dark
                    break;
                }
            }
    }
}
const remove_rotate= ()=> {
    rotator.classList.remove("rotate-appear");
}
const dostuff = () => {   
    rotator.innerHTML = nextText();
    rotator.classList.remove("actually-rotate");
    rotator.classList.add("rotate-appear");
    setTimeout( remove_rotate, 500);
}


function every_three_seconds(){
    rotator.classList.add("actually-rotate");
    setTimeout( dostuff, 500);

    
}

function nextText(){
    if (value === influencer_list.length) {
        value = 0
        choice = "health influencers"
    }
    else {
        choice = influencer_list[value]
        value += 1
    }
    
    return choice;
}

setInterval(every_three_seconds, 4000);