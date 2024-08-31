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
  value: string | React.JSX.Element;
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
          style={[paraStyles.para_bold, { color: efficiency.efficiencyShade4 }]}
        >
          {field}:
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            paraStyles.para_regular,
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
    <View style={[layoutVals.flexRow, paddings.p5, paddings.ph10]}>
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            paraStyles.para_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}:
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[paraStyles.para_bold, { color: efficiency.efficiencyShade4 }]}
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
    <View style={[layoutVals.flexRow, paddings.p5, paddings.ph10]}>
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            paraStyles.para_regular,
            { color: efficiency.efficiencyShade4 },
          ]}
        >
          {field}:{" "}
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[
            paraStyles.para_regular,
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
    <View style={[layoutVals.flexRow, paddings.p5, paddings.ph10]}>
      <View style={[layoutVals.flex0]}>
        <Text
          style={[paraStyles.para_bold, { color: efficiency.efficiencyShade4 }]}
        >
          {field}:
        </Text>
      </View>
      <View style={[layoutVals.flex1]} />
      <View style={[layoutVals.flex0]}>
        <Text
          style={[paraStyles.para_bold, { color: efficiency.efficiencyShade4 }]}
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
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Booking ID"} value={"XX9243094JF490JF4"} />
        </View>
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Booking ID"} value={"XX9243094JF490JF4"} />
        </View>
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Booking ID"} value={"XX9243094JF490JF4"} />
        </View>
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
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Payment Method"} value={"On Delivery"} />
        </View>
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Paid"} value={"Paid"} />
        </View>
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Payment Time"} value={"Monday, 12 May 2024"} />
        </View>
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
        <View style={[paddings.pt5]}>
          <MBDataItem1 field={"Status"} value={"In Transit"} />
          <MBDataItem1 field={"Status"} value={"Will be moving an hour time"} />
          <MBDataItem1 field={"Status"} value={"Delivered"} />
        </View>
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
interface DataSummaryMainPropType {
  title: string;
  children: React.JSX.Element | Array<React.JSX.Element>;
}
export function DataSummaryMain({
  children = <Text></Text>,
  title = "",
}: DataSummaryMainPropType): React.JSX.Element {
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
