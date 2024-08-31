import { StyleSheet } from "react-native";
import { efficiency, gold } from "../../styles/colordef";

let styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: efficiency.efficiencyTint2,
  },
  headContainer: {
    padding: 15,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: efficiency.efficiencyTint2,
  },
  inputWrapper: {
    padding: 15,
  },
});

export default styles;
