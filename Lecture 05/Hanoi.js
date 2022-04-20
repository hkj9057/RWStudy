var arraydiv1 = new Array();
var arraydiv2 = new Array();
var arraydiv3 = new Array();
var arraydiv4 = document.getElementById("arraydiv4");
var arraydiv5 = document.getElementById('arraydiv5');
var arraydiv6 = document.getElementById('arraydiv6');
var i;

arraydiv1.push(document.createTextNode("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"));
arraydiv1.push(document.createTextNode("🟨🟨🟨🟨🟨🟨🟨🟨🟨"));
arraydiv1.push(document.createTextNode("🟩🟩🟩🟩🟩🟩🟩"));
arraydiv1.push(document.createTextNode("🟦🟦🟦🟦🟦"));
arraydiv1.push(document.createTextNode("🟪🟪🟪"));
arraydiv1.push(document.createTextNode("⬛"));

function basicrender(a, b)
{
    a.appendChild(arraydiv1[i]); 
    b.appendChild(document.createElement('br'));
        
}

for (i = 0; i < 6; i++) {
    basicrender(arraydiv1)
    
}
arraydiv4.appendChild(arraydiv1[0]); 
    arraydiv4.appendChild(document.createElement('br'));
    arraydiv4.appendChild(arraydiv1[1]); 
    arraydiv4.appendChild(document.createElement('br'));
    arraydiv4.appendChild(arraydiv1[2]); 
    arraydiv4.appendChild(document.createElement('br'));
    arraydiv4.appendChild(arraydiv1[3]); 
    arraydiv4.appendChild(document.createElement('br'));
    arraydiv4.appendChild(arraydiv1[4]); 
    arraydiv4.appendChild(document.createElement('br'));
    arraydiv4.appendChild(arraydiv1[5]); 
   


function firstboxmove()
{
    arraydiv2.push(arraydiv1[5]);
    arraydiv5.appendChild(arraydiv2[0]);
}


