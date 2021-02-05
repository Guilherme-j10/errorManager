import React, { useContext, useEffect } from 'react';
import { ThemeContext, ThemeProvider } from '../../context/ThemeContext';
import * as Style from './style';
import SwitcherTheme from '../../components/SwitcherTheme/index';

const Main = () => {
  const [ Theme, setTheme ] = useContext(ThemeContext);

  let boxes = [];

  for(let i = 0; i < 30; i++){
    boxes.push(
      <div className="boxContainerProject" style={{border: `solid 1px ${Theme.BackGroundColor == '#18191a' ? '#333' : '#ebebeb'}`}}>
        <p style={{color: Theme.BackGroundColor == '#18191a' ? '#999' : '#666'}}>Project name</p>
        <h1 style={{color: Theme.BackGroundColor == '#18191a' ? '#ccc' : '#666'}}>Central</h1>
        <small>Erros: 123</small>
      </div>
    );
  }

  return(
    <>
      <SwitcherTheme />
      <Style.ContainerMain style={{backgroundColor: Theme.BackGroundColor}} >
        <section className="sectionContainerRow">
          
          {boxes}
        </section>
      </Style.ContainerMain>
    </>
  );
}

export default Main;