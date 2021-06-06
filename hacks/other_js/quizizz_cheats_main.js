/*
urls=[
     "https://quizizz.com/api/main/game/ + roomhash",
     "https://quizizz.com/api/main/game/60bbb4ea0251bd001d74d356"
]
*/
let vue=document.querySelector("body > div").__vue__;
let info={
     roomHash: vue.$store._vm._data.$$state.game.data.roomHash,
     playerId: vue.$store._vm._data.$$state.game.player.playerId,
     quizID: vue.$store._vm._data.$$state.game.data.quizId,
     roomCode: vue.$store._vm._data.$$state.game.data.roomCode,
     questionID: vue.$store._vm._data.$$state.game.questions.currentId,
}

function findAnswers() {
     //60bbc967c9b522001d7f4ebd
     gamehash=document.getElementById("input1").value;
     fetch("https://quizizz.com/api/main/game/"+gamehash,{
          headers:{
               "Access-Control-Allow-Origin":"https://quizizz.com/",
               "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
               "accept-language":"en-US,en;q=0.9",
               "cache-control":"max-age=0",
               "Content-Type":"application/json",
               "sec-ch-ua":"\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"92\"",
               "sec-ch-ua-mobile":"?0",
               "sec-fetch-dest":"document",
               "sec-fetch-mode":"navigate"
          },
          "referrer":"https://quizizz.com/api/main/game/"+gamehash,
          "body":null,
          "method":"GET"
     })
     .then(response=>response.json())
}


/* Copy Paste Working Code */
let vue=document.querySelector("body > div").__vue__;
let jsonData;
let info={
     roomHash:vue.$store._vm._data.$$state.game.data.roomHash,
     playerId:vue.$store._vm._data.$$state.game.player.playerId,
     quizID:vue.$store._vm._data.$$state.game.data.quizId,
     roomCode:vue.$store._vm._data.$$state.game.data.roomCode,
     questionID:vue.$store._vm._data.$$state.game.questions.currentId,
}
function stripHTML(html) {
     let doc=new DOMParser().parseFromString(html,'text/html');
     return doc.body.textContent||"";
}
async function getAnswers(){
     const response=await fetch("https://quizizz.com/api/main/game/"+info.roomHash)
          .then(response=>response.json())
          .then(data=>jsonData=data)
          .then(()=>console.log(jsonData))
          console.clear()
          jsonData.data.questions.forEach(questions=>{
               currentInt=0
               if(questions.type=="MCQ"){
                    answerInt=questions.structure.answer
                    currentQuestion=questions.structure.query.text
                    questions.structure.options.forEach(options=>{
                         if(answerInt==currentInt){
                              currentAnswer=options.text
                              currentInt=currentInt+1
                         }else{
                              currentInt=currentInt+1
                         }
                    })
                    currentQuestion=stripHTML(currentQuestion)
                    currentAnswer=stripHTML(currentAnswer)
                    console.log(("%cQ: "+currentQuestion+"%c - %cA: "+currentAnswer+"\n"),"color:white","color:cyan","color:green")
               }else{
                    console.log(("%cUnsupported Question Type\n"),"color:red")
               }
          })
}
getAnswers()
