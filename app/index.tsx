import BottomLoginSheet from "@/components/BottomLoginSheet";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#0f0f0f", "#1c1c1c", "#000000"]} // black gradient
      style={styles.container}
    >
      {/* App Title */}
      <View style={styles.header}>
        <Ionicons name="wallet-outline" size={72} color="#FFD700" />
        <Text style={styles.title}>Expense Tracker</Text>
        <Text style={styles.subtitle}>
          Manage money with style
        </Text>
      </View>

      {/* Feature Icons */}
      <View style={styles.features}>
        <View style={styles.featureItem}>
          <Ionicons name="trending-up-outline" size={40} color="#FFD700" />
          <Text style={styles.featureText}>Insights</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="card-outline" size={40} color="#FFD700" />
          <Text style={styles.featureText}>Budget</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="stats-chart-outline" size={40} color="#FFD700" />
          <Text style={styles.featureText}>Reports</Text>
        </View>
      </View>

      {/* Login/Register Buttons */}
      <View style={styles.bottomSheet}>
        <BottomLoginSheet />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#d4af37",
    marginTop: 5,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 60,
    paddingHorizontal: 20,
  },
  featureItem: {
    alignItems: "center",
  },
  featureText: {
    marginTop: 8,
    fontSize: 15,
    color: "#FFD700",
    fontWeight: "500",
  },
  bottomSheet: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
