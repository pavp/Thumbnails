import React, { useState, useEffect } from 'react';
import { View, 
        Text, 
        TouchableWithoutFeedback, 
        Image, 
        ActivityIndicator,
        Linking,
        TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { authRemoveToken, 
        tryThumbs, 
        mainRemoveThumbs } from '../../../store/actions';
import localize from '../../../utility/localize';

function Main() {
  const dispatch = useDispatch();

  const thumbs = useSelector(state => state.main.thumbs);
  const ui = useSelector(state => state.ui);
  const [image, setImage] = useState({});
  const [avalaible, setAvalaible] = useState(false);

  useEffect(() => {
    if (thumbs.length > 0)
      setAvalaible(true)
    else
      setAvalaible(false)
  }, [thumbs]);

  const LogOutHandler = () => {
    dispatch(authRemoveToken());
  };

  const GalleryHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      dispatch(mainRemoveThumbs());
      setImage(image);
    });
  };

  const CameraHandler = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      dispatch(mainRemoveThumbs());
      setImage(image);
    });
  };

  const GenerateHandler = () => {
    if (image.data)
      dispatch(tryThumbs(image))
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.optionsContainer}>
          <TouchableWithoutFeedback onPress={() => GalleryHandler()}>
            <Text style={styles.topText}>{localize.t('gallery')}</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => CameraHandler()}>
            <Text style={styles.topText}>{localize.t('camera')}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.imageContainer}>
          {image != '' && <Image source={{uri:`data:${image.mime};base64,${image.data}`}} style={styles.image}/>}
        </View>
        {ui.isLoadingGenerate ? 
        <ActivityIndicator color='gray'/> : 
        <TouchableWithoutFeedback onPress={() => GenerateHandler()}>
          <Text style={styles.generateText}>{localize.t('generate').toUpperCase()}</Text>
        </TouchableWithoutFeedback> 
        } 
       
      </View>
      {avalaible && 
        <View style={styles.cardContainer}>
          <View style={styles.urlCard}>
            <Image source={{uri:`data:${image.mime};base64,${image.data}`}} style={styles.imageCard}/>
              <Text style={styles.cardText} onPress={() => Linking.openURL('https://google.com')}>{`https://www.imagenesthumb.com/34672/${thumbs[0]}`}</Text>
          </View>
          <View style={styles.urlCard}>
            <Image source={{uri:`data:${image.mime};base64,${image.data}`}} style={styles.imageCard}/>
              <Text style={styles.cardText} onPress={() => Linking.openURL('https://google.com')}>{`https://www.imagenesthumb.com/34673/${thumbs[1]}`}</Text>
          </View>
          <View style={styles.urlCard}>
            <Image source={{uri:`data:${image.mime};base64,${image.data}`}} style={styles.imageCard}/>
              <Text style={styles.cardText} onPress={() => Linking.openURL('https://google.com')}>{`https://www.imagenesthumb.com/34674/${thumbs[2]}`}</Text>
          </View>
        </View>
        }
      <TouchableWithoutFeedback onPress={() => LogOutHandler()}>
        <Text style={styles.bottomText}>{localize.t('logOut')}</Text>
      </TouchableWithoutFeedback>    
    </SafeAreaView>
  );
}

export default Main;