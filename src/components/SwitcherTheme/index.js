import React, { useContext } from 'react';
import * as Style from './style';

import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [ theme, setTheme ] = useContext(ThemeContext);

  const ChangeTheme = () => {
    if(theme.BackGroundColor == '#fff'){
      setTheme({
        BackGroundColor: '#18191a',
        Color: '#fff'
      })
    }else{
      setTheme({
        BackGroundColor: '#fff',
        Color: '#18191a'
      })
    }
  }

  return (
    <Style.ContainerMain style={{backgroundColor: theme.BackGroundColor == '#18191a' ? '#242526' : '#f4f4f4'}}>
      <h1 style={{color: theme.Color}} >Error Manager</h1>
      { theme.BackGroundColor == '#fff' ? (
        <FontAwesomeIcon style={{color: theme.Color}} icon={Icon.faSun} onClick={(e) => {ChangeTheme()}} />
      ) : (
        <FontAwesomeIcon style={{color: theme.Color}} icon={Icon.faMoon} onClick={(e) => {ChangeTheme()}} />
      ) }
    </Style.ContainerMain>
  );
}

export default Main;