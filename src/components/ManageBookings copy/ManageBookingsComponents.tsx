import React from "react";
import { View, Text } from "react-native";

import styles from "./style";
import {
  centerText,
  h6Styles,
  paraStyles,
  smallStyles,
} from "../../styles/textstyles";
import { borderStyles } from "../../styles/borders";
import { paddings } from "../../styles/spacing";
import { efficiency } from "../../styles/colordef";
import { layoutVals } from "../../styles/layout";

interface MBItemPropTypes {
  field: string;
  value: string;
}

export function MBDataItem1({
  field,
  value,
}: MBItemPropTypes): React.JSX.Element {
  return (
    <View
      style={[layoutVals.flexRow, paddings.p5, paddings.ph10, borderStyles.r10]}
    >
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_bold,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
export function MBDataItem2({
  field,
  value,
}: MBItemPropTypes): React.JSX.Element {
  return (
    <View
      style={[
        layoutVals.flexRow,
        paddings.p5,
        paddings.ph10,
        borderStyles.r10,
        borderStyles.bWidth2,
      ]}
    >
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_bold,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
export function MBDataItem3({
  field,
  value,
}: MBItemPropTypes): React.JSX.Element {
  return (
    <View
      style={[
        layoutVals.flexRow,
        paddings.p5,
        paddings.ph10,
        borderStyles.r10,
        borderStyles.bWidth2,
      ]}
    >
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
export function MBDataItem4({
  field,
  value,
}: MBItemPropTypes): React.JSX.Element {
  return (
    <View
      style={[
        layoutVals.flexRow,
        paddings.p5,
        paddings.ph10,
        borderStyles.r10,
        borderStyles.bWidth2,
      ]}
    >
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_bold,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            smallStyles.small_bold,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
export function BookingSummary({
  children = <Text></Text>,
}): React.JSX.Element {
  return (
    <View style={[styles.BSContainer, borderStyles.r15, paddings.p15]}>
      <View>
        <Text
          style={[
            centerText.center,
            h6Styles.h6_bold,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          Booking Summary
        </Text>
      </View>
      <View style={[paddings.pt10]}>
        <View>{children}</View>
      </View>
    </View>
  );
}

export function PaymentSummary({
  children = <Text></Text>,
}): React.JSX.Element {
  return (
    <View style={[styles.BSContainer, borderStyles.r15, paddings.p15]}>
      <View>
        <Text
          style={[
            centerText.center,
            h6Styles.h6_bold,
            { color: efficiency.efficiencyShade5 },
          ]}
        >
          Payment Summary
        </Text>
      </View>
      <View style={[paddings.pt10]}>
        <View>{children}</View>
      </View>
    </View>
  );
}

export function PackageStatus({ children = <Text></Text> }): React.JSX.Element {
  return (
    <View style={[styles.BSContainer, borderStyles.r15, paddings.p15]}>
      <View>
        <Text
          style={[
            centerText.center,
            h6Styles.h6_bold,
            { color: efficiency.efficiencyShade5 },
          ]}
        >
          Package Status
        </Text>
      </View>
      <View style={[paddings.pt10]}>
        <View style={[paddings.pt5]}></View>
        <View>{children}</View>
      </View>
    </View>
  );
}
export function UpdatesAndChanges({
  children = <Text></Text>,
}): React.JSX.Element {
  return (
    <View style={[styles.BSContainer, borderStyles.r15, paddings.p15]}>
      <View>
        <Text
          style={[
            centerText.center,
            h6Styles.h6_bold,
            { color: efficiency.efficiencyShade5 },
          ]}
        >
          Updates and Changes
        </Text>
      </View>
      <View style={[paddings.pt10]}>
        <View>{children}</View>
      </View>
    </View>
  );
}
export function DataSummaryMain({
  children = <Text></Text>,
  title = "",
}): React.JSX.Element {
  return (
    <View style={[styles.BSContainer, borderStyles.r15, paddings.p15]}>
      <View>
        <Text
          style={[
            centerText.center,
            h6Styles.h6_bold,
            { color: efficiency.efficiencyShade5 },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={[paddings.pt10]}>
        <View>{children}</View>
      </View>
    </View>
  );
}
