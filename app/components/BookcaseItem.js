import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

const Root = styled.View`
    flex-direction: row;
    background-color: #FFF;
    height: 100;
    padding: 10px;
    margin-right: 10;
    margin-left: 10;
    margin-top: 10;
    border-radius: 4;
    shadow-color: #CCC;
    shadow-opacity: 1.0;
    shadow-radius: 1;
`;

const Thumbnail = styled.Image`
    flex: 1;
    height: undefined;
    width: undefined;
`;

const RowText = styled.View`
    flex: 4;
    flexDirection: column;
`;

const Title = styled.Text`
    padding-left: 10;
    padding-top: 5;
    font-size: 16;
    font-weight: bold;
    color: #777;
`;

const Author = styled.Text`
    padding-left: 10;
    margin-top: 5;
    font-size: 14;
    color: #777;
`;

export default class BookcaseItem extends React.Component {

    _onEditBook = () => {
        const { id } = this.props.id;
        this.props.navigation.navigate('EditBook', { id });
    }

    render(){
        return (
            <TouchableOpacity onPress={this._onEditBook}>
                <Root>
                    <Thumbnail source={{uri: this.props.thumbnail}} resizeMode='contain' />
                    <RowText>
                        <Title>
                            {this.props.title}
                        </Title>
                        <Author>
                            {this.props.author}
                        </Author>
                    </RowText>
                </Root>
            </TouchableOpacity>
        );  
    }
}

