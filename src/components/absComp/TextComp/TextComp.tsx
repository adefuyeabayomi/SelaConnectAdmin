import React from "react"
import { Text } from "react-native"
import { TextStyle } from "react-native"
import { h4Styles,h5Styles,h6Styles, paraStyles,smallStyles,miniStyles } from "../../styles/textstyles"
import { efficiency } from "../../styles/colordef"

interface textStyle {
    style?: TextStyle,
    children?: React.JSX.Element | string
}

export function ParaBold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[paraStyles.para_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function ParaMedium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[paraStyles.para_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function ParaRegular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[paraStyles.para_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function ParaLight ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[paraStyles.para_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function SmallBold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[smallStyles.small_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}
export function SmallMedium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[smallStyles.small_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function SmallRegular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[smallStyles.small_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function SmallLight ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[smallStyles.small_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}


export function MiniBold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[miniStyles.mini_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}
export function MiniMedium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[miniStyles.mini_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function MiniRegular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[miniStyles.mini_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function MiniLight ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[miniStyles.mini_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h4Bold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h4Styles.h4_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}
export function h4Medium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h4Styles.h4_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h4Regular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h4Styles.h4_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h4Light ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h4Styles.h4_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}


export function h5Bold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h5Styles.h5_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}
export function h5Medium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h5Styles.h5_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h5Regular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h5Styles.h5_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h5Light ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h5Styles.h5_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}


export function h6Bold ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h6Styles.h6_bold,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}
export function h6Medium ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h6Styles.h6_medium,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h6Regular ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h6Styles.h6_regular,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}

export function h6Light ({style,children}: textStyle): React.JSX.Element {
    return (
        <Text style={[h6Styles.h6_light,{color: efficiency.efficiencyShade5},style]}>
            {children}
        </Text>
    )
}










