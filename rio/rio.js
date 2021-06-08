var noteContent=""
try{
          var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
          var recognition=new SpeechRecognition()
     }catch(e){
          console.error(e)
          $('.no-browser-support').show()
          $('.app').hide()
}
function wait(ms){
     var d=new Date()
     var d2=null
     do{d2=new Date()}
     while(d2-d<ms)
}
recognition.onstart=function(){
     document.getElementById('yourText').innerHTML="Listening..."
     document.getElementById('compText').innerHTML=""
}
recognition.onspeechend=function(){
     document.getElementById('compText').innerHTML="I can't hear you, sorry."
}
recognition.onerror=function(event){
     if(event.error=='no-speech'){
          speak("No sound detected.")
     }
}
recognition.onresult=function(event){
     var current=event.resultIndex
     var c=event.results[current][0].transcript
     document.getElementById('yourText').innerHTML=c
     c=c.toLowerCase()
     if(c.indexOf("hello")>=0&&c.indexOf("name")>=0){speak("Hello, nice to meet you.")
     }else if(c.indexOf("what")>=0&&c.indexOf("ip")>=0){speak("I cannot access that information for privacy reasons.")
     }else if(c.indexOf("hello")>=0||c.indexOf("hi")>=0||c.indexOf("sup")>=0){speak("Hello.")
     }else if(c.indexOf("good")>=0&&c.indexOf("morning")>=0||c.indexOf("good")>=0&&c.indexOf("afternoon")>=0||c.indexOf("good")>=0&&c.indexOf("evening")>=0){
          if(partOfDay()=="morning"){speak("Good morning.")
          }else if(partOfDay()=="afternoon"){speak("Good afternoon.")
          }else if(partOfDay()=="evening"){speak("Good evening.")
          }else{speak("Late night I see.")}
     }else if(c.indexOf("time")>=0){
          var today=new Date()
          if(10>today.getMinutes()){minutes="0"+today.getMinutes()
          }else{minutes=today.getMinutes()
          }if(today.getHours()>12){hours=today.getHours()-12
          }else{hours=today.getHours()}
          var time=hours+":"+minutes
          speak("The current time is "+time+".")
     }else if(c.indexOf("hello")>=0&&c.indexOf("what")>=0&&c.indexOf("your")>=0&&c.indexOf("name")>=0){speak("Hello, I am Rio.")
     }else if(c.indexOf("how")>=0&&c.indexOf("are")>=0&&c.indexOf("you")>=0){speak("I'm good, thanks for asking.")
     }else if(c.indexOf("google")>=0){speak("Here is a google link.",false);document.getElementById('compText').innerHTML="Google: <a href='https://google.com'>Click here</a>."
     }
     else{
          speak("I don't understand, I'm sorry.")
     }
}
$('#start-record-btn').on('click',function(e){
     $('#start-record-btn').hide()
     $('#pause-record-btn').show()
     recognition.start()
})
$('#pause-record-btn').on('click',function(e){
     $('#start-record-btn').show()
     $('#pause-record-btn').hide()
     recognition.stop()
})
function speak(message,show){
     if(show!=false){
          document.getElementById('compText').innerHTML=message
     }
     var speech=new SpeechSynthesisUtterance()
     speech.text=message
     speech.volume=1
     speech.rate=1
     speech.pitch=1
     window.speechSynthesis.speak(speech)
}
document.addEventListener("contextmenu",function(evt){
     evt.preventDefault()
},false)
document.addEventListener("copy",function(evt){
     evt.clipboardData.setData("text/plain","Sorry man, you can't copy data from this site.")
     evt.preventDefault()
},false)
function partOfDay(){
     timeString=(new Date).getHours().toString()
	var hours=timeString.substring(0,2)
	var partOfDay=''
	if(hours<12){
		partOfDay='morning'
	}else if(hours<17){
		partOfDay='afternoon'
	}else if(hours<21){
		partOfDay='evening'
	}else{
		partOfDay='night'
	}
	return partOfDay;
}
