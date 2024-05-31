import React from "react";
import { Text } from "react-native";
import { paraStyles, smallStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";

interface LabelTypeProp {
    children: React.JSX.Element | string
}
export function Label1 ({children}: LabelTypeProp): React.JSX.Element {
    return (
        <Text style={[{color: efficiency.efficiencyShade5, paddingBottom: 3},paraStyles.para_regular]}>{children}</Text>
    )
}