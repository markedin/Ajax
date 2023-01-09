//Step 1: create XMLHttpRequest()      
function getContent() {
    var ajax = new XMLHttpRequest();
//Step 2: Call on AJAX Open();
    ajax.open('GET', 'content.html');
 //Step 3: Definte The AJAX Callback
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4) { //this line says if the readyState of the ajax object (XMLHttpRequst() is 4 (ready),
                                //then change the HTML element 'content' to the response text received from the server
            document.getElementById('content').innerHTML = ajax.responseText;
            }
    }
    //Step 4: Call on the AJAX Send();
    ajax.send();
        document.getElementById('btn_content').style.display = none;
    }


//Step 1: create XMLHttpRequest()     
function getContent2() {
    const xhttp = new XMLHttpRequest();
    //Step 2: Call on AJAX Open();
    xhttp.open("GET", "content2.html");
    //Step 3: Definte The AJAX Callback
    xhttp.onload = function() {
        if(xhttp.readyState == 4) {   //this line says if the readyState of the ajax object (XMLHttpRequst() is 4 (ready),
                                       //then change the HTML element 'content' to the response text received from the server
        document.getElementById("content2").innerHTML = this.responseText;
        }
    }
    //Step 4: Call on the AJAX Send();
    xhttp.send();
}