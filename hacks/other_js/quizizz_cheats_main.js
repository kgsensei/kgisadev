/*
urls=[
     "https://quizizz.com/api/main/game/ + roomhash",
     "https://quizizz.com/api/main/game/60bbb4ea0251bd001d74d356"
]
*/

function findAnswers() {
     gamehash=document.getElementById("input1").value;
     alert("Sorry buddy, this hack is still in development.\n\nIt will probably be finished around Monday (6/7/21) or Tuesday (6/8/21). Thanks for stoping by though.\n\n-kgsensei")
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
               }else if(questions.type=="MSQ"){
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
               }else if(questions.type=="OPEN"){
                    console.log(("%cCannot Solve for Open Questions.\n"),"color:red")
               }else{
                    console.log(("%cUnsupported Question Type\n"),"color:red")
               }
          })
}
getAnswers()
