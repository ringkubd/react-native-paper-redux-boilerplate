import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomButton = (props) => {
  const {
    opacity,
    style,
    icon,
    title,
    backgroundColor,
    textTransform,
    textColor,
    onPress,
    children
  } = props
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={onPress}
      style={[{flexDirection: 'row', backgroundColor: backgroundColor, borderRadius: 5, textAlign: 'center', paddingHorizontal:10, paddingVertical: 9, marginHorizontal: 4}, style]}
    >
      {icon && <Icon name={icon} style={{paddingHorizontal: 6,alignSelf: 'center', fontSize: 14, color: 'white', fontWeight: 'bold'}}/>}
      <Text style={{ color: textColor, textTransform: textTransform, fontWeight: 'bold',paddingHorizontal: 6}}>{children ? children : title}</Text>
    </TouchableOpacity>
  )
}
CustomButton.defaultProps = {
  opacity: 0.7,
  style: {

  },
  backgroundColor: '#2979FF',
  title: 'submit',
  textTransform: "uppercase",
  textColor: "white",
}
export default CustomButton;
