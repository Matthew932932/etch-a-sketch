    
for (let i = 0; i < 16; i++)
{    
    const cont = document.querySelector(".container");
    const rowdiv = document.createElement("div");
    rowdiv.setAttribute("class", "row");
    cont.appendChild(rowdiv);

    for (let i = 0; i < 16; i++)
    {
        const coldiv = document.createElement("div");
        coldiv.setAttribute("class", "col");
        rowdiv.appendChild(coldiv);
    }
}