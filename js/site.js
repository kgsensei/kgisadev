//Track visits on website for better idea of size and traffic.
//fetch("https://api.countapi.xyz/hit/kgsensei.dev/visits")
console.log("Proudly built and published by kgsensei.\nCopyright (c) 2021 kgsensei.")

window.addEventListener("load",function(){
var scriptAppendOne=document.createElement("script")
var scriptAppendTwo=document.createElement("script")
var scriptAppendThr=document.createElement("script")
scriptAppendOne.src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"
scriptAppendTwo.src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"
scriptAppendThr.innerHTML="var firebaseConfig={\
apiKey:\"AIzaSyBfUW6Bl-5EPHIh_QiLsPaEg9FQMkJR7lM\",\
authDomain:\"kgsensei-957f7.firebaseapp.com\",\
projectId:\"kgsensei-957f7\",\
storageBucket:\"kgsensei-957f7.appspot.com\",\
messagingSenderId:\"816657691700\",\
appId:\"1:816657691700:web:1f5baa75f7c716cd9a8661\",\
measurementId:\"G-EW2T6G5DLH\"\
};\
firebase.initializeApp(firebaseConfig);\
firebase.analytics();"
setTimeout(function(){document.body.appendChild(scriptAppendOne);},100);
setTimeout(function(){document.body.appendChild(scriptAppendTwo);},300);
setTimeout(function(){document.body.appendChild(scriptAppendThr);},400);
})
