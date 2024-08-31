import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

let imageComponent2 = (
  <Image
    style={styles.imageStyle}
    source={require("../../assets/images/fpage_hbg_big.png")}
  />
);
import { efficiency } from "../../styles/colordef";
import { h3Styles } from "../../styles/textstyles";

export default function PageHeadInfo({ pageName = "" }): React.JSX.Element {
  return (
    <View>
      <View>{imageComponent2}</View>
      <View style={styles.backContainer}>
        <Text style={[h3Styles.h3_bold, { color: efficiency.efficiencyTint1 }]}>
          {pageName}
        </Text>
      </View>
    </View>
  );
}
