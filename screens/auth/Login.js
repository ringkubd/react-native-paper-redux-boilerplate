import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Checkbox, HelperText, TextInput } from "react-native-paper";

import CustomButton from '../../components/UI/button'

const Login = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Card style={{flex: 1,  alignContent: 'center'}}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <View style={styles.title}>
        <Card.Title title="Login" />
      </View>
      <Card.Content>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Type Email"
          right={<TextInput.Affix text="/100" />}
        />
        <HelperText type="error" visible={true}>
          Email address is invalid!
        </HelperText>
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Type Password"
          right={<TextInput.Affix text="=>8" />}
        />
        <View>
          <Checkbox.Item labelStyle={{color: 'gray'}} label="Keep me logged in.." onPress={() => setChecked(!checked)} status={checked? 'checked': 'unchecked'} color="green" />
        </View>
      </Card.Content>
      <Card.Actions style={styles.buttonContainer}>
        <CustomButton backgroundColor="tomato" icon="lock-reset" title="Reset" />
        <CustomButton icon="page-next" title="login"/>
      </Card.Actions>
    </Card>
  )
}

export default Login;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 600
  },
  buttonContainer: {
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 4,
  }
});
