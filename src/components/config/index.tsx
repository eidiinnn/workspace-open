import React, { useState } from 'react';
import { CommandsType } from '../../types/commands';
import Button from '@mui/material/Button';

export default function Config() {
  const [commands, setcommands] = useState<string | null | CommandsType>(
    localStorage.getItem('commands') || null
  );

  if (commands && typeof commands === 'string') {
    setcommands(JSON.parse(commands));
  }

  function updateState(index: number, value: string, tipo: string) {
    if (!commands || !Array.isArray(commands)) return null;

    const change = [...commands];

    switch (tipo) {
      case 'nome':
        change[index].name = value;
        break;
      case 'command':
        change[index].command = value;
        break;
      default:
        break;
    }

    setcommands(change);
  }

  function saveConfig(){
    localStorage.setItem('commands', JSON.stringify(commands));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  if (!commands || !Array.isArray(commands)) return null;
  return (
    <div style={style.container}>
      <ul style={style.ulStyle}>
        {commands.map((item, index) => {
          return (
            <li style={style.liStyle}>
              <input
                type='text'
                value={item.name}
                onChange={(event) => updateState(index, event.target.value, 'nome')}
              />
              <input
                type='text'
                value={item.command}
                onChange={(event) => updateState(index, event.target.value, 'command')}
              />
            </li>
          );
        })}
      </ul>
      <Button onClick={saveConfig} variant="contained">Save</Button>
    </div>
  );
}

const style: { [index: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#23283D',
    width: '80%',
    margin: '0 auto',
  },
  ulStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: '10px 0',
  },
  liStyle: {
    width: '100%',
    padding: '5px 10px',
    display: 'flex',
    flexDirection: 'row',
  },
};
