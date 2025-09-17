import { StyleSheet, Text, View } from "react-native";
// import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Expense Tracker</Text>
        <Text style={styles.subtitle}>
          Track your spending, save more, and stay in control.
        </Text>
      </View>

      {/* <AnimatedIntro /> */}
      <BottomLoginSheet />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
});
