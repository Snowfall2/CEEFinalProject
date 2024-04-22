let getlistattack = [100,100,100,1000];//1000 is person that attck all people // 400 is player who already dead 

import * as u from "../api/game.js"
import { getLobby, deleteGame, getPlayer } from "../api/lobby.js";

const urlParams = new URLSearchParams(window.location.search)
const myName = window.atob(urlParams.get('name'))
const myPIN = urlParams.get('lobbyPIN')
const id = urlParams.get('id')

let me = parseInt(id) - 1
let turn = me
let rank = 0
let except = [me]
let mystatus = true;//--------------------------alive:true , die:false
let root = document.querySelector(':root')

const pin = parseInt(myPIN)
const gameroom = await getLobby(pin)

const ship1 = await getPlayer(pin, gameroom.player[0].name)
let player1 = ship1.ship
const shipd1 = await getPlayer(pin, gameroom.player[0].name)
let d1 = shipd1.ship

const ship2 = await getPlayer(pin, gameroom.player[1].name)
let player2 = ship2.ship
const shipd2 = await getPlayer(pin, gameroom.player[1].name)
let d2 = shipd2.ship

const ship3 = await getPlayer(pin, gameroom.player[2].name)
let player3 = ship3.ship
const shipd3 = await getPlayer(pin, gameroom.player[2].name)
let d3 = shipd3.ship

const ship4 = await getPlayer(pin, gameroom.player[3].name)
let player4 = ship4.ship
const shipd4 = await getPlayer(pin, gameroom.player[3].name)
let d4 = shipd4.ship

let player = [player1,player2,player3,player4]
let d =[d1,d2,d3,d4];
console.log(player)
console.log(d)
// document.addEventListener('DOMContentLoaded', async () => {
//     const pin = parseInt(myPIN)
//     const gameroom = await getLobby(pin)
//     const ship1 = await getPlayer(pin, gameroom.player[0].name)
//     player1 = ship1.ship
//     d1 = ship1.ship
//     const ship2 = await getPlayer(pin, gameroom.player[1].name)
//     player2 = ship2.ship
//     d2 = ship2.ship
//     const ship3 = await getPlayer(pin, gameroom.player[2].name)
//     player3 = ship3.ship
//     d3 = ship3.ship
//     const ship4 = await getPlayer(pin, gameroom.player[3].name)
//     player4 = ship4.ship
//     d4 = ship4.ship
//     player = [player1,player2,player3,player4]
//     d =[d1,d2,d3,d4];
// })

function popme(){
    for(let i=0;i<player[me].length;i++){
        popout(me,i)
    }    
}
function updateboard(){//----------------------รับโจมตีจาก getlistattack
    for(let i=0;i<4;i++){
        if(con(player[i]).includes(getlistattack[i])){
            for(let j=0;j<player[i].length;j++){
                if(player[i][j].includes(getlistattack[i])){
                    player[i][j].splice(player[i][j].indexOf(getlistattack[i]),1)
                    if(player[i][j].length==0){
                        popout(i,j)
                    }
                    console.log(i,getlistattack[i])
                    updateboardwithpoint(i,getlistattack[i],1);
                }
            }
        }
    }
}
function updateboardwithpoint(i,p,k){
    console.log(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[adapt(i)[p]])
    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[adapt(i)[p]].className = 'intake';
    let div = document.createElement('div')
    div.className = 'shooted'
    if(k==1){
        div.classList.add('hit')
    }
    else{
        div.classList.add('miss')
    }
    console.log(div)
    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[adapt(i)[p]].appendChild(div)
}
function getdestroy(i,j){
        for(let k=0;k<player[i].length;k++){
            for(let g=0;g<player[i][k].length;g++){
                if(player[i][k][g] ==j){
                    player[i][k].splice(g,1)
                    if(player[i][k].length==0){
                        popout(i,k);
                    }
                }
            }
        } 
    
}
function popout(i,k){
    let img = document.createElement('img')
    if(d[i][k][1]-d[i][k][0] <10){
        if(k==0){img.className = 'horizontal-img2'; img.src='../img/ship/2block.png';root.style.setProperty('--w',2);}
        if(k==1){img.className = 'horizontal-img3'; img.src='../img/ship/3block.png';root.style.setProperty('--w',3);}
        if(k==2){img.className = 'horizontal-img3'; img.src='../img/ship/3block.png';root.style.setProperty('--w',3);}
        if(k==3){img.className = 'horizontal-img4'; img.src='../img/ship/4block.png';root.style.setProperty('--w',4);}
        if(k==4){img.className = 'horizontal-img42'; img.src='../img/ship/42block.png';root.style.setProperty('--w',4);}
        if(k==5){img.className = 'horizontal-img5'; img.src='../img/ship/5block.png';root.style.setProperty('--w',5);}
    }
    else{
        if(k==0){img.className = 'vertical-img2'; img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',2);}
        if(k==1){img.className = 'vertical-img3'; img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3);}
        if(k==2){img.className = 'vertical-img3'; img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3);}
        if(k==3){img.className = 'vertical-img4'; img.src='../img/ship/4blockrot.png';root.style.setProperty('--h',4);}
        if(k==4){img.className = 'vertical-img42'; img.src='../img/ship/42blockrot.png';root.style.setProperty('--h',4);}
        if(k==5){img.className = 'vertical-img5'; img.src='../img/ship/5blockrot.png';root.style.setProperty('--h',5);}
    }
    console.log(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[adapt(i)[(d[i][k][0])]])
    console.log(adapt(i), d[i][k][0])
    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[adapt(i)[(d[i][k][0])]].appendChild(img)
}
function checkdeath(){//-------------------------push death person to except array
    for(let i =0;i<4;i++){
        let c=  0;
        for(let j =0;j<player[i].length;j++){
            if(player[i][j].length==0){
                c += 1;
            }
        }
        if(c==player[i].length){
            if(i==me){
                mystatus = false; 
            }
            if(!except.includes(i)){
                except.push(i)
            }
        }
    }
    
}

function changeTableColor() {
    const table = document.querySelectorAll('.battle-board .table')

    table.forEach((table, i) => {
        if (except.includes(i) && i !== me) {
            table.style.backgroundColor = "rgba(149, 157, 165, 0.6)"
        }
    })
}

function adapt(i){
    let h =110;
    let l = []
    for(let k=0;k<h;k++){
        if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[k].className !== undefined){
            l.push(k)
        }
    }
    return l;
}
function con(l){//_______make [[1,2],[12,13]] to [1,2,12,13]
    let list = []
    for(let i=0;i<l.length;i++){
        for(let j=0;j<l[i].length;j++){
            list.push(l[i][j]);
        }
    }
    return list;
}

document.querySelector('.attack-button').addEventListener('click', () => attack())

async function attack(){//------------------------button attack
    let c = 0;
    let l  =[400,400,400,400];
    if(mystatus){l[me] =1000}
    for(let i=0;i< document.getElementsByClassName('shooted').length;i++){
        if(document.getElementsByClassName('shooted')[i].classList.length==1){
            c += 1;
    }
    }
    for(let i=0;i<4;i++){
        if(!except.includes(i)){
            for(let j=0;j<110;j++){
                if(true){
                    if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className === 'intake'){
                        if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.length==1){
                            l[i] = adapt(i).indexOf(j);
                            if(con(player[i]).includes(adapt(i).indexOf(j))){
                                document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('hit');
                                getdestroy(i,adapt(i).indexOf(j))
                            }
                            else{
                                document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('miss');
                            } 
                        }
                    }                   
                }
            }
        }
    }
    checkdeath()
    changeTableColor()
    if (except.length == 4) {
        await u.updateRank(parseInt(myPIN))
        const gameroom = await getLobby(parseInt(myPIN))
        rank = gameroom.rank
        document.querySelector('.game-over').style.display = "block"
        document.querySelector('.rank').textContent = "You finished at rank : " + String(rank)
        document.querySelector('.new-game').addEventListener('click', function() {
            window.location.href = '/'
        })
        if (rank == 4)
            await deleteGame(parseInt(myPIN))
        console.log('you win')
    }
    console.log(l)
    return l;//----------------------------------fetch---------------------400 mean dead ,1000 mean myself
}
//active all function
updateboard();
checkdeath();
changeTableColor();
popme()


if(mystatus){//---------------------if  

    if(me != 2){
        document.getElementsByClassName('tag')[2].childNodes[1].textContent =  "Player 3's board";
        document.getElementsByClassName('tag')[me].childNodes[1].textContent =  'Your board';
        document.getElementsByClassName('tag')[me].appendChild(document.getElementsByClassName('tag')[2].childNodes[3])
    }
    for(let i=0;i<4;i++){
        if(!except.includes(i)){
            for(let j=0;j<110;j++){
                if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className !== undefined){
                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].addEventListener('mouseover',function (){
                        if(mystatus && me == turn ){
                            root.style.setProperty('--c','gray');
                        }
                        else{
                            root.style.setProperty('--c',null);
                        }
                    })
                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].addEventListener('click' ,function (){
                        if(getComputedStyle(root).getPropertyValue('--c')=='gray' && document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className!='intake'){
                            for(let k =0;k<document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].getElementsByClassName('shooted').length;k++){
                                if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].getElementsByClassName('shooted')[k].classList.length != 2){
                                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].getElementsByClassName('shooted')[k].parentElement.className='block';
                                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].getElementsByClassName('shooted')[k].parentElement.removeChild(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].getElementsByClassName('shooted')[k])
                                }
                            }
                            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className = 'intake'
                            console.log(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j])
                            let div = document.createElement('div')
                            div.className ='shooted'
                            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].appendChild(div)
                            

                        }
                    })
                    
                }
            }
        }
        else{
            for(let j=0;j<110;j++){
                if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className !== undefined){
                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].addEventListener('mouseover',function (){
                        root.style.setProperty('--c', 'rgba(2, 116, 231, 0)');
                    })
                }
            }
        }
        
    }
    document.addEventListener('DOMContentLoaded', () => {
    }
    )
}

else{//------------------if die
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementsByClassName('command-text')[0].innerHTML = "Player "+ (turn+1)+"'s turn to attack"
        if(me != 2){
            document.getElementsByClassName('tag')[2].childNodes[1].textContent =  "Player 3's board";
            document.getElementsByClassName('tag')[me].childNodes[1].textContent =  'Your board';
            document.getElementsByClassName('tag')[me].appendChild(document.getElementsByClassName('tag')[2].childNodes[3])}})
    //_________________________fetch whatever you want
}