import { useState } from 'react';
import { IpcRenderer } from 'electron';
import { CommandsType } from '../../types/commands';

const ipcRenderer: IpcRenderer = window.require('electron').ipcRenderer;

export default function CommandsList() {
  const [commands, setcommands] = useState<string | null | CommandsType>(
    localStorage.getItem('commands') || null
  );

  function execCommands(command: string) {
    ipcRenderer.send('commandExec', command);
  }

  if (typeof commands === 'string') setcommands(JSON.parse(commands));

  function GenerateListHtml() {
    if (!Array.isArray(commands)) return null;

    return (
      <>
        {commands.map((item, index) => {
          return (
            <li
              style={style.listItem}
              key={index}
              onClick={() => execCommands(item.command)}
            >
              {item.name}
            </li>
          );
        })}
      </>
    );
  }

  return (
    <>
      <ul style={style.list}>
        <GenerateListHtml />
      </ul>
    </>
  );
}

const style: { [index: string]: React.CSSProperties } = {
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'nowrap',
    listStyleType: ' none',
    margin: 0,
    padding: 5,
    boxSizing: 'border-box',
  },
  listItem: {
    width: '100%',
    maxWidth: '100%',
    padding: '10px 20px',
    margin: '3px 0',
    backgroundColor: '#3a415f',
    color: '#fff',
    cursor: 'pointer',
    boxSizing: 'border-box',
    overflow: 'none',
  },
};
