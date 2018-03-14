import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { RootStack, BookcaseStack } from './app/Router';

const Root = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
        <RootStack />
    );
  }
};

export default App;

