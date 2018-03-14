import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AddBook from './screens/AddBook';
import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import EditBook from './screens/EditBook';
import BookcaseItem from './components/BookcaseItem';

const screen = Dimensions.get('window');

export const BookcaseStack = StackNavigator(
    {
    Bookcase: {
        screen: Bookcase,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Books',
        }),
    },
    EditBook: {
        screen: EditBook,
        navigationOptions: ({navigation}) => ({
            tabBarVisible: true,
            gesturesEnabled: false
        }),
    },
});


export const RootStack = TabNavigator({
    Bookcase: {
        screen: BookcaseStack,
        navigationOptions: () => ({
            tabBarLabel: 'Bookcase',
            tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
        }),
    },
    Explore: {
        screen: Explore,
        navigationOptions: () => ({
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
        }),      
    },
    AddBook: {
        screen: AddBook,
        navigationOptions: () => ({
          tabBarLabel: 'Add Book',
          tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
        }),
    },
    Lists: {
        screen: Lists,
        navigationOptions: () => ({
            tabBarLabel: 'Lists',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        }),
    },
    MyProfile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
        }),
    },
},
{
    tabBarPosition: 'bottom',
    initialRouteName: 'Bookcase',
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#7f7fff',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#ededed',
            height: 60,
        },
        tabStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        indicatorStyle: {
            opacity: 0,
        },
        labelStyle: {
            fontSize: 9,
            paddingBottom: 5,
        },
        showIcon: true,
        showLabel: true
    },
});

export const createRootNavigator = () => {
    return StackNavigator({
        BookcaseStack: {
            screen: BookcaseStack,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        Tabs: {
            screen: Tabs,
            navigationOptions: {
                gesturesEnabled: false
            }
        }
      },
      {
            headerMode: "none",
            mode: "card"
      }
    );
  };