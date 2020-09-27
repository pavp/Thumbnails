import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { authSetToken } from '../../../store/actions';
import localize from '../../../utility/localize';

function SignIn() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SignInHandler = () => {
    dispatch(authSetToken(username));
  }

  return(
    <View style={styles.container}>
        <TextInput
            placeholder={localize.t('username') + '/' + localize.t('email')}
            style={styles.input}
            onChangeText={(val) => setUsername(val)}
            value={username}
            placeholderTextColor='gray'
        />
        <TextInput
            placeholder={localize.t('password')}
            style={styles.input}
            onChangeText={(val) => setPassword(val)}
            value={password}
            placeholderTextColor='gray'
            secureTextEntry={true}
        />
        <TouchableWithoutFeedback onPress={() => SignInHandler()}>
          <Text style={styles.text}>{localize.t('signIn')}</Text>
        </TouchableWithoutFeedback> 
    </View>
  );
}

export default SignIn;