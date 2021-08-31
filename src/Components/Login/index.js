'use strict';

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {AppColors} from '../../../themes'
import Button from '../Button'
export default props => {
  return (
    <View>
        <Text>LOgin Test file</Text>
        <Button
                title="Proceed"
                // onPress={handleSubmit(onSubmit)}
                underlayColor={AppColors.buttonDarkGreen}
                buttonColor={AppColors.buttonGreen}
                borderColor={AppColors.borderGreen}
                buttonText={"Login"}
                // buttonText={AppStrings.translation(
                //   'cart.buttonText.proceed',
                // )}
                textColor={'#FFFFFF'}
              />
   </View>
  );
};
