(function(){
     'use strict';
     const el=new Image();
     let consoleIsOpen=false;
     let consoleOpened=false;
     Object.defineProperty(el,'id',{
          get:()=>{
               consoleIsOpen=true;
          }
     });
     const verify=()=>{
          console.dir(el);
          if (consoleIsOpen===false&&consoleOpened===true) {
               window.dispatchEvent(new Event('devtools-opened'));
               consoleOpened=false;
          } else if (consoleIsOpen===true&&consoleOpened===false) {
               window.dispatchEvent(new Event('devtools-closed'));
               consoleOpened=true;
          }
          consoleIsOpen=false;
          setTimeout(verify,500);
     }
     verify();
})();

window.addEventListener('devtools-opened',()=>{});
window.addEventListener('devtools-closed',()=>{});
