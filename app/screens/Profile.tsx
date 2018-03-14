import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

interface ISomething {
    id: string;
}

const Root = styled.View`
    display: flex;
`;

export class Profile extends React.Component<ISomething> {
    public render() {
        return(
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
}

