// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import axios from 'axios';

// const styles = StyleSheet.create({
//   loginContainer: {
//     display: "flex",
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 20,
//     marginRight: 20
//   },
//   loginInput: {
//     borderRadius: 4,
//     borderWidth: 0.5,
//     borderColor: '#333',
//     width: '100%',
//     marginTop: 10,
//     padding: 10
//   },
//   loginButtonContainer: {
//     marginTop: 20
//   }
// })

// class App extends Component {

//   constructor() {
//     super()

//     this.state = {
//       loginUser: '',
//       loginPassword: '',
//     }
//   }


//   onClickLogin = () => {

//     const { loginUser, loginPassword } = this.state;

//     let data = JSON.stringify({
//       username: loginUser,
//       password: loginPassword
//     })

//     if (loginUser && loginPassword) {
//       this.fetchLogin(data);
//     } else {
//       alert('please fill up all blanks')
//     }

//   }

//   fetchLogin = async (data) => {

//     let url = 'https://backend-3tocorp.herokuapp.com/users/signin/';

//     await axios.post(url, data, {
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//       }
//     })
//       .then(res => {
//         // this.setToken(res.data.token) // Setting the token in localStorage
//         alert(res.data.token)

//       })
//       .catch(error => {
//         // this.setState({
//         //     signInErrorMessage: true
//         // })
//         // console.log(error);
//         // return error;
//         alert('Wrong Credentials');
//       });

//   }

//   render() {

//     return (
//       <View style={styles.loginContainer}>
//         <Text>Login</Text>
//         <TextInput
//           style={styles.loginInput}
//           placeholder="Username..."
//           onChangeText={text => this.setState({ loginUser: text })}
//         />
//         <TextInput
//           style={styles.loginInput}
//           placeholder="Password..."
//           onChangeText={text => this.setState({ loginPassword: text })}
//           secureTextEntry={true}
//           onSubmitEditing={this.onClickLogin}
//         />
//         <View
//           style={styles.loginButtonContainer}
//         >
//           <Button
//             title="Login"
//             onPress={this.onClickLogin}
//           />
//         </View>
//       </View>

//     )
//   }
// }
// export default App;

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/components/HomeScreenComponent/HomeScreenComponent';
// import ProfileScreen from './src/components/ProfileScreenComponenet/ProfileScreenComponent';

// const MainNavigator = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

// const App = createAppContainer(MainNavigator);

// export default App;

import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default HomeScreen;