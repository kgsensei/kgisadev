from colorama import init,Fore,Back,Style
import os,sys,json,re,time
init(autoreset=True)

version="1.0 [DEV]"
os.system("echo {\"V\":\""+version+"\"} > z.json")
class color:
     PURPLE='\033[95m'
     CYAN='\033[96m'
     DARKCYAN='\033[36m'
     BLUE='\033[94m'
     GREEN='\033[92m'
     YELLOW='\033[93m'
     RED='\033[91m'
     BOLD='\033[1m'
     UNDERLINE='\033[4m'
     END='\033[0m'
mode="terminal"
fc=""

def AddVariable(name, value):
     newdata={""+name+"":""+value+""}
     variables_file=open("z.json","r+")
     data=json.load(variables_file)
     data.update(newdata)
     variables_file.seek(0)
     json.dump(data,variables_file)

def process(c:str):
     global fc
     try:
          c=c.replace("  "," ")
          for i in c:
               if i == '&':
                    g=c[c.find("&")+1:].split(" ")[0]
                    l=open("z.json","r+")
                    data=json.loads(l.read())
                    c=c.replace("&"+g+" ",data[g])
          if " = " in c:
               VARPRAMS=c.split()
               AddVariable(VARPRAMS[0],c[c.find("=")+2:])
          elif c=="exit()":
               if os.path.isfile('z.json'):
                    os.remove("z.json")
               exit()
          elif c=="force_exit()":
               if os.path.isfile('z.json'):
                    os.remove("z.json")
               os._exit(1)
          elif "echo:" in c:
               c=c.replace("echo:","")
               print(c)
          elif c=="platform()":
               print(sys.platform)
          elif "sleep:" in c:
               c=c.replace("sleep:","")
               time.sleep(int(c))
          elif "if" in c:
               IFPRAMS=c.split()
               if IFPRAMS[2] == "==":
                    if IFPRAMS[1] == IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
               elif IFPRAMS[2] == "!=":
                    if IFPRAMS[1] != IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
               elif IFPRAMS[2] == ">=":
                    if IFPRAMS[1] >= IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
               elif IFPRAMS[2] == "<=":
                    if IFPRAMS[1] <= IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
               elif IFPRAMS[2] == "<":
                    if IFPRAMS[1] < IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
               elif IFPRAMS[2] == ">":
                    if IFPRAMS[1] > IFPRAMS[3]:
                         currentline=currentline+1
                         while "--" in fc[currentline]:
                              c=fc[currentline]
                              c=c.replace("\n","")
                              c=c.replace("--","")
                              process(c)
                              currentline=currentline+1
                    else:
                         while "--" in fc[currentline]:
                              currentline=currentline+1
          elif c=="clear()":
               os.system("cls")
          elif c==". <" or c=="_ <":
               print(color.CYAN+"wow, such funny")
          else:
               print(color.RED+"Not sure what this command is?")
     except Exception as e:
          print(color.RED+"Error: "+str(e))

if mode=="terminal":
     while True:
          c=input("> ")
          process(c)
else:
     print(color.RED+"Unable to calculate mode.")
     os._exit(1)
