let player1 = [[71,81],[3,4,5],[60,70,80],[11,12,13,14],[15,16,17,18],[21,31,41,51,61]]
let player2= [[1,2],[3,4,5],[60,70,80],[11,12,13,14],[15,16,17,18],[21,31,41,51,61]]
let player3 = [[1,2],[3,4,5],[60,70,80],[11,12,13,14],[15,16,17,18],[21,31,41,51,61]]
let player4 = [[1,2],[3,4,5],[60,70,80],[11,12,13,14],[15,16,17,18],[21,31,41,51,61]]
let d1= [[],[],[],[],[],[]];
let d2= [[],[],[],[],[],[]];
let d3= [[],[],[],[],[],[]];
let d4= [[],[],[],[],[],[]];
let death = [6,6,6,6];
for(let i=0;i<6;i++){
    for(let j=0;j<player1[i].length;j++){
        d1[i].push(adapt(0)[player1[i][j]])
        d2[i].push(adapt(1)[player2[i][j]])
        d3[i].push(adapt(2)[player3[i][j]])
        d4[i].push(adapt(3)[player4[i][j]])
    }
}
let root = document.querySelector(':root')
let number = 1;//-----me
let except = [number-1]
popout(number-1,0)
popout(number-1,1)
popout(number-1,1)
popout(number-1,3)
popout(number-1,4)
popout(number-1,5)
death[number-1] =6;
document.getElementsByClassName('command-text')[0].innerHTML = "Player "+ number+"'s turn to attack"
function con(l){
    let list = []
    for(let i=0;i<l.length;i++){
        for(let j=0;j<l[i].length;j++){
            list.push(l[i][j]);
        }
    }
    return list;
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
function getdestroy(i,j){
    console.log(3)
    if(i==0){
        for(let k=0;k<player1.length;k++){
            for(let g=0;g<player1[k].length;g++){
                if(player1[k][g] ==j){
                    player1[k].splice(g,1)
                    if(player1[k].length==0){
                        popout(i,k);
                        death[i] -= 1;
                        checkdeath();
                    }
                }
            }
        } 
    }
    if(i==1){
        for(let k=0;k<player2.length;k++){
            for(let g=0;g<player2[k].length;g++){
                if(player2[k][g] ==j){
                    player2[k].splice(g,1)
                    if(player2[k].length==0){
                        popout(i,k);
                        death[i] -= 1
                        checkdeath();

                    }
                }
            }
        }
    }
    if(i==2){
        console.log(4)
        for(let k=0;k<player3.length;k++){
            for(let g=0;g<player3[k].length;g++){
                if(player3[k][g] ==j){
                    player3[k].splice(g,1)
                    console.log(5)
                    console.log(player3)
                    if(player3[k].length==0){
                        popout(i,k)
                        death[i] -= 1
                        checkdeath();

                    }
                }
            }
        }
    }
    if(i==3){
        for(let k=0;k<player4.length;k++){
            for(let g=0;g<player4[k].length;g++){
                if(player4[k][g] ==j){
                    player4[k].splice(g,1)
                    if(player4[k].length==0){
                        popout(i,k)
                        death[i] -= 1
                        checkdeath();

                    }
                }
            }
        }
    }

}
document.addEventListener('DOMContentLoaded', () => {
    if(number != 3){
        document.getElementsByClassName('tag')[2].childNodes[1].textContent =  "Player 3's board";
        document.getElementsByClassName('tag')[number-1].childNodes[1].textContent =  'Your board';
        document.getElementsByClassName('tag')[number-1].appendChild(document.getElementsByClassName('tag')[2].childNodes[3])
    }
    for(let i=0;i<4;i++){
        if(!except.includes(i)){
            for(let j=0;j<110;j++){
                if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className !== undefined){
                    document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].addEventListener('mouseover',function (){
                        root.style.setProperty('--c','gray');
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

})
function attack(){
    let c = 0;
    let l  =[];
    for(let i=0;i< document.getElementsByClassName('shooted').length;i++){
        if(document.getElementsByClassName('shooted')[i].classList.length==1){
            c += 1;
    }
    }
    if(c===(4-except.length)){
        for(let i=0;i<4;i++){
            if(!except.includes(i)){
                for(let j=0;j<110;j++){
                    if(true){
                        if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className === 'intake'){
                            if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.length==1){
                                l.push(adapt(i).indexOf(j));
                                if(i==0){
                                    if(con(player1).includes(adapt(i).indexOf(j))){
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('hit');
                                        getdestroy(i,adapt(i).indexOf(j))

                                    }
                                    else{
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('miss');

                                    }
                                }
                                if(i==1){
                                    if(con(player2).includes(adapt(i).indexOf(j))){
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('hit');
                                        getdestroy(i,adapt(i).indexOf(j))

                                    }
                                    else{
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('miss');

                                    }
                                }
                                if(i==2){
                                    console.log(1)
                                    if(con(player3).includes(adapt(i).indexOf(j))){
                                        console.log(2)
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('hit');
                                        getdestroy(i,adapt(i).indexOf(j))
                                    }
                                    else{
                                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].getElementsByClassName('shooted')[0].classList.add('miss');

                                    }
                                }
                                if(i==3){
                                    if(con(player4).includes(adapt(i).indexOf(j))){
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
    }
    return l;//----------------------------------fetch
}
}
//i:board k:d[k] j:positon
function popout(i,k){
    console.log(i)
    if(i==0){
        console.log(1)
        if(k==0){
            let img = document.createElement('img')
            if(d1[0][1]-d1[0][0]<10){
                img.className = 'horizontal-img2';img.src='../img/ship/2block.png';root.style.setProperty('--w',2)}
            else{ 
                img.className = 'vertical-img2';img.src='../img/ship/2blockrot.png';root.style.setProperty('--h',2)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[0][0]].appendChild(img)
        }
        if(k==1){
            let img = document.createElement('img')
            if(d1[k][1]-d1[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[k][0]].appendChild(img)
        }
        if(k==2){
            let img = document.createElement('img')
            if(d1[k][1]-d1[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[k][0]].appendChild(img)
        }
        if(k==3){
            let img = document.createElement('img')
            if(d1[k][1]-d1[k][0]<10){
                img.className = 'horizontal-img4';img.src='../img/ship/4block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img4';img.src='../img/ship/4blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[k][0]].appendChild(img)
        }
        if(k==4){
            let img = document.createElement('img')
            if(d1[k][1]-d1[k][0]<10){
                img.className = 'horizontal-img42';img.src='../img/ship/42block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img42';img.src='../img/ship/42blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[k][0]].appendChild(img)
        }
        if(k==5){
            let img = document.createElement('img')
            if(d1[k][1]-d1[k][0]<10){
                img.className = 'horizontal-img5';img.src='../img/ship/5block.png';root.style.setProperty('--w',5)}
            else{ 
                img.className = 'vertical-img5';img.src='../img/ship/5blockrot.png';root.style.setProperty('--h',5)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d1[k][0]].appendChild(img)
        }
    }
    if(i==1){
        console.log(2)
        if(k==0){
            let img = document.createElement('img')
            if(d2[0][1]-d2[0][0]<10){
                img.className = 'horizontal-img2';img.src='../img/ship/2block.png';root.style.setProperty('--w',2)}
            else{ 
                img.className = 'vertical-img2';img.src='../img/ship/2blockrot.png';root.style.setProperty('--h',2)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[0][0]].appendChild(img)
        }
        if(k==1){
            let img = document.createElement('img')
            if(d2[k][1]-d2[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[k][0]].appendChild(img)
        }
        if(k==2){
            let img = document.createElement('img')
            if(d2[k][1]-d2[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[k][0]].appendChild(img)
        }
        if(k==3){
            let img = document.createElement('img')
            if(d2[k][1]-d2[k][0]<10){
                img.className = 'horizontal-img4';img.src='../img/ship/4block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img4';img.src='../img/ship/4blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[k][0]].appendChild(img)
        }
        if(k==4){
            let img = document.createElement('img')
            if(d2[k][1]-d2[k][0]<10){
                img.className = 'horizontal-img42';img.src='../img/ship/42block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img42';img.src='../img/ship/42blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[k][0]].appendChild(img)
        }
        if(k==5){
            let img = document.createElement('img')
            if(d2[k][1]-d2[k][0]<10){
                img.className = 'horizontal-img5';img.src='../img/ship/5block.png';root.style.setProperty('--w',5)}
            else{ 
                img.className = 'vertical-img5';img.src='../img/ship/5blockrot.png';root.style.setProperty('--h',5)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d2[k][0]].appendChild(img)
        }
    }
    if(i==2){
        console.log(3)
        if(k==0){
            let img = document.createElement('img')
            if(d3[0][1]-d3[0][0]<10){
                img.className = 'horizontal-img2';img.src='../img/ship/2block.png';root.style.setProperty('--w',2)}
            else{ 
                img.className = 'vertical-img2';img.src='../img/ship/2blockrot.png';root.style.setProperty('--h',2)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
        if(k==1){
            let img = document.createElement('img')
            if(d3[k][1]-d3[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
        if(k==2){
            let img = document.createElement('img')
            if(d3[k][1]-d3[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
        if(k==3){
            let img = document.createElement('img')
            if(d3[k][1]-d3[k][0]<10){
                img.className = 'horizontal-img4';img.src='../img/ship/4block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img4';img.src='../img/ship/4blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
        if(k==4){
            let img = document.createElement('img')
            if(d3[k][1]-d3[k][0]<10){
                img.className = 'horizontal-img42';img.src='../img/ship/42block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img42';img.src='../img/ship/42blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
        if(k==5){
            let img = document.createElement('img')
            if(d3[k][1]-d3[k][0]<10){
                img.className = 'horizontal-img5';img.src='../img/ship/5block.png';root.style.setProperty('--w',5)}
            else{ 
                img.className = 'vertical-img5';img.src='../img/ship/5blockrot.png';root.style.setProperty('--h',5)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d3[k][0]].appendChild(img)
        }
    }
    if(i==3){
        console.log(4)
        if(k==0){
            let img = document.createElement('img')
            if(d4[0][1]-d4[0][0]<10){
                img.className = 'horizontal-img2';img.src='../img/ship/2block.png';root.style.setProperty('--w',2)}
            else{ 
                img.className = 'vertical-img2';img.src='../img/ship/2blockrot.png';root.style.setProperty('--h',2)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[0][0]].appendChild(img)
        }
        if(k==1){
            let img = document.createElement('img')
            if(d4[k][1]-d4[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[k][0]].appendChild(img)
        }
        if(k==2){
            let img = document.createElement('img')
            if(d4[k][1]-d4[k][0]<10){
                img.className = 'horizontal-img3';img.src='../img/ship/3block.png';root.style.setProperty('--w',3)}
            else{ 
                img.className = 'vertical-img3';img.src='../img/ship/3blockrot.png';root.style.setProperty('--h',3)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[k][0]].appendChild(img)
        }
        if(k==3){
            let img = document.createElement('img')
            if(d4[k][1]-d4[k][0]<10){
                img.className = 'horizontal-img4';img.src='../img/ship/4block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img4';img.src='../img/ship/4blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[k][0]].appendChild(img)
        }
        if(k==4){
            let img = document.createElement('img')
            if(d4[k][1]-d4[k][0]<10){
                img.className = 'horizontal-img42';img.src='../img/ship/42block.png';root.style.setProperty('--w',4)}
            else{ 
                img.className = 'vertical-img42';img.src='../img/ship/42blockrot.png';root.style.setProperty('--h',4)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[k][0]].appendChild(img)
        }
        if(k==5){
            let img = document.createElement('img')
            if(d4[k][1]-d4[k][0]<10){
                img.className = 'horizontal-img5';img.src='../img/ship/5block.png';root.style.setProperty('--w',5)}
            else{ 
                img.className = 'vertical-img5';img.src='../img/ship/5blockrot.png';root.style.setProperty('--h',5)}
            document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[d4[k][0]].appendChild(img)
        }
    }
   
}

var timeLimitInSeconds = 15;
let timerElement = document.getElementById('time');

// function startTimer() {
//   timeLimitInSeconds--;
//   var minutes = Math.floor(timeLimitInSeconds / 60);
//   var seconds = timeLimitInSeconds % 60;

//   if (timeLimitInSeconds < 0) {
//     timerElement.textContent = '0';
//     clearInterval(timerInterval);
    
//     return;
//   }

//   if (seconds < 10) {
//     seconds =  seconds;
//   }
//   document.getElementById('time').innerHTML =seconds;
//   // timerElement.textContent = minutes + ':' + seconds;
// }
// var timerInterval = setInterval(startTimer, 1000);

function checkdeath(){
    for(let i =0;i<4;i++){
        if(death[i] == 0  ){
            if(!except.includes(i)){
                except.push(i)
                for(let j=0;j<110;j++){
                    if(document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].className !== undefined){
                        document.getElementsByClassName('board')[i].getElementsByClassName('table')[0].childNodes[j].addEventListener('mouseover',function (){
                            root.style.setProperty('--c', 'rgba(2, 116, 231, 0)');
                        })
                    }
                }
                console.log(i+'is death')
                return i//___________________________________________________index deatch player
        }
    }
    }
}