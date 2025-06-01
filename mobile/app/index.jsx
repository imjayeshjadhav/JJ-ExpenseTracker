import { Image, StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router"
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.heading} >Edit app/index.tsx to edit this screen. 123</Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading:{
    fontSize:40,
    color:"blue"
  }
})
