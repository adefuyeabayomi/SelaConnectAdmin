import { View, Text, Image, TouchableOpacity } from "react-native";
import NavBar from "../navBar/navBar";

import styles from "./styles";
import { paraStyles, smallStyles } from "../../styles/textstyles";
import { efficiency, gold } from "../../styles/colordef";

import { AntDesign } from "@expo/vector-icons";
import { layoutVals } from "../../styles/layout";
import { borderStyles } from "../../styles/borders";
import { paddings } from "../../styles/spacing";
let backArrow = (
  <AntDesign name="arrowleft" size={20} color={efficiency.efficiencyTint1} />
);

let imageComponent1 = (
  <Image
    style={styles.headerFixedImage}
    source={require("../../assets/images/fpage_hbg_small.png")}
  />
);

interface AbsHeaderPropType {
  headerVal: string;
  backFn: () => void;
}

export function AbsHeader({ headerVal, backFn }: AbsHeaderPropType) {
  return (
    <View style={styles.headerWrapper}>
      <View>{imageComponent1}</View>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={backFn}
          style={[
            layoutVals.flexRow,
            layoutVals.flex0,
            paddings.ph10,
            paddings.pv10,
          ]}
        >
          <Text style={[paraStyles.para_bold, layoutVals.flex0]}>
            {backArrow}
          </Text>
          <Text
            style={[
              paraStyles.para_bold,
              { marginLeft: 5, color: efficiency.efficiencyTint1 },
              layoutVals.flex0,
            ]}
          >
            Back
          </Text>
        </TouchableOpacity>
        <Text style={layoutVals.flex1}></Text>
        <Text
          style={[
            paraStyles.para_bold,
            { color: efficiency.efficiencyTint1 },
            layoutVals.flex0,
          ]}
        >
          {headerVal}
        </Text>
      </View>
    </View>
  );
}
interface AbsNavPropType {
  goToHome: () => void;
  goToRecords: () => void;
  goToPending: () => void;
  goToSupport: () => void;
  goToNotifications: () => void;
  location: string;
}
export function AbsNav({
  goToHome,
  goToPending,
  goToRecords,
  goToSupport,
  goToNotifications,
  location = "other",
}: AbsNavPropType) {
  return (
    <View style={styles.navWrapper}>
      <View style={{ height: 10 }} />
      <NavBar
        location={location}
        goToHome={goToHome}
        goToPending={goToPending}
        goToRecords={goToRecords}
        goToSupport={goToSupport}
        goToNotifications={goToNotifications}
      />
      <View style={{ height: 10 }} />
    </View>
  );
}
