import React from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import BookcaseItem from '../components/BookcaseItem';

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

export default class Bookcase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Harry Potter and the Goblet of Fire',
                    author: 'J. K. Rowling',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
                },
                {
                    id: 2,
                    title: 'The Hobbit',
                    author: 'J. R. R. Tolkien',
                    thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
                },
                {
                    id: 3,
                    title: '1984',
                    author: 'George Orwell',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
                },
                {
                    id: 4,
                    title: 'Karamazov Brothers',
                    author: 'Fiodor Dostoievsky',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
                }
            ]
        }
    }

    _renderItem = ({ item }) => (
        <BookcaseItem 
            navigation={this.props.navigation}
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
        />
    );

    _keyExtractor = (item, index) => item.id;
 
    render(){
        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                >
                </FlatList>
            </View>
        );
    }
}
