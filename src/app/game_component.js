let value_GENERATED = [];


function generated_dice(){
    value_GENERATED[0] = assign_vale[0];
    value_GENERATED[1] = assign_vale[1];
    value_GENERATED[2] = assign_vale[2];
    value_GENERATED[3] = assign_vale[3];
    value_GENERATED[4] = assign_vale[4];
    value_GENERATED[5] = assign_vale[5];
}

function get_1s_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 1 ){
            sum+=1;
        }
    }
    document.getElementById("show_the_array1").innerHTML = value_GENERATED.toString();
    document.getElementById("get_1s_sum").innerHTML = sum.toString();
}

function get_2nd_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 2 ){
            sum+=2;
        }
    }
    document.getElementById("show_the_array2").innerHTML = value_GENERATED.toString();
    document.getElementById("get_2nd_sum").innerHTML = sum.toString();
}

function get_3ed_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 3 ){
            sum+=3;
        }
    }
    document.getElementById("show_the_array3").innerHTML = value_GENERATED.toString();
    document.getElementById("get_3ed_sum").innerHTML = sum.toString();
}

function get_4th_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 4 ){
            sum+=4;
        }
    }
    document.getElementById("show_the_array4").innerHTML = value_GENERATED.toString();
    document.getElementById("get_4th_sum").innerHTML = sum.toString();
}

function get_5th_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 5 ){
            sum+=5;
        }
    }
    document.getElementById("show_the_array5").innerHTML = value_GENERATED.toString();
    document.getElementById("get_5th_sum").innerHTML = sum.toString();
}

function get_6th_sum() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=6;
        }
    }
    document.getElementById("show_the_array6").innerHTML = value_GENERATED.toString();
    document.getElementById("get_6th_sum").innerHTML = sum.toString();
}

function get_3of_a_Kind() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array7").innerHTML = value_GENERATED.toString();
    document.getElementById("get_3of_a_same").innerHTML = sum.toString();
}


function get_4of_a_Kind() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array8").innerHTML = value_GENERATED.toString();
    document.getElementById("get_4of_a_same").innerHTML = sum.toString();
}

function full_house() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array9").innerHTML = value_GENERATED.toString();
    document.getElementById("Full_House").innerHTML = sum.toString();
}

function SmallStraight() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array10").innerHTML = value_GENERATED.toString();
    document.getElementById("Small_Straight").innerHTML = sum.toString();
}


function LargeStraight() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array11").innerHTML = value_GENERATED.toString();
    document.getElementById("Large_Straight").innerHTML = sum.toString();
}

function Yahtzee() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array12").innerHTML = value_GENERATED.toString();
    document.getElementById("Yahtzee").innerHTML = sum.toString();
}

function Chance() {
    let sum = 0;
    for(let x=0; x <= value_GENERATED.length; x++){
        if(value_GENERATED[x] === 6 ){
            sum+=1;
        }
    }

    document.getElementById("show_the_array13").innerHTML = value_GENERATED.toString();
    document.getElementById("Chance").innerHTML = sum.toString();
}


function Main_call(){
    getRandomImage();
    generated_dice();
    get_1s_sum();
    get_2nd_sum();
    get_3ed_sum();
    get_4th_sum();
    get_5th_sum();
    get_6th_sum();
    get_3of_a_Kind();
    get_4of_a_Kind();
    full_house();
    SmallStraight();
    LargeStraight();
    Yahtzee();
    Chance();
}
Main_call();

