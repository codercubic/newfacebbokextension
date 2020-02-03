console.log("i am here");


url=document.URL;

        if( url.indexOf('www.facebook.com/groups')>=0 && url.indexOf('/members/')>=0 ){
            start()
        }
        if( url.indexOf('www.facebook.com/groups')>=0){
            startGroup()
        }
        // else{
        //     showErrorMsg();
        // }

//this extention created by ----> fadyAyoobDev@gmail.com

var count=0;
var lastMembers;
var currentMembers;
var currentPost;
var lastMembers;

var intScroll= setInterval(function(){},100);


// // function msgHandler(msg) {
// //     if (msg === 'start' || msg.name === 'start' ) {
// //       checkUrl();
// //     }
// // }

// function checkUrl(){
//     url=document.URL;
    
//     if( url.indexOf('www.facebook.com/groups')>=0 && url.indexOf('/members/')>=0 ){
//         start()
//     }
//     if( url.indexOf('www.facebook.com/groups')>=0){
//         startGroup()
//     }
//     else{
//         showErrorMsg();
//     }
// }

function start(){
    //
    currentMembers= saveToVar();
    lastMembers= saveToVar();
    
    intScroll= setInterval(function(){scrollFunction(); },500);
    
}

function startGroup(){
    currentPost= collectLikes();
}

function collectData(data){
    //Extracting Members List

     rows = [["name", "profileLink", "job","company"]];
    
    for (i=1;i<data.length;i++){

        try{
            links=data[i].getElementsByTagName('a');
            var xx=1;
            link=data[i].getElementsByTagName('a')[links.length-xx].href;
            name=data[i].getElementsByTagName('a')[links.length-1].innerText;
            imgsrc = data[i].getElementsByTagName('img')[0].src;

            if( name.indexOf('recent posts')>0){
                xx++;
                link=data[i].getElementsByTagName('a')[links.length-xx].href;

                name=data[i].getElementsByTagName('a')[links.length-xx].innerText;
            }

            if( name=='Admin'  ){
                xx++;
                link=data[i].getElementsByTagName('a')[links.length-xx].href;

                name=data[i].getElementsByTagName('a')[links.length-xx].innerText;
            }

            link=link.split("fref=gm");
            link=link[0];

            try{
                workLables= data[i].getElementsByClassName('_60rj');
                work=workLables[workLables.length-1].innerText;
                if(!work){
                    work=workLables[workLables.length-2].innerText;
                }
            }

            catch(e){
            }

            if (work.indexOf('Added')==0 || work.indexOf('at')==-1){
                work='';
                job='';
                comp='';
            }

            else{
                try{
                    work=work.split(' at ');

                    job=work[0];
                    comp=work[1];
                }
                catch(e){
                     try{
                    work=work.split(' for ');

                    job=work[0];
                    comp=work[1];
                    }
                    catch(e){

                    }
                }
            }

            rows[i-1]=[name, link, job,comp,imgsrc];  
        }
        catch(e){
            rows[i-1]=['not avilable', 'not avilable', 'not avilable','not avilable'];
        } 
    }
     var tt1 = localStorage.getItem('finalArr');
     var deletingitems = localStorage.getItem('items');
     var deletingimages = localStorage.getItem('imageitems');
     var tt3 = localStorage.getItem('imagearr1');

        if (tt1!==null && tt3!==null){

            var dynamicnew = "";
            var tt2 = JSON.parse(tt1);
            var tt4 = JSON.parse(tt3);
            var tt6 = JSON.parse(deletingitems);
            var tt7 = JSON.parse(deletingimages);

         if(tt6!==null && tt7!==null)
            {
                for (var x = 0; x < tt6.length; x++) { //Move the for loop from here
                    tt7[x] = tt7[x].replace(/[[\]']/g,"");
                    dynamicnew += 
                    '<li id="nameid'+x+'" value=nameid'+x+'><div class=profileleft><div class=checkboxfield id="checkboxfield"> <input type="checkbox" name="vehicle1" value="Bike"></div><div class=imgcircle><img src= ' + tt7[x]+'></img></div></div><div class=profileright> <h4 class=profilenamefield>'+tt6[x].name+'</h4><div class=profiledetaile><p>Likes<p><p>Comments</p><p>Connected 2 years ago</p></div><div class="testclass"><div class=""><p>'+tt6[x].Likes+'</p><p>'+tt6[x].Comments+'</p><p>7</p></div><div class=""><p>Likes Point</p><p>Comments Point</p><p>6</p></div><div class=""><p>'+ tt6[x].LikesPoint+'</p><p>'+ tt6[x].CommentsPoint+'</p><p>7</p></div></div></div></li>';
                };
                
            }
            else {
                for (var x = 0; x < tt2.length; x++) { //Move the for loop from here
                    tt4[x] = tt4[x].replace(/[[\]']/g,"");
                    dynamicnew += 
                    '<li id="nameid'+x+'" value=nameid'+x+'><div class=profileleft><div class=checkboxfield id="checkboxfield"> <input type="checkbox" name="vehicle1" value="Bike"></div><div class=imgcircle><img src= ' + tt4[x]+'></img></div></div><div class=profileright> <h4 class=profilenamefield>'+tt2[x].name+'</h4><div class=profiledetaile><p>Likes<p><p>Comments</p><p>Connected 2 years ago</p></div><div class="testclass"><div class=""><p>'+tt2[x].Likes+'</p><p>'+tt2[x].Comments+'</p><p>7</p></div><div class=""><p>Likes Point</p><p>Comments Point</p><p>6</p></div><div class=""><p>'+ tt2[x].LikesPoint+'</p><p>'+ tt2[x].CommentsPoint+'</p><p>7</p></div></div></div></li>';
                };
            }

      $('#globalContainer').append(`
            <style>
            body {font-family: Arial, Helvetica, sans-serif;}
            
            /* The Modal (background) */
            .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 9; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
            
            /* Modal Content */
            .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
            }
            
            /* The Close Button */
            .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            }
            
            .close:hover,
            .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
            }
            .facebookpopup,
            .facebookpopup li,
            .profileleft,
            .profileright {
                display: flex;
                flex-wrap: wrap;
            }
            .facebookpopup {
                height: 300px;
                overflow-y: scroll;
            }
            .facebookpopup::-webkit-scrollbar {
                width: 6px;
            }
            .facebookpopup::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            .facebookpopup::-webkit-scrollbar-thumb {
                background-color: darkgrey;
                outline: 1px solid slategrey;
            }
            .facebookpopup li {
                ackground: #f2f2f3;
                padding: 8px;
                margin-bottom: 10px;
                margin-right: 0px;
                width: 100%;
            }
            .profileleft {
                width: 20%;
            }
            .profileright {
                width: calc(100% - 20%);    
            }
            .checkboxfield {
                width: 30%;
            }
            .checkboxfield input {
                width: 20px;
                height: 20px;
            }
            .imgcircle {
                width: 70%;
            }
            .imgcircle img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color:#ddd;
            }
            .profilenamefield {
                width: 100%;
                font-size: 15px;
                color: #19294a;
            }
            .profileright P {
                margin-bottom: 0px;
                margin-top: 5px;
                color: #5b719e;
            }
            .managefeild  {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid #19294a;
                padding-bottom: 15px;
                margin-bottom: 15px;
            }
            .managefeild b {
                font-size: 17px;
                color: #19294a;
            }
            .deletbtnfield {
                display: flex;
                flex-wrap: wrap;
            }
            .managefeild button {
                margin: 0px 20px;
                padding: 9px 18px;
                background: transparent;
                border: 1px solid #19294a;
                box-shadow: none;
                border-radius: 5px;
                color: #fff;
                font-size: 13px;
                cursor:pointer;
                background: #19294a;
            }
            .deletbtnfield button:last-child {
                background: #19294a;
                color: #fff;
            }
            .profiledetaile {
                width: 35%;
            }
            .testclass {
                width: 65%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            
            // .facebookpopup .removed {
            //     display:none;
            // }
            </style>
            
            
            <!-- The Modal -->
            <div id="myModalId" class="modal">
            
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close closebutton">&times;</span>
                <div class=managefeild>
                
                <button class="del btnDeleteall" id="btnDeleteall">Delete all</buton>
                <button class="deleteselected" id="btnDeleteid"  name="btnDeletename">Delete Selected</button>
                    
                </div>
                <ul class="facebookpopup" id="facebookpopup">
                    `+dynamicnew+`
                </ul>
            </div>
            
            </div>
            
            `,  
            );

                
    $(".deleteselected").click(function() {
                //var deleteItem = [];
                $("input:checkbox").each(function() {
                    var $this = $(this);
                    if ($this.is(":checked")) {

                    var newdeleted= $(this).parent().parent().parent().find('h4').text();
                    var newdeletedimage= $(this).parent().parent().parent().find('img').attr("src");

                    let news1 = [];
                    let news2 = [];


                    news1.push(newdeleted);
                    news2.push(newdeletedimage);
               

                     $(".clearfix._60rh._gse").each(function() {

                                var thisObject = $(this);
                                var textNames = thisObject.find('._60ri').text();
                                var textimages = thisObject.find('img').attr("src");

                        
                        if(news1.indexOf(textNames) !== -1 && news2.indexOf(textimages) !==-1) {

                            if(thisObject.find('._62qi').trigger("click",true)){
                                modal.style.display = "none";
                                if($(`._54nf ._54ni:nth-child(4) a ._54nh`).trigger("click",true)){  

                                    tt2 = tt2.filter(({name}) => !name.includes(textNames))
                                    tt4 = tt4.filter(tt4 => !tt4.includes(textimages))
                                
                                    localStorage.setItem('items', JSON.stringify(tt2)); 
                                    localStorage.setItem('imageitems', JSON.stringify(tt4)); 
                                
                                    setTimeout(function(){ $(".uiLayer ._59s7 ._5lnf .layerConfirm").trigger('click'); }, 1000);
                            }
                            }
                        }
                    })
                }
        });

    });


   $(".btnDeleteall").click(function() {
        $("input:checkbox").each(function() {
                var $this = $(this);
                var newdeleted= $(this).parent().parent().parent().find('h4').text();
                var newdeletedimage= $(this).parent().parent().parent().find('img').attr("src");

                let news1 = [];
                let news2 = [];
                news1.push(newdeleted);
                news2.push(newdeletedimage);

                $(".clearfix._60rh._gse").each(function() {

                    var thisObject = $(this);
                    var textNames = thisObject.find('._60ri').text();
                    var textimages = thisObject.find('img').attr("src");

                    
                    if(news1.indexOf(textNames) !== -1 && news2.indexOf(textimages) !==-1) {

                        if(thisObject.find('._62qi').trigger("click",true)){
                            modal.style.display = "none";
                            if($(`._54nf ._54ni:nth-child(4) a ._54nh`).trigger("click",true)){  

                                tt2 = tt2.filter(({name}) => !name.includes(textNames))
                                tt4 = tt4.filter(tt4 => !tt4.includes(textimages))
                            
                                localStorage.setItem('items', JSON.stringify(tt2)); 
                                localStorage.setItem('imageitems', JSON.stringify(tt4)); 
                            
                                setTimeout(function(){ $(".uiLayer ._59s7 ._5lnf .layerConfirm").trigger('click'); }, 3000);
                        }
                    }
                 }
            })
     });
});
            
    var modal = document.getElementById("myModalId");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("closebutton")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
        
    }
    
    extractmemberData();
  
}

function scrollFunction(){
    currentMembers= saveToVar();
    window.scrollTo(0, 1000000000000000000000000000);
        if (currentMembers.length!= lastMembers.length){
        lastMembers = saveToVar();
        count=1;
    }
    else {
      count++;
    }
    if(count>=10){
        clearInterval(intScroll);
        collectData(currentMembers);  
    }
}


function saveToVar(){
    Var =[0]
    members= document.getElementsByClassName('clearfix _60rh _gse');
    
    for(i=0;i<members.length;i++){
        Var[i]= document.getElementsByClassName('clearfix _60rh _gse')[i];
    }
    return Var;
}

function saveToGroup(cnt,obj){

        setTimeout(() => {
            //console.log(cnt);
        }, 3000)      
}

function collectLikes () {
    let cnt=0;
    $("div._66lg").each(function(index){
        cnt++;
        $(this).find("span._3dli span._81hb").addClass("81hb"+cnt);    
    });
    let counter=1;
    finalData=[];
    finalcomment=[];
    let newcomment =  $('.fb_content').find('._6qw3');
            finalcomment.push(newcomment);
            var newcommentArr = [];
            for(var i = 0; i < finalcomment.length; i++)
            {
                newcommentArr = newcommentArr.concat(finalcomment[i]);
            }     
     popupCallback(counter,finalData,newcommentArr); 
}

function popupCallback(cnt,finalData,newcommentArr){    
 
     if(cnt<=$("div._66lg").length){
        if($(`.81hb${cnt}`).trigger("click",true)){
            setTimeout(()=>{
                $('._50f4').find('a._5upp')[0].click();
                cnt++;
                popupCallback(cnt,finalData,newcommentArr);
            },3000);
            let abc = $('._50f4').find('li._5i_q');        
            finalData.push(abc);

            var newArr = [];
            for(var i = 0; i < finalData.length; i++)
            {
                newArr = newArr.concat(finalData[i]);
            }

            if (cnt == $("div._66lg").length) {
                collectDataGroup(newArr,newcommentArr);
            } 
        }         
    }

}


function collectDataGroup(data,sampledata){  
    var newurl = window.location.href;

    var fdsf= newurl.split('/');
    var Param = fdsf[fdsf.length-2];
    console.log("Param",Param);
     
    

    var newStore = localStorage.getItem('data2');
    if (newStore!==null){
        var arr = newStore.split(',');
    }

    else {
       
        window.location = "https://www.facebook.com/groups/"+Param+"/members/"; 
    }

    var newimageStore = localStorage.getItem('imagedata2');
    var imagearr1 = newimageStore.split(',');
    imagearr1.reverse();
    console.log("group localdata", imagearr1);
        
        var newarraydata = [];
        var nameArray  =[];
        var imageArray  =[];

        var commentArray  =[];
    
        for(var i = 0; i < data.length; i++)
        {
            for (x=0; x<data[i].length; x++) {
                newarraydata.push(data[i][x]);	
                };
        }
        var newcommentarraydata = [];
    
        for(var i = 0; i < sampledata.length; i++)
        {
            for (x=0; x<sampledata[i].length; x++) {
                newcommentarraydata.push(sampledata[i][x]);	
                };
        }

    rows = [["name"]];
    rows1 = [["name"]];
    for (i=0;i<newarraydata.length;i++){

        try{
            links=newarraydata[i].getElementsByClassName('_5j0e');
           
            var xx=1;
            link=newarraydata[i].getElementsByClassName('_5j0e')[links.length-xx].innerText;
            name=newarraydata[i].getElementsByClassName('_5j0e')[links.length-1].innerText;
           
            src = newarraydata[i].getElementsByTagName('img')[links.length-1].src;
           
            console.log("img src",src);
            
            nameArray.push(name);
            imageArray.push(src);
            
            likes = name.length;
            link=link.split("fref=gm");
            link=link[0];
            var arrayOfWords = []; // Create the array to store words
           arrayOfWords = name.split(",");

            rows[i]=[name,likes];     

        } 
        catch{
            //console.log("catch row",i);              
            rows[i]=['not avilable','not avilable'];
        }
    }

    for (i=0;i<newcommentarraydata.length;i++){

        try{
            links=newcommentarraydata[i].getElementsByTagName('a');
            var xx=1;
            link=newcommentarraydata[i].getElementsByTagName('a')[links.length-xx].href;
            name=newcommentarraydata[i].getElementsByTagName('a')[links.length-1].innerText;

            commentArray.push(name);

            comments = name.length;
            link=link.split("fref=gm");
            link=link[0];            
            rows1[i]=[name,comments];   
        }
        
        catch{
            rows1[i]=['not avilable','not avilable'];
        }

    }
    
    let newimagearray = [];

    for(i=0; i < imageArray.length; i++){
        if(newimagearray.indexOf(imageArray[i]) === -1) {
            newimagearray.push(imageArray[i]);
        }
    }

    
    const result = { }

    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].replace(/[[\]']/g,""); 
    result[nameArray[i]] = (result[nameArray[i]] || 0) + 1
    }


    var ob3 = {};

    for (var i = arr.length-1; i >= 0; -- i)
        ob3[arr[i]] = arr[i];
    for (var i = newimagearray.length-1; i >= 0; -- i)
        ob3[newimagearray[i]] = newimagearray[i];
    var res4 = []
    for (var k in ob3) {
        if (ob3.hasOwnProperty(k))  // <-- optional
        res4.push(ob3[k]);
    }
    const result5 = { }
    for (let i = 0; i < res4.length; i++) {
        for (let j = 0; j < newimagearray.length; j++){
          
                result5[res4[i]] = (result5[res4[i]])            
        }
    }

    
    var obj1 = {};

    for (var i = arr.length-1; i >= 0; -- i)
        obj1[arr[i]] = arr[i];
    for (var i = result.length-1; i >= 0; -- i)
        obj1[result[i]] = result[i];
    var res1 = []
    for (var k in obj1) {
        if (obj1.hasOwnProperty(k))  // <-- optional
        res1.push(obj1[k]);
    }


    const result4 = { }

    for (let i = 0; i < res1.length; i++) {

        res1[i] = res1[i].replace(/"/g, "");  
        res1[i] = res1[i].replace(/[[\]']/g,""); 
       
        for (let j = 0; j < nameArray.length; j++){
            
            if(nameArray[j]==res1[i]){
                result4[res1[i]] = (result4[res1[i]] || 0) + 1  
               }
               else {
                result4[res1[i]] = (result4[res1[i]] || 0);
               }
        }
    }
    
   const result1 = { }

    for (let i = 0; i < commentArray.length; i++) { 
        result1[commentArray[i]] = (result1[commentArray[i]] || 0) + 1
    }

   var obj = {};

    for (var i = arr.length-1; i >= 0; -- i)
        obj[arr[i]] = arr[i];  
    for (var i = result1.length-1; i >= 0; -- i)
        obj[result1[i]] = result1[i];
    var res = []
    for (var k in obj) {
        if (obj.hasOwnProperty(k))  // <-- optional
        res.push(obj[k]);
    }
    const result3 = { }

    for (let i = 0; i < res.length; i++) {

        res[i] = res[i].replace(/"/g, "");  
       
        for (let j = 0; j < commentArray.length; j++){
            if(commentArray[j]==res[i]){
                result3[res[i]] = (result3[res[i]] || 0) + 1  
               }
               else {
                result3[res[i]] = (result3[res[i]] || 0);
               }
        }
    }
    
  var finalresult = Object.keys(result4).map(function(key) {
    return [(key), result4[key]];
  });

  var finalresult1 = Object.keys(result3).map(function(key) {
    return [(key), result3[key]];
  });
  

  var finare = Object.keys(result5).map(function(key) {
    return this.src
  });

let finalArr = [];
let arr3 = finalresult.map((item, i) => {
    finalArr.push({name: item[0], Likes: item[1], LikesPoint: item[1]*1, Comments: finalresult1[i][1],CommentsPoint:finalresult1[i][1]*5})
});


var likedynamic = "";
for (var x = 0; x < finalArr.length; x++) { //Move the for loop from here
    likedynamic += '<h2>' + finalArr[x].Likes + '</h2>';
};

var dynamic = "";

console.log("final dejcfndsffjkd array",finalArr);

localStorage["finalArr"] = JSON.stringify(finalArr);  

var deletedata = JSON.parse(localStorage["finalArr"]);

localStorage["imagearr1"] = JSON.stringify(imagearr1);

var imgvdsad = JSON.parse(localStorage["imagearr1"]);

finalArr.length
for (var x = 0; x < finalArr.length; x++) { //Move the for loop from here
    imagearr1[x] = imagearr1[x].replace(/[[\]']/g,"");
    dynamic += 
    '<li id="nameid'+x+'" value=nameid'+x+'><div class=profileleft><div class=checkboxfield id="checkboxfield"> <input type="checkbox" name="vehicle1" value="Bike"></div><div class=imgcircle><img src= ' + imagearr1[x]+'></img></div></div><div class=profileright> <h4 class=profilenamefield>'+finalArr[x].name+'</h4><div class=profiledetaile><p>Likes<p><p>Comments</p><p>Connected 2 years ago</p></div><div class="testclass"><div class=""><p>'+finalArr[x].Likes+'</p><p>'+finalArr[x].Comments+'</p><p>7</p></div><div class=""><p>Likes Point</p><p>Comments Point</p><p>6</p></div><div class=""><p>'+ finalArr[x].LikesPoint+'</p><p>'+ finalArr[x].CommentsPoint+'</p><p>7</p></div></div></div></li>';
};

$('#globalContainer').append(`

<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.facebookpopup,
.facebookpopup li,
.profileleft,
.profileright {
    display: flex;
    flex-wrap: wrap;
}
.facebookpopup {
    height: 300px;
    overflow-y: scroll;
}
.facebookpopup::-webkit-scrollbar {
    width: 6px;
}
.facebookpopup::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.facebookpopup::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
}
.facebookpopup li {
    ackground: #f2f2f3;
    padding: 8px;
    margin-bottom: 10px;
    margin-right: 0px;
    width: 100%;
}
.profileleft {
    width: 20%;
}
.profileright {
    width: calc(100% - 20%);    
}
.checkboxfield {
    width: 30%;
}
.checkboxfield input {
    width: 20px;
    height: 20px;
}
.imgcircle {
    width: 70%;
}
.imgcircle img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color:#ddd;
}
.profilenamefield {
    width: 100%;
    font-size: 15px;
    color: #19294a;
}
.profileright P {
    margin-bottom: 0px;
    margin-top: 5px;
    color: #5b719e;
}
.managefeild  {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #19294a;
    padding-bottom: 15px;
    margin-bottom: 15px;
}
.managefeild b {
    font-size: 17px;
    color: #19294a;
}
.deletbtnfield {
    display: flex;
    flex-wrap: wrap;
}
.managefeild button {
    margin: 0px 20px;
    padding: 9px 18px;
    background: transparent;
    border: 1px solid #19294a;
    box-shadow: none;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    cursor:pointer;
    background: #19294a;
}
.deletbtnfield button:last-child {
    background: #19294a;
    color: #fff;
}
.profiledetaile {
    width: 35%;
}
.testclass {
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

// .facebookpopup .removed {
//     display:none;
// }
</style>


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class=managefeild>
    <h2>You Can Delete The Members On Members Page! </h2>
   
         
    </div>
    <ul class="facebookpopup" id="facebookpopup">
        `+dynamic+`
    </ul>
  
    
  </div>

</div>

`,  
);


//     $(".delete").click(function() {
//       var deleteItem = [];
//       $("input:checkbox").each(function() {
//         var $this = $(this);
       
//           //$(this).parent().parent().parent().addClass('removed');
//           var newdeleted= $(this).parent().parent().parent().find('h4').text();
             
//           $(this).parent().parent().parent().remove();
//           window.location = "https://www.facebook.com/groups/801603776975586/members/"; 
//       });
//   });


//     $(".deleteall").click(function() {
//         var deleteItem = [];
//         $("input:checkbox").each(function() {
//           var $this = $(this);
         
//             //$(this).parent().parent().parent().addClass('removed');
//             $(this).parent().parent().parent().parent().remove()
//             //localStorage.setItem('name','.alert.success');
          
//         });
//       });
    
  
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
  localStorage.removeItem("data2");
  localStorage.removeItem("imagedata2");
}


function extractData(){
    
    let csvContent = "data:text/csv;charset=utf-8,";
    let newrow = [];
    for(var i = 0; i < rows.length; i++)
    {
        for (x=0; x<rows[i].length; x++) {
            newrow.push(rows[i][x]);	
            };
    }
    
    let xnarray = [];

    for(i=0; i < newrow.length; i++){
        if(xnarray.indexOf(newrow[i]) === -1) {
            xnarray.push(newrow[i]);
        }
    }

    var res = []; 
    for(var i=0;i < xnarray.length;i = i+2)
    res.push(xnarray.slice(i,i+2));
   
  
    //console.log("likes", res);

    letnewcom = [];

    for(var i = 0; i < rows1.length; i++)
    {
        for (x=0; x<rows1[i].length; x++) {
            letnewcom.push(rows1[i][x]);	
            };
    }

    let cmarray = [];

    for(i=0; i < letnewcom.length; i++){
        if(cmarray.indexOf(letnewcom[i]) === -1) {
            cmarray.push(letnewcom[i]);
        }
    }


    var res1 = []; 
    for(var i=0;i < cmarray.length;i = i+2)
    res1.push(cmarray.slice(i,i+2));
   
  
    //console.log("comments", res1);
    
    // res.forEach(function(rowArray){
    //    let row = rowArray.join(",");
    //    csvContent += row + "\r\n";
    // }); 
    
    // var encodedUri = encodeURI(csvContent);
    // var link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    
    // fileName="Members.csv";
    // link.setAttribute("download", fileName);
    // document.body.appendChild(link); // Required for FF
    // count=1;

    // link.click();
    
}


function extractmemberData(){

    var newurl1 = window.location.href;

    var fdsf1= newurl1.split('/');
    var Param1 = fdsf1[fdsf1.length-3];
    console.log("Param",Param1);
     
    
    let csvContent = "data:text/csv;charset=utf-8,";
     console.log("comments", rows);

    let data1 = [];
     for(i=0;i<rows.length;i++)
    {
      data1.push(rows[i][0]);	
        
    }

    let imagedata1 = [];
     for(i=0;i<rows.length;i++)
    {
        imagedata1.push(rows[i][4]);	
        
    }


    let imagedata2 = [];

    for(i=0; i < imagedata1.length; i++){
        if(imagedata2.indexOf(imagedata1[i]) === -1) {
            imagedata2.push(imagedata1[i]);
        }
    }


    let data2 = [];

    
    for(i=0; i < data1.length; i++){
        if(data2.indexOf(data1[i]) === -1) {
            data2.push(data1[i]);
        }
    }

    localStorage["data2"] = JSON.stringify(data2);
    
    var stored_datas = JSON.parse(localStorage["data2"]);
    rows.forEach(function(rowArray){
       let row = rowArray.join(",");
       csvContent += row + "\r\n";
    }); 


    localStorage["imagedata2"] = JSON.stringify(imagedata2);
    
    var stored_datas1 = JSON.parse(localStorage["imagedata2"]);

    window.location = "https://www.facebook.com/groups/"+Param1+""; 

    // var encodedUri = encodeURI(csvContent);
    // var link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    
    // fileName="Members.csv";
    // link.setAttribute("download", fileName);
    // document.body.appendChild(link); // Required for FF
    // count=1;

    // link.click();
    
}

// function showErrorMsg(){
//     alert('Extension Cannot work with this page!! \nplease go to the member page which you want to scrap ')
// }

