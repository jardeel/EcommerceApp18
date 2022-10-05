import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { COLORS, FONTS } from '../constants';

const TextButton = ({
  contentContainerStyle, 
  disabled, 
  label,
  labelStyle,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...contentContainerStyle
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text 
        style={{ 
          color: COLORS.secondary, 
          ...FONTS.h1,
          ...labelStyle
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton;