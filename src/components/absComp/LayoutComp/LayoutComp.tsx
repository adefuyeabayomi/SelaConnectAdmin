import React from "react";
import { View } from "react-native";
import { ViewStyle } from "react-native";
import { layoutVals } from "../../styles/layout";

interface rowPropType {
  children?: Array<React.JSX.Element>;
  style?: ViewStyle;
  justifyCenter?: boolean;
  alignCenter?: boolean;
}
interface flexItemProp {
  children?: React.JSX.Element;
  style?: ViewStyle;
}

export function FlexRow({
  children,
  style,
  justifyCenter,
  alignCenter,
}: rowPropType) {
  let jusStyle = justifyCenter ? layoutVals.justifyCenter : {};
  let alignStyle = alignCenter ? layoutVals.alignCenter : {};
  return (
    <View style={[layoutVals.flexRow, jusStyle, alignStyle, style]}>
      {children}
    </View>
  );
}
export function Flex0({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex0, style]}>{children}</View>;
}
export function Flex1({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex1, style]}>{children}</View>;
}
export function Flex2({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex2, style]}>{children}</View>;
}
export function Flex3({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex3, style]}>{children}</View>;
}
export function Flex4({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex4, style]}>{children}</View>;
}
export function Flex5({ children, style }: flexItemProp) {
  return <View style={[layoutVals.flex5, style]}>{children}</View>;
}
