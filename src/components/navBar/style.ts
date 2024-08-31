import { StyleSheet } from "react-native";
import { efficiency, gold } from "../../styles/colordef";
let styles = StyleSheet.create({
  navContainerMain: {
    alignItems: "center",
  },
  navContainer: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: efficiency.efficiencyTint2,
    paddingVertical: 5,
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  trackItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  trackContainer: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: 9,
  },
  idIndicator: {
    width: 25,
    height: 1.5,
    borderRadius: 100,
    backgroundColor: gold.goldMain,
  },
  activeText: {
    color: gold.goldMain,
  },
  trackIconContainer: {
    borderRadius: 50,
    padding: 23,
    backgroundColor: efficiency.efficiencyTint2,
  },
  touchContainer: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  trackTouchContainer: {},
  homeTouchContainer: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  infoTouchContainer: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 8,
  },
});

export default styles;
