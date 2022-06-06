import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, TextInput } from "react-native-paper";
import CustomButton from "../../components/UI/button";


const Registration = () => {
  const [orientation, setOrientation] = useState(false);
  const [coverHeight, setCoverHeight] = useState(150);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation(false)
      } else {
        setOrientation(true)
      }
    })

  }, []);

  useEffect(()=>{
    orientation ? setCoverHeight(50) : setCoverHeight(150);
  }, [orientation])


  return (
    <Card style={{flex: 1,  alignContent: 'center'}}>
      <Card.Cover style={{height: coverHeight}} source={{ uri: 'https://picsum.photos/700' }} />
      <ScrollView>
        <Card.Title style={styles.card.title} title="Registration"/>
        <Card.Content style={{flex: 1, flexDirection: 'column'}}>
          <TextInput
            mode="outlined"
            label="Full Name"
            placeholder="Type Your Name"
            style={styles.form.input}
            right={<TextInput.Affix text="/200" />}
          />
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Type Email"
            style={styles.form.input}
            right={<TextInput.Affix text="/200" />}
          />
          <View style={{flex: 1, flexDirection: orientation ? 'row' : 'column' }}>
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Password"
              style={styles.form.input}
              right={<TextInput.Affix text=">=8" />}
            />
            <TextInput
              mode="outlined"
              label="Confirm Password"
              placeholder="Confirm Password"
              style={styles.form.input}
              right={<TextInput.Affix text=">=8" />}
            />
          </View>
        </Card.Content>
        <Card.Actions style={styles.buttonContainer}>
          <CustomButton icon="lock-reset" title="reset" backgroundColor="tomato"/>
          <CustomButton icon="page-next" />
        </Card.Actions>
      </ScrollView>
    </Card>
  )
}
export default Registration;

const styles = StyleSheet.create({
  card: {
    title: {
      borderBottom: 2,
    }
  },
  form: {
    input: {
      marginBottom: 4,
      flex: 2
    }
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
