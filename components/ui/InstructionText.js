import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent,
  },
});

export default InstructionText;
