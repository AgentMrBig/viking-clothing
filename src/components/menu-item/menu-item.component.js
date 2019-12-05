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
    


    &.large{
        height: 380px;
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:nth-child(3n){
        margin-left: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover{
        cursor: pointer;
        
        & Content{
            opacity: 0.9;
        }

        & .bgImage{
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }

    overflow: hidden;

`;

const BackGroundImage = Styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;

`;

const Content = Styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    position: absolute;
    opacity: 0.7;
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

const MenuItem = ({ title, imageUrl, size }) => (
  <MenuItemContainer className={`${size}`}>
    <BackGroundImage
      className={'bgImage'}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>Shop Now!</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default MenuItem;
