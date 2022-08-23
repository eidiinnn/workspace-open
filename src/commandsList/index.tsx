import './style.css';
import { useState } from 'react';
import { IpcRenderer } from 'electron'
const ipcRenderer: IpcRenderer = window.require('electron').ipcRenderer

type CommandsType = Array<{name: string, command:string}>

const t = [
   {name: 'hello world', command: 'echo hello world'},
   {name: 'hello world', command: 'echo hello world'},
   {name: 'hello world', command: 'echo hello world'},
]
localStorage.setItem('commands', JSON.stringify(t))

export default function CommandsList() {
   const [commands, setcommands] = useState<string | null | CommandsType>(localStorage.getItem('commands') || null);

   function execCommands(command: string){
      ipcRenderer.send('commandExec', command)
      console.log('t')
   }

   if(typeof commands === 'string') setcommands(JSON.parse(commands));
   function GenerateListHtml(){
      if(!Array.isArray(commands)) return null;

      return (
         <>{
            commands.map((item, index) => {
               return (<li key={index} onClick={() => execCommands(item.command)}>{item.name}</li>)
            })
         }</>
      )
   }

   return(
      <>
       <ul className='list-container'>
         <GenerateListHtml />
       </ul>
      </>
   )
}