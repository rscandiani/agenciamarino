    /** Mobile **/
    
    /** Data e hora **/
    var dt = new Date();
    document.getElementById("datamo").innerHTML = (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear()+ " ");

    /** Dia da semana **/
    var d = new Date();
    var days = ["Domingo, ","Segunda-Feira, ","Terça-Feira, ","Quarta-feira, ","Quinta-Feira, ","Sexta-Feira, ","Sábado, "];
    document.getElementById("diadasemanamo").innerHTML = days[d.getDay()];

    var dt = new Date();
    document.getElementById("horamo").innerHTML = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));


    /** Desktop **/

    /** Data e hora **/
    var dt = new Date();
    document.getElementById("datade").innerHTML = (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear()+ " ");
    
    /** Dia da semana **/
    var d = new Date();
    var days = ["Domingo, ","Segunda-Feira, ","Terça-Feira, ","Quarta-feira, ","Quinta-Feira, ","Sexta-Feira, ","Sábado, "];
    document.getElementById("diadasemanade").innerHTML = days[d.getDay()];

    var dt = new Date();
    document.getElementById("horade").innerHTML = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));