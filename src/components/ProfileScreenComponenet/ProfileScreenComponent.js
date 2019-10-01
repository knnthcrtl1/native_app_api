import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'WTF',
    };
    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}

export default ProfileScreen;