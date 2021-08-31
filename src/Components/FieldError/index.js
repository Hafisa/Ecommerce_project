'use strict';

import React from 'react';
import {View, Text} from 'react-native';

import {AppStyles} from '../../themes';
import styles from './styles';

export default props => {
  return (
    <View style={styles.errorView}>
      <Text style={[AppStyles.mediumText, styles.errorText]}>
        {props.errorText}
      </Text>
    </View>
  );
};
