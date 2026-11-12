let count = 0;

function increasecount(){

    if(count < 10){

        count = count + 1;

        document.getElementById("count").innerHTML = count;

    }

}

function resetcount(){

    count = 0;

    document.getElementById("count").innerHTML = count;

}