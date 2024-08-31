import { StyleSheet } from "react-native";
import { utilityColors, gold, efficiency } from "../../styles/colordef";

let styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 2,
    borderRadius: 16,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  imageContainer: {
    flex: 0,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  offsetTop2: {
    paddingTop: 2,
  },
  offsetTop5: {
    paddingTop: 5,
  },
  item2ImageContainer: {
    alignItems: "center",
    borderWidth: 2.5,
    paddingVertical: 25,
    borderRadius: 16,
    borderColor: gold.goldShade2,
  },
  BIContainer: {
    padding: 15,
  },
  BIImage: {
    width: 110,
    height: 165,
    borderRadius: 10,
  },
  TIImage: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  HIImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  CSImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  NIImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  tagStyle: {
    borderWidth: 1.5,
    paddingHorizontal: 7,
    borderRadius: 4,
    marginRight: 5,
    color: efficiency.efficiencyTint5,
    borderColor: efficiency.efficiencyTint2,
    marginVertical: 3,
  },
  HIContainer: {},
  whatsapp: {
    borderColor: utilityColors.successDeep,
    color: utilityColors.successDeep,
  },
  inApp: {
    borderColor: gold.goldTint5,
    color: gold.goldShade5,
  },
  call: {
    borderColor: utilityColors.infoDeep,
    color: utilityColors.infoDeep,
  },
});

export default styles;

export const nStyles = StyleSheet.create({
  bookingSuccess: {
    borderColor: efficiency.efficiencyTint2,
    color: efficiency.efficiencyMain,
  },
});
