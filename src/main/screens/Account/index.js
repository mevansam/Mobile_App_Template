/*
 * Copyright 2018-2018 AppBricks, Inc. or its affiliates. All Rights Reserved.
 */
import React, { Component } from "react";
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { stackFirstHeader, stackNavigatorConfig } from "../../navigation/MainNav";
import StackView from "../../components/StackView";

import Logger from "../../../lib/utils/Logger";

import common, { COLORS } from "../../styles/common";
import styles from "./styles";

type Props = {};
class Account extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const { backgroundImage } = this.props.screenProps;

    return (
      <StackView backgroundImage={backgroundImage}>

      </StackView>
    );
  }
}

const AccountNav = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: stackFirstHeader("Account")
    }
  },
  stackNavigatorConfig("Account")
);

export default AccountNav;