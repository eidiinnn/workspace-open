import React, { useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import Config from '../config';
import Modal from '@mui/material/Modal';

export default function Header() {
  const [configOpen, setConfigOpen] = useState(false);
  const handleOpenConfig = () => setConfigOpen(true);
  const handleCloseConfig = () => setConfigOpen(false);

  return (
    <>
      <div style={style.headerContainer}>
        <AiFillSetting onClick={handleOpenConfig} style={style.configIcon} />
      </div>

      <Modal open={configOpen} onClose={handleCloseConfig}>
        <Config />
      </Modal>
    </>
  );
}

const style: { [index: string]: React.CSSProperties } = {
  headerContainer: {
    width: '100%',
    height: 30,
    padding: '2px 10px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    background: '#000',
    boxSizing: 'border-box',
  },
  configIcon: {
    color: '#fff',
  },
};
