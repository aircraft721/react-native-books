import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

const Root = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
`;

const TextStyle = styled.Text`
    font-size: 20;
    text-align: center;
    margin: 10px;
`;

export default class EditBook extends Component {

  _goBack = () => {
	console.log('edit button', this.props);
    this.props.navigation.goBack();
  }

  render() {
    return (
		<Root>
			<TextStyle>
				Edit Book
			</TextStyle>
			<Button 
				onPress={this._goBack} 
				title='Go back'
				buttonStyle={{
					backgroundColor: 'green',
					height: 40,
				}}
			/>
		</Root>
    );
  }
}
