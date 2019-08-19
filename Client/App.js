/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import NetInfo from "@react-native-community/netinfo";
import { View, StatusBar, StyleSheet, Alert, Text } from 'react-native';

//import Component
import Header from './src/components/header/header';
import BodyView from './src/components/bodyView/bodyView';
import { connect } from 'react-redux';

import selectors from './src/redux/selector/index';
import actions from './src/redux/action/index';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  componentDidMount() {
    const subscribeNetwork = NetInfo.addEventListener(state => {
      this.props.changeNetwork(state);
    });
  }

  render() {
    const {NetWork} = this.props;
    return (
      <Fragment>
        <View>
          <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.appBackground}>
              <Header />
              <BodyView />
            </View>
          </View>
        </View>
        { (!NetWork.isConnected && (NetWork.type === 'none' || NetWork.type === 'unknown' ) && this.state.open) &&
          Alert.alert(
            'Network connection error',
            'You need to connect to the internet',
            [
              {text: 'OK', onPress: () => this.setState({open:true,})},
            ],
            {cancelable: false},
          ) 
        }
      </Fragment>
    );
  }
};

const styles = StyleSheet.create ({
  appBackground: {
    backgroundColor: "#a8a8a8",
  },
});

const mapStateToProps = (state) => ({
  NetWork: selectors.getNetWork(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeNetwork: (netWork) => dispatch(actions.changeNetwork(netWork)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);