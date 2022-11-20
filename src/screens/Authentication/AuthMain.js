import { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  Modal, 
  FlatList, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  StyleSheet 
} from 'react-native';

import { TextButton } from '../../components';
import { icons, images, COLORS, FONTS, SIZES } from '../../constants';

const AuthMain = () => {
  const [mode, setMode] = useState('signIn');

  function renderSignIn(){}

  function renderSignUp(){}

  function renderAuthContainer() {
    if(mode == "signIn"){
      return renderSignIn()
    } else {
      return renderSignUp()
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey
      }}
    >
      <Image
        source={images.logo}
        style={{
          alignSelf: 'center',
          marginTop: SIZES.padding * 2,
          width: 50,
          height: 50
        }}
      />

      <View>
        {renderAuthContainer()}
      </View>

    </View>
  )
}

export default AuthMain;