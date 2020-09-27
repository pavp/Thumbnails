import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import localize from '../../../utility/localize';

function Splash() {
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{localize.t('thumbnailGenerator')}</Text>
    </View>
  );
}

export default Splash;