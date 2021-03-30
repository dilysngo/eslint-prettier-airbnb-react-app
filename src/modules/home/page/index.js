import './styles.scss';
import React from 'react';
import styled from 'styled-components';

const ContainerWraper = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function HomePage() {
  return <ContainerWraper>TEST PROJECT</ContainerWraper>;
}

export default HomePage;
