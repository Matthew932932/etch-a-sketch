    
function MWredraw(numloopsV)
{    
    const cont = document.querySelector(".container");
    cont.textContent = '';
    
    if(numloopsV>100) { numloopsV = 100;}
    
    for (let j = 1; j < numloopsV; j++)
    {    
        
        const rowdiv = document.createElement("div");
        rowdiv.setAttribute("class", "row");
        cont.appendChild(rowdiv);

        for (let i = 1; i < numloopsV; i++)
        {
            /*let strbro = "col" + i;
            console.log(strbro);
            const coldiv = document.createElement("div");
            //coldiv.setAttribute("class", "col");
            coldiv.setAttribute("class", strbro);
            rowdiv.appendChild(coldiv);*/
            let strbro = "col" + i + j;
            //let strbroRow = "row" + j;
            //console.log(strbro);
            //console.log(strbroRow);
            const coldiv = document.createElement("div");
            coldiv.setAttribute("class", "col " + strbro);
            //coldiv.setAttribute("class", strbro);
            rowdiv.appendChild(coldiv);
            const colEnt = document.querySelector("." + strbro);
            colEnt.addEventListener("mouseenter", function (e) {
                //console.log("getting in");
                e.target.style.background = "blue";
            });
        }

            /*let strbro = "col1";
            console.log(strbro);
            const coldiv = document.createElement("div");
            coldiv.setAttribute("class", "col " + strbro);
            //coldiv.setAttribute("class", strbro);
            rowdiv.appendChild(coldiv);

            let strbro2 = "col col2";
            console.log(strbro);
            const coldiv2 = document.createElement("div");
            //coldiv.setAttribute("class", "col");
            coldiv2.setAttribute("class", strbro2);
            rowdiv.appendChild(coldiv2);

            let strbro3 = "col col3";
            console.log(strbro);
            const coldiv3 = document.createElement("div");
            //coldiv.setAttribute("class", "col");
            coldiv3.setAttribute("class", strbro3);
            rowdiv.appendChild(coldiv3);*/


    }
}


const input = document.querySelector('#inp-num');
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
      
    //e.target.style.background = "blue";
    const numloops = input.value;
    MWredraw(numloops);
    input.focus();
    //console.log("got here");

});


//   const list = document.querySelector('ul');
//   const input = document.querySelector('input');
//   const button = document.querySelector('button');

//   button.addEventListener('click', () => {
//     const myItem = input.value;
//     input.value = '';

//     const listItem = document.createElement('li');
//     const listText = document.createElement('span');
//     const listBtn = document.createElement('button');

//     listItem.appendChild(listText);
//     listText.textContent = myItem;
//     listItem.appendChild(listBtn);
//     listBtn.textContent = 'Delete';
//     list.appendChild(listItem);

//     listBtn.addEventListener('click', () => {
//       list.removeChild(listItem);
//     });

//     input.focus();
//   });


console.log("done");

//startListener()
//{
    //const colEnt = document.querySelector(".col");
    //colEnt.addEventListener("mouseenter", function (e) {
        //console.log("getting in");
        //e.target.style.background = "blue";
    //});

//}