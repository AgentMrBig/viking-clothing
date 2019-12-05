import React from 'react';

import Styled from 'styled-components';
import Directory from '../../components/directory/directory.component';

const HomePageContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    font-family: 'Anton', sans-serif;
`;

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
