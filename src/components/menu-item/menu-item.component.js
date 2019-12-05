import React from 'react';

import Styled from 'styled-components';

const MenuItemContainer = Styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 7.5 15px;
    margin-bottom: 7.5px;
    background-position: center;
    background-size: cover;


    &:first-child {
        margin-right: 7.5px;
    }

    &:nth-child(3n){
        margin-left: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

const Content = Styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`;

const Title = Styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

const Subtitle = Styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

const MenuItem = ({ title, imageUrl, subtitle }) => (
  <MenuItemContainer style={{ backgroundImage: `url(${imageUrl})` }}>
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default MenuItem;
