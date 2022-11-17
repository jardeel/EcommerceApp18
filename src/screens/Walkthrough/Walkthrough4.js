import { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useDynamicAnimation, MotiImage } from 'moti';

import { SIZES, images } from '../../constants';

const Walkthrough4 = ({ animate }) => {

  //Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({
    top: "30%",
    left: "25%"
  }));

  const motiImage2 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%"
  }));

  const motiImage3 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%"
  })); 

  useEffect(() => {
    if(animate){
      motiImage1.animateTo({
        top: "10%",
        left: "0%"
      })

      motiImage2.animateTo({
        top: "20%",
        left: "80%"
      })

      motiImage3.animateTo({
        top: "80%",
        left: "84%"
      })
    }
  }, [animate]);


  return (
    <View style={{ flex: 1, overflow: 'hidden'}}>
      <Image
        source={images.walkthrough_04_01}
        style={{
          ...styles.image,
          top: "25%",
          left: "20%",
          width: 240,
          height: 340,
          zIndex: 1
        }}
      />

      <MotiImage
        state={motiImage1}
        source={images.walkthrough_04_02}
        style={styles.image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_04_03}
        style={styles.image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_04_04}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 120,
    height: 140,
    zIndex: 0,
    borderRadius: SIZES.radius
  }
})

export default Walkthrough4;