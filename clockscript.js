const clock = document.getElementById('clock')
//or
//document.querySelector('#clock')

//for update time in per minutes or as my wish-->
setInterval(function(){
    let date =new Date()
    //console.log(date.toLocaleTimeString);
    clock.innerHTML= date.toLocaleTimeString();
    // Time.toLocaleDateString()
},1000) //1000 means in 1 second