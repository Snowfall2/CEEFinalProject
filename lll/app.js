document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const width = 10
    function createBoard(grid) {
        for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        let text = document.createTextNode(i);
        square.appendChild(text);
        square.id = "Block"
        grid.appendChild(square)
        }
    }
    createBoard(userGrid)
    for(let i=0;i<100;i++){
        let userGrid = document.querySelector('.grid-user');
        let root = document.querySelector(':root');
        userGrid.childNodes[i].addEventListener("mouseover",function() {
            if(document.getElementById('selected').childNodes.length==2){
                if(document.getElementById("selected").childNodes[1].id != 'rot'){
                   if((document.getElementById("selected").childNodes[1].firstChild.id)==="i2block"){
                        if(i%10 < (i+1)%10){root.style.setProperty('--c','gray')}
                        else{root.style.setProperty('--c','red')}
                    }
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i3block"){if(i%10 < (i+2)%10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i4block"){if(i%10 < (i+3)%10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i42block"){if(i%10 < (i+3)%10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i5block"){if(i%10 < (i+4)%10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                }
                else{
                    if((document.getElementById("selected").childNodes[1].firstChild.id)==="i2block"){
                        if((i+10)/10 <10){root.style.setProperty('--c','gray')}
                        else{root.style.setProperty('--c','red')}
                    }
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i3block"){if((i+20)/10 <10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i4block"){if((i+30)/10 <10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                   else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i5block"){if((i+40)/10 <10){root.style.setProperty('--c','gray')}
                   else{root.style.setProperty('--c','red')}}
                }
            }
                });
    }  
    for(let i=0;i<100;i++){
        let userGrid = document.querySelector('.grid-user');
        let root = document.querySelector(':root');
        userGrid.childNodes[i].addEventListener("click",function() {
            if(document.getElementById("selected").childNodes[1].id != 'rot'){
                
                   if((document.getElementById("selected").childNodes[1].childNodes[0].id)==="i2block"){
                      if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                        userGrid.childNodes[i].id = 'Blockintake2'
                        document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                        root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                      }
                    }
                    else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i3block"){
                        if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                          userGrid.childNodes[i].id = 'Blockintake3'
                          document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                          root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                        }
                      }
                    else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i4block"){
                        if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                           userGrid.childNodes[i].id = 'Blockintake41'
                           document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                           root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                        }
                      }
                     else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i42block"){
                        if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                           userGrid.childNodes[i].id = 'Blockintake42'
                           document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                           root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                        }
                      }
                    else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i5block"){
                        if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                          userGrid.childNodes[i].id = 'Blockintake5'
                          document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                          root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                        }
                      }
                    
            }
            else{
                if((document.getElementById("selected").childNodes[1].firstChild.id)==="i2block"){
                    if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                      userGrid.childNodes[i].id = 'Blockintake2rot'
                      document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                      root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                    }
                  }
                  else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i3block"){
                      if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                        userGrid.childNodes[i].id = 'Blockintake3rot'
                        document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                        root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                      }
                    }
                  else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i4block"){
                      if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                         userGrid.childNodes[i].id = 'Blockintake41rot'
                         document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                         root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                      }
                    }
                    else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i42block"){
                      if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                         userGrid.childNodes[i].id = 'Blockintake42rot'
                         document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                         root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                      }
                    }
                  else if((document.getElementById("selected").childNodes[1].firstChild.id)==="i5block"){
                      if(getComputedStyle(root).getPropertyValue('--c')=='gray'){
                        userGrid.childNodes[i].id = 'Blockintake5rot'
                        document.getElementById('selected').removeChild(document.getElementById('selected').childNodes[1])
                        root.style.setProperty('--w',0);
                        root.style.setProperty('--h',0);
                      }
                    }
                  
            }
        }) 
    }

});
function selectfunc(ship,l){
    
    let div2 = document.createElement('div');
    div2.appendChild(ship);
    let id;
    if(document.getElementById("selected").childElementCount != 0){
        id = "ship";
        let root = document.querySelector(':root');
        var rootstyle = getComputedStyle(root);
        var i = rootstyle.getPropertyValue('--w');
        root.style.setProperty('--w',0);
        root.style.setProperty('--h',0);
    }
    else{
        id = 'selected';
        let root = document.querySelector(':root');
        var rootstyle = getComputedStyle(root);
        var i = rootstyle.getPropertyValue('--w');
        root.style.setProperty('--w',l);
        root.style.setProperty('--h',1);

    }
    document.getElementById(id).appendChild(div2);
    for(let i=0;i<document.getElementById("ship").childNodes.length;i++){
        if(document.getElementById("ship").childNodes[i].innerHTML === ""){
            document.getElementById("ship").removeChild(document.getElementById("ship").childNodes[i])
        }
    }
    for(let i=0;i<document.getElementById("selected").childNodes.length;i++){
        if(document.getElementById("selected").childNodes[i].innerHTML === ""){
            document.getElementById("selected").removeChild(document.getElementById("selected").childNodes[i])
        }
    }
    document.getElementById("selected").childNodes[1].id = 'unrot';

}
function rotated() {
    if(document.getElementById("selected").childNodes[1].id === "rot"){
        document.getElementById("selected").childNodes[1].id= "unrot";
        let root = document.querySelector(':root');
        var rootstyle = getComputedStyle(root);
        root.style.setProperty('--w',rootstyle.getPropertyValue('--h'));
        root.style.setProperty('--h',1);
    }
    else{
        document.getElementById("selected").childNodes[1].id = "rot";
        let root = document.querySelector(':root');
        var rootstyle = getComputedStyle(root);
        var i = rootstyle.getPropertyValue('--h');
        var j = rootstyle.getPropertyValue('--w');
        root.style.setProperty('--h',j);
        root.style.setProperty('--w',1);
        

    }
}
function submit(){
   var list = [];
   let ship2 = document.getElementById('Blockintake2');
   let z =1;
   if(ship2==null){
    ship2 = document.getElementById('Blockintake2rot')
    z =10;
   }
   list.push([Number(ship2.innerHTML),Number(ship2.innerHTML)+1*z])

   let ship3 = document.getElementById('Blockintake3');
   z =1;
   if(ship3==null){
    ship3 = document.getElementById('Blockintake3rot')
    z =10;
   }
   list.push([Number(ship3.innerHTML),Number(ship3.innerHTML)+1*z,Number(ship3.innerHTML)+2*z])

   let ship4 = document.getElementById('Blockintake41');
   z =1;
   if(ship4==null){
    ship4 = document.getElementById('Blockintake41rot')
    z =10;
   }
   list.push([Number(ship4.innerHTML),Number(ship4.innerHTML)+1*z,Number(ship4.innerHTML)+2*z,Number(ship4.innerHTML)+3*z])

   let ship42 = document.getElementById('Blockintake42');
   z =1;
   if(ship42==null){
    ship42 = document.getElementById('Blockintake42rot')
    z =10;
   }
   list.push([Number(ship42.innerHTML),Number(ship42.innerHTML)+1*z,Number(ship42.innerHTML)+2*z,Number(ship42.innerHTML)+3*z])

   let ship5 = document.getElementById('Blockintake5');
   z =1;
   if(ship5==null){
    ship5 = document.getElementById('Blockintake5rot')
    z =10;
   }
   list.push([Number(ship5.innerHTML),Number(ship5.innerHTML)+1*z,Number(ship5.innerHTML)+2*z,Number(ship5.innerHTML)+3*z,Number(ship5.innerHTML)+4*z])
   return list;//---------------------featch this pls-----------------------------
  
   
   
}


