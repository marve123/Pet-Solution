          /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
          function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        
        
    
        function myFunction() {
            input = document.getElementById("myInput");
            
        var input, filter, divOutside, divInner, p, i, txtValue;
        filter = input.value.toUpperCase();
        divOutside = document.getElementById("outer");
        divInner = divOutside.getElementsByTagName("li");
        for (i = 0; i < divInner.length; i++) {
            p = divInner[i].getElementsByTagName("p")[0];
            txtValue = p.textContent || p.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divInner[i].style.display = "";
            } else {
                divInner[i].style.display = "none";
            }
        }

        if(input.value < 1){
            divOutside.style.visibility = 'hidden'
        }else{
            divOutside.style.visibility = 'visible'
            divOutside.style.display = 'block'
        }
    }



// function create(){
//     var name;
//     var address;
//     var postCode;
//     var tel;
//     var email;
// var array= [];

//     name.document.getElementById('newName').value;
//     address.document.getElementById('Address').value;
//     postCode.document.getElementById('Postcode').value;
//     tel.document.getElementById('Telephone').value;
//     email.document.getElementById('Email').value;

// array[0] = name;
// array[1] = address;
// array[2] = postCode;
// array[3] = tel;
// array[4] = email;


// const main = document.querySelector(".mainRow");
// const li, liRow, liClass, div1, div1Class, div1P, div1Pid, div2, div2Class, div3Class, div2I, div2ICl, div3ICl, div3I, div3;
// li = document.createElement("LI");
// liRow = document.createAttribute("class");
// liRow.value = "row";
// li.setAttributeNode(liRow);
// liClass = document.createAttribute("id");
// liClass.value = "inner";
// li.setAttributeNode(liClass);
// main.appendChild(li);
// div1 = document.createElement("DIV");
// div1Class = document.createAttribute("class");
// div1Class.value = "col-md-6";
// div1.setAttributeNode(div1Class);
// li.appendChild(div1);
// div1P = document.createElement("P");
// div1Pid = document.createAttribute("id");
// div1Pid.value = "div1Pid";
// div1P.setAttributeNode(div1Pid);
// div1.appendChild(div1P);
// div2 = document.createElement("DIV");
// div2Class = document.createAttribute("class");
// div2Class.value = "col-md-3";
// div2.setAttributeNode(div2Class);
// li.appendChild(div2);

// div2I = document.createElement("I");
// div2ICl = document.createAttribute("class");
// div2ICl.value = "fa fa-map-marker fa-3x i";
// div2I.setAttributeNode(div2ICl);
// div2.appendChild(div2I);

// div3 = document.createElement("DIV");
// div3Class = document.createAttribute("class");
// div3Class.value = "col-md-3";
// div3.setAttributeNode(div3Class);
// li.appendChild(div3);

// div3I = document.createElement("I");
// div3ICl = document.createAttribute("class");
// div3ICl.value = "fa fa-map-marker fa-3x i";
// div3I.setAttributeNode(div3ICl);
// div3.appendChild(div3I);


// localStorage.setItem("myLocalStorage", JSON.stringify(name));
// const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
// console.log(myLocalData); 
// const pId = document.getElementById("div1Pid");
//     pId.innerText = myLocalData;
// }
// console.log(main);









    


//  function myMap() {
//             var mapProp = {
//                 center:new google.maps.LatLng(51.508742,-0.120850),
//                 zoom:5,
//             };
//             var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//             }
//             myMap();