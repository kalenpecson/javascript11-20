/**
 * Created by h205p3 on 10/5/17.
 */

function firstLast6(array){
    if(array.indexOf(6)==0 || array.lastIndexOf(6)== (array.length -1)){
        return true;
    }else{
        return false;
    }
}
function has23(array){
    if (array.indexOf(2)>=0 || array.indexOf(3)>=0){
        return true;
    }else{
        return false;
    }
}
function fix23(array){
    if ((array.indexOf(3)-1)==array.lastIndexOf(2)){
        array.splice((array.indexOf(3)), 1, 0);
        return array;
    }else{
        return array;
    }
}
function countYZ(string){
    var total = 0;
    var array =  string.split(" ");
    for(var i=0; i< (array.length );i++ ){
        var peanut= array[i];
        if(peanut.lastIndexOf("y")=== (peanut.length -1) || peanut.lastIndexOf("z") === (peanut.length -1) || peanut.lastIndexOf("Y")=== (peanut.length -1) || peanut.lastIndexOf("Z")=== (peanut.length -1))
            total += 1;
    }
    return total;
}
function endOther(str1,str2){
    var str3= str1.toLowerCase();
    var str4= str2.toLowerCase();
    var x=0;
    if(str1.length > str2.length){
        x=1
    }else{
        x=2;
    }
    if (x===1){
        if(str3.endsWith(str4)){
            return true;
        }else{
            return false;
        }
    }
    if (x===2){
        if(str4.endsWith(str3)){
            return true;
        }else{
            return false;
        }

    }
}
function starOut(string){
    var newWord= "";
    for(var i=0; i < string.length;i++){
        var one= string[i];
        var two= string[i+1];
        var three= string[i-1];
        if (one !== "*" && two !== "*" && three !== "*"){
            newWord += string[i];
        }
    }

    return newWord;

}
function getSandwich(string){
    var n = string.search("bread");
    var second = string.slice((n+5), string.length);
    if (second.includes("bread")){
        var m = second.lastIndexOf("bread");
        var third= second.slice(0,m);
        return third;
    }else{
        var nada= "";
        return nada;
    }

}
function canBalance(array){
    var trueness= 0;
    for (var i=0 ; i < array.length ; i++){
        var n= array.slice(0,i);
        var m= array.slice( i, array.length );
        var sumone= 0;
        var sumtwo= 0;
        for (var a=0; a < n.length; a++ ){
            sumone += n[a];
        }
        for (var b=0; b < m.length; b++ ){
            sumtwo += m[b];
        }
        if (sumone===sumtwo) {
        trueness+= 1;
        }

    }
    if (trueness !== 0){
        return true;
    }else{
        return false;
    }

}
function countClumps(array){
    var patches= 0;
    for (var i=0; i<array.length;i++){
        if (array[i]===array[i-1] && array[i]!== array[i-2]){
            patches+= 1;
        }
    }
    return patches;
}
function evenlySpaced(x,y,z){

    if (x<y && y<z){
        var array= [x,y,z];
        var d = array [0];
        var e= array[1];
        var f = array[2];
        if ( (e-d) === (f-e) ){
            return true;
        }else{
            return false;
        }
    }else{
        var array2= [x,y,z];
        var ordered= array2.sort(function(a, b){return a-b});
        var a = ordered[0];
        var b = ordered[1];
        var c = ordered[2];
        if ( (b-a) === (c-b) ){
            return true;
        }else{
            return false;
        }
    }

}


function tester() {

    document.getElementById("output").innerHTML = evenlySpaced(10,9,11);
    // document.getElementById("output1").innerHTML = sleep_in(false, false);
    // document.getElementById("output2").innerHTML = monkey_trouble(false, false);
    //  document.getElementById("output3").innerHTML = string_bits('mbappé',23);
    // document.getElementById("output4").innerHTML = sleep_in(false ,true);
}