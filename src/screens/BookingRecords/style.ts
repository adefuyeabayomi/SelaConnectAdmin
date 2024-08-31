import { StyleSheet } from "react-native";
import { efficiency } from "../../styles/colordef";
let styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  dataContainer: {
    paddingHorizontal: 15,
  },
  secContainer: {
    paddingTop: 50,
  },
  selectContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: efficiency.efficiencyTint3,
  },
  pickerWrapper: {},
  offsetTop15: {
    paddingTop: 15,
  },
  bottomOffset: {
    paddingTop: 120,
  },
});

export default styles;
