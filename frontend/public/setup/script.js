let root = document.querySelector(':root');
let rootstyle = getComputedStyle(root);

function selectfunc(ship,l){

    let div2 = document.createElement('div');
    let div = document.createElement('div');
    div2.appendChild(ship);
    if(document.getElementById("chosen-ship").childElementCount != 0){
        for(let i=1;i<12;i+=2){
            if(document.getElementById('select-ship').childNodes[i].innerHTML ==''){
                if(document.getElementById('chosen-ship').childElementCount==1 && document.getElementById('chosen-ship').childNodes[0].innerHTML==''){
                    document.getElementById('select-ship').replaceChild(div2,document.getElementById('select-ship').childNodes[i]);
                    (document.getElementById('chosen-ship').removeChild(document.getElementById('chosen-ship').childNodes[0]))
                    root.style.setProperty('--c','rgba(2, 117, 231, 0)')
                    root.style.setProperty('--w',l);
                }
                else if(document.getElementById('chosen-ship').childElementCount==1){
                    document.getElementById("chosen-ship").childNodes[0].id  = "unrot";
                    let c= document.getElementById('chosen-ship').childNodes[0]
                    div.appendChild(document.getElementById('chosen-ship').childNodes[0])
                    document.getElementById('chosen-ship').appendChild(div2)
                    document.getElementById('select-ship').replaceChild(c,document.getElementById('select-ship').childNodes[i]);
                }
                break;
            }
        }
    }
    else{
        document.getElementById('chosen-ship').appendChild(div2)
    }
    if(document.getElementById("chosen-ship").childNodes[0]!=null){
        document.getElementById("chosen-ship").childNodes[0].id = 'unrot';
        root.style.setProperty('--w',l)
        root.style.setProperty('--c','gray')
    }
    console.log(document.getElementById('chosen-ship'))
    root.style.setProperty('--h',1);
}