'use strict';

import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import {AppColors, AppStyles} from '../../themes'
import styles from './styles';

export default props => {
  return (
    <View>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={props?.underlayColor}
        disabled={props?.disabled}
        style={
          props?.disabled
            ? [styles.buttonTouchDisabled]
            : [
                {
                  backgroundColor: props?.buttonColor
                    ? props?.buttonColor
                    : 'transparent',
                  borderColor: props?.borderColor
                    ? props?.borderColor
                    : AppColors.brand.primary,
                  width:props?.width
                },
                styles.buttonTouch,
                
              ]
        }
        {...props}
        // onPress={props?.onPress.bind(this)}
        >
        <Text
          style={[
            AppStyles.regularBoldText,
            styles.buttonText,
            {
              color: props?.textColor ? props?.textColor : AppColors.whiteText,
              size:10
            },
          ]}>
          {props?.buttonText}
        </Text>
      </TouchableHighlight>
    </View>
  );
};