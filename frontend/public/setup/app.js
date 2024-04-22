let root = document.querySelector(':root');
let rootstyle = getComputedStyle(root);
let d2 = document.createElement('div')
let d3 = document.createElement('div')
let d32 = document.createElement('div')
let d4 = document.createElement('div')

let d42 = document.createElement('div')
let d5 = document.createElement('div')

import setupShips from "../api/setup.js";
import { getLobby } from "../api/lobby.js"

const urlParams = new URLSearchParams(window.location.search)
const myName = urlParams.get('name')
const myPIN = urlParams.get('lobbyPIN')
const id = urlParams.get('id')
document.querySelector('.rotate').addEventListener('click', () => rot())

function rot(){
    if(document.getElementById("chosen-ship").childNodes[0].id  === "rot"){
        document.getElementById("chosen-ship").childNodes[0].id = "unrot";
        var i = rootstyle.getPropertyValue('--h');
        root.style.setProperty('--w',i);
        root.style.setProperty('--h',1);
    }
    else{
        document.getElementById("chosen-ship").childNodes[0].id  = "rot";
        var j = rootstyle.getPropertyValue('--w');
        root.style.setProperty('--h',j);
        root.style.setProperty('--w',1);    
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for(let i =1;i<200;i+=2){
        let c = (i-1)/2;
            document.getElementById('table').childNodes[i].addEventListener('mouseover', function (){
                if(document.getElementById('chosen-ship').childElementCount ==1 && document.getElementById("chosen-ship").childNodes[0].id  === "unrot" ){
                    console.log(document.getElementById('chosen-ship').firstChild)
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i2' ){
                        if(c%10 < (c+1)%10 && !(check().includes(i) || check().includes(i+2))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i3' ){
                        if(c%10 < (c+2)%10 && !(check().includes(i) || check().includes(i+2) || check().includes(i+4))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i32'){
                        if(c%10 < (c+2)%10 && !(check().includes(i) || check().includes(i+2) || check().includes(i+4))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i4'){
                        if(c%10 < (c+3)%10 && !(check().includes(i) || check().includes(i+2) || check().includes(i+4) || check().includes(i+6))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i42'){
                        if(c%10 < (c+3)%10 && !(check().includes(i) || check().includes(i+2) || check().includes(i+4) || check().includes(i+6))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                    if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i5'){
                        if(c%10 < (c+4)%10 && !(check().includes(i) || check().includes(i+2) || check().includes(i+4) || check().includes(i+6)  || check().includes(i+8))){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c','red')
                        }
                    }
                }
            else if(document.getElementById('chosen-ship').childElementCount ==1 && document.getElementById("chosen-ship").childNodes[0].id  === "rot" ){
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i2'){
                    if(c/10 +1<10 && !(check().includes(i) || check().includes(i+20))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i3'){
                    if(c/10 +2<10 && !(check().includes(i) || check().includes(i+20) || check().includes(i+40))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i32'){
                    if(c/10+2 <10 && !(check().includes(i) || check().includes(i+20) || check().includes(i+40))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i4'){
                    if(c/10+3 <10 && !(check().includes(i) || check().includes(i+20) || check().includes(i+40) || check().includes(i+60))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i42'){
                    if(c/10+3 <10 && !(check().includes(i) || check().includes(i+20) || check().includes(i+40) || check().includes(i+60))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
                if(document.getElementById('chosen-ship').childNodes[0].firstChild.id =='i5'){
                    if(c/10+4 <10 && !(check().includes(i) || check().includes(i+20) || check().includes(i+40) || check().includes(i+60)  || check().includes(i+80))){
                        root.style.setProperty('--c','gray');
                    }
                    else{
                        root.style.setProperty('--c','red')
                    }
                }
            }
        })
        //------------------------------------------------------------
        document.getElementById('table').childNodes[i].addEventListener('click', function (){
            if(document.getElementById('chosen-ship').childElementCount ==1 && document.getElementById("chosen-ship").childNodes[0].id  === "unrot" ){
                if(getComputedStyle(root).getPropertyValue('--c') == 'gray'){
                    console.log(1)
                    console.log(document.getElementById('table').childNodes[i])
                    console.log(document.getElementById('chosen-ship').firstChild.childNodes[0])
                    console.log(1)
                    document.getElementById('table').childNodes[i].appendChild(document.getElementById('chosen-ship').firstChild.childNodes[0])
                    if(document.getElementById('table').childNodes[i].firstChild.id == 'i2'){document.getElementById('table').childNodes[i].id = 'intake2-'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i3'){document.getElementById('table').childNodes[i].id = 'intake3-'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i32'){document.getElementById('table').childNodes[i].id = 'intake32-'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i4'){document.getElementById('table').childNodes[i].id = 'intake4-'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i42'){document.getElementById('table').childNodes[i].id = 'intake42-'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i5'){document.getElementById('table').childNodes[i].id = 'intake5-'}
                    root.style.setProperty('--c',null)
                    root.style.setProperty('--w',0)
                    root.style.setProperty('--h',0)
                                  
                }
            }
            else if(document.getElementById('chosen-ship').childElementCount ==1){
                if(getComputedStyle(root).getPropertyValue('--c') == 'gray'){
                    document.getElementById('table').childNodes[i].appendChild(document.getElementById('chosen-ship').firstChild.childNodes[0])
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i2'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/2blockrot.png' }
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i3'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/3blockrot.png' }
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i32'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/3blockrot.png' }
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i4'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/4blockrot.png' }
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i42'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/42blockrot.png' }
                    if(document.getElementById('table').childNodes[i].firstChild.id=='i5'){document.getElementById('table').childNodes[i].firstChild.src = '../img/ship/5blockrot.png' }

                    document.getElementById('chosen-ship').firstChild.id= 'unrot'
                    if(document.getElementById('table').childNodes[i].firstChild.id == 'i2'){document.getElementById('table').childNodes[i].id = 'intake2V';document.getElementById('table').childNodes[i].firstChild.id='i2V'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i3'){document.getElementById('table').childNodes[i].id = 'intake3V';document.getElementById('table').childNodes[i].firstChild.id='i3V'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i32'){document.getElementById('table').childNodes[i].id = 'intake32V';document.getElementById('table').childNodes[i].firstChild.id='i32V'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i4'){document.getElementById('table').childNodes[i].id = 'intake4V';document.getElementById('table').childNodes[i].firstChild.id='i4V'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i42'){document.getElementById('table').childNodes[i].id = 'intake42V';document.getElementById('table').childNodes[i].firstChild.id='i42V'}
                    else if(document.getElementById('table').childNodes[i].firstChild.id == 'i5'){document.getElementById('table').childNodes[i].id = 'intake5V';document.getElementById('table').childNodes[i].firstChild.id='i5V'}
                    root.style.setProperty('--c',null)
                    root.style.setProperty('--w',0)
                    root.style.setProperty('--h',0)
                    document.getElementById('table').childNodes[i].addEventListener('click',function (){
                        for(let j=1;j<12;j+=2){
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i2V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/2block.png'
                                console.log(document.getElementById('select-ship').childNodes[j].firstChild.id)
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i2'

                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i3V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/3block.png'
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i3'
                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i32V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/3block.png'
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i32'
                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i4V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/4block.png'
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i4'
                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i42V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/42block.png'
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i42'
                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                            if(document.getElementById('select-ship').childNodes[j].firstChild.id == 'i5V'){
                                document.getElementById('select-ship').childNodes[j].firstChild.src = '../img/ship/5block.png'
                                document.getElementById('select-ship').childNodes[j].firstChild.id = 'i5'
                                document.getElementById('table').childNodes[i].id = 'block'
                            }
                        }
                    })
                    
                }

        }
    })
}})
function check(){
    var list = [];
    for(let c=1;c<200;c+=2){
        if(document.getElementById('table').childNodes[c].id == 'intake2-'){
            if(document.getElementById('intake2-').firstChild!==null){
                list.push(c)
                list.push(c+2)
            }
            else{
                document.getElementById('intake2-').id ='block'
            }
        }
        else if(document.getElementById('table').childNodes[c].id == 'intake2V'){
            list.push(c)
            list.push(c+20)
        }
        if(document.getElementById('table').childNodes[c].id === 'intake3-'){
            if(document.getElementById('intake3-').firstChild!==null){
                list.push(c)
                list.push(c+2)
                list.push(c+4);}
            else{
                document.getElementById('intake3-').id ='block'
            }
        }
        else if(document.getElementById('table').childNodes[c].id === 'intake3V'){
            list.push(c)
            list.push(c+20)
            list.push(c+40);
        }
        if(document.getElementById('table').childNodes[c].id === 'intake32-' ){
            if(document.getElementById('intake32-').firstChild!==null){
                list.push(c)
                list.push(c+2)
                list.push(c+4);}
            else{
                document.getElementById('intake32-').id ='block'
            }
        }
        else if(document.getElementById('table').childNodes[c].id == 'intake32V'){
            list.push(c)
            list.push(c+20)
            list.push(c+40);
        }
        if(document.getElementById('table').childNodes[c].id == 'intake4-'){
            if(document.getElementById('intake4-').firstChild!==null){

                list.push(c)
                list.push(c+2)
                list.push(c+4);
                list.push(c+6);}
            else{
                document.getElementById('intake4-').id ='block'
            }
        }
        else if(document.getElementById('table').childNodes[c].id == 'intake4V'){
            list.push(c)
            list.push(c+20)
            list.push(c+40);
            list.push(c+60);
        }
        if(document.getElementById('table').childNodes[c].id == 'intake42-' ){
            if(document.getElementById('intake42-').firstChild!==null){

                list.push(c)
                list.push(c+2)
                list.push(c+4);
                list.push(c+6);}
            else{
                document.getElementById('intake42-').id ='block'

            }
        }
        else if(document.getElementById('table').childNodes[c].id == 'intake42V'){
            list.push(c)
            list.push(c+20)
            list.push(c+40);
            list.push(c+60);
        }
        if(document.getElementById('table').childNodes[c].id == 'intake5-' ){
            if(document.getElementById('intake5-').firstChild!==null){
                list.push(c)
                list.push(c+2)
                list.push(c+4);
                list.push(c+6);
                list.push(c+8)}
            else{
                document.getElementById('intake5-').id ='block'

            }
            
        }
        else if(document.getElementById('table').childNodes[c].id == 'intake5V'){
            list.push(c)
            list.push(c+20)
            list.push(c+40);
            list.push(c+60);
            list.push(c+80);

        }

    }
    return list;

}

document.querySelector('.submit').addEventListener('click', () => submit())

async function submit(){
    var list = [[],[],[],[],[],[]];
    for(let i=1;i<200;i+=2){
        let c = (i-1)/2;
        if(document.getElementById('table').childNodes[i].id == 'intake2-'){
            list[0].push(c)
            list[0].push(c+1)
        }
        else if(document.getElementById('table').childNodes[i].id == 'intake2V'){
            list[0].push(c)
            list[0].push(c+10)
        }
        if(document.getElementById('table').childNodes[i].id === 'intake3-'){
            list[1].push(c)
            list[1].push(c+1)
            list[1].push(c+2);
        }
        else if(document.getElementById('table').childNodes[i].id === 'intake3V'){
            list[1].push(c)
            list[1].push(c+10)
            list[1].push(c+20);
        }
        if(document.getElementById('table').childNodes[i].id === 'intake32-'){
            list[2].push(c)
            list[2].push(c+1)
            list[2].push(c+2);
        }
        else if(document.getElementById('table').childNodes[i].id == 'intake32V'){
            list[2].push(c)
            list[2].push(c+10)
            list[2].push(c+20);
        }
        if(document.getElementById('table').childNodes[i].id == 'intake4-'){
            list[3].push(c)
            list[3].push(c+1)
            list[3].push(c+2);
            list[3].push(c+3);
        }
        else if(document.getElementById('table').childNodes[i].id == 'intake4V'){
            list[3].push(c)
            list[3].push(c+10)
            list[3].push(c+20);
            list[3].push(c+30);
        }
        if(document.getElementById('table').childNodes[i].id == 'intake42-'){
            list[4].push(c)
            list[4].push(c+1)
            list[4].push(c+2);
            list[4].push(c+3);
        }
        else if(document.getElementById('table').childNodes[i].id == 'intake42V'){
            list[4].push(c)
            list[4].push(c+10)
            list[4].push(c+20);
            list[4].push(c+30);
        }
        if(document.getElementById('table').childNodes[i].id == 'intake5-'){
            list[5].push(c)
            list[5].push(c+1)
            list[5].push(c+2);
            list[5].push(c+3);
            list[5].push(c+4);

        }
        else if(document.getElementById('table').childNodes[i].id == 'intake5V'){
            list[5].push(c)
            list[5].push(c+10)
            list[5].push(c+20);
            list[5].push(c+30);
            list[5].push(c+40);

        }


    }
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        if (list[i].length == 0) {
            console.log('not finished')
            document.querySelector('.warning').textContent = "Please place all 6 ships in the battle board"
            return
        }
    }
    await setupShips(parseInt(myPIN), window.atob(myName), list)
    document.querySelector('.warning').textContent = ""
    return list;//--------------------fetch-----------------------//
}

// var timeLimitInMinutes = 2;
// var timeLimitInSeconds = timeLimitInMinutes * 60;
// let timerElement = document.getElementById('timer');

// function startTimer() {
//   timeLimitInSeconds--;
//   var minutes = Math.floor(timeLimitInSeconds / 60);
//   var seconds = timeLimitInSeconds % 60;

//   if (timeLimitInSeconds < 0) {
//     timerElement.textContent = '00:00';
//     clearInterval(timerInterval);
//     return;
//   }

//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   document.getElementById('timer').innerHTML = minutes + ':' + seconds;
//   // timerElement.textContent = minutes + ':' + seconds;
// }

// var timerInterval = setInterval(startTimer, 1000);

setInterval(async function() {
    const gameroom = await getLobby(parseInt(myPIN))
    for (let i = 0; i < gameroom.player.length; i++) {
        if (gameroom.player[i].status !== "ready")
            return
    }
    window.location.href = `/game?lobbyPIN=${myPIN}&name=${myName}&id=${parseInt(id)}`
}, 700)