type Color = {
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primary6: string;
  primary7: string;
  primary8: string;
  primary9: string;
  primary10: string;
  primary11: string;
  primary12: string;
  secondary1: string;
  secondary2: string;
  secondary3: string;
  secondary4: string;
  secondary5: string;
  secondary6: string;
  secondary7: string;
  secondary8: string;
  secondary9: string;
  secondary10: string;
  secondary11: string;
  secondary12: string;
  error1: string;
  error2: string;
  error3: string;
  error4: string;
  error5: string;
  error6: string;
  error7: string;
  error8: string;
  error9: string;
  error10: string;
  error11: string;
  error12: string;
  success1: string;
  success2: string;
  success3: string;
  success4: string;
  success5: string;
  success6: string;
  success7: string;
  success8: string;
  success9: string;
  success10: string;
  success11: string;
  success12: string;
  warning1: string;
  warning2: string;
  warning3: string;
  warning4: string;
  warning5: string;
  warning6: string;
  warning7: string;
  warning8: string;
  warning9: string;
  warning10: string;
  warning11: string;
  warning12: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
  info8: string;
  info9: string;
  info10: string;
  info11: string;
  info12: string;
} & {
  [key: string]: string;
};

type Spaces = {
  0: string | number;
  1: string | number;
  2: string | number;
  3: string | number;
  4: string | number;
  5: string | number;
  6: string | number;
  7: string | number;
  8: string | number;
  9: string | number;
  10: string | number;
  11: string | number;
  12: string | number;
  13: string | number;
  14: string | number;
  15: string | number;
  16: string | number;
  17: string | number;
  18: string | number;
} & {
  [key: string]: string | number;
};

type FontSizes = {
  1: string | number;
  2: string | number;
  3: string | number;
  4: string | number;
  5: string | number;
  6: string | number;
  7: string | number;
  8: string | number;
  9: string | number;
  10: string | number;
  11: string | number;
  12: string | number;
} & {
  [key: string]: string | number;
};

type FontWeights = {
  1: string | number;
  2: string | number;
  3: string | number;
  4: string | number;
  5: string | number;
  6: string | number;
} & {
  [key: string]: string | number;
};

type LineHeights = {
  1: string | number;
  2: string | number;
} & {
  [key: string]: string | number;
};

type BorderWidths = {
  1: string | number;
  2: string | number;
} & {
  [key: string]: string | number;
};

type Radiis = {
  1: string | number;
  2: string | number;
  3: string | number;
  4: string | number;
  pill: string | number;
} & {
  [key: string]: string | number;
};

type Shadows = {
  1: string;
  2: string;
  3: string;
  4: string;
} & {
  [key: string]: string;
};

type ZIndices = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
  12: number;
} & {
  [key: string]: number;
};

export type RempiConfig = {
  colors: Color;
  spaces: Spaces;
  fontSizes: FontSizes;
  fonts: any;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  letterSpacings: any;
  borderWidths: BorderWidths;
  radii: Radiis;
  shadows: Shadows;
  zIndices: ZIndices;
};

export type RempiConfigCreateTheme = Partial<{
  colors: Partial<Color>;
  spaces: Partial<Spaces>;
  fontSizes: Partial<FontSizes>;
  fonts: Partial<any>;
  fontWeights: Partial<FontWeights>;
  lineHeights: Partial<LineHeights>;
  letterSpacings: Partial<any>;
  borderWidths: Partial<BorderWidths>;
  radii: Partial<Radiis>;
  shadows: Partial<Shadows>;
  zIndices: Partial<ZIndices>;
}>;

export const rempiDefaultConfig: RempiConfig = {
  colors: {
    primary1: "#161618",
    primary2: "#1c1c1f",
    primary3: "#232326",
    primary4: "#28282c",
    primary5: "#2e2e32",
    primary6: "#34343a",
    primary7: "#3e3e44",
    primary8: "#504f57",
    primary9: "#706f78",
    primary10: "#7e7d86",
    primary11: "#a09fa6",
    primary12: "#ededef",

    secondary1: "#1b141d",
    secondary2: "#221527",
    secondary3: "#301a3a",
    secondary4: "#3a1e48",
    secondary5: "#432155",
    secondary6: "#4e2667",
    secondary7: "#5f2d84",
    secondary8: "#7938b2",
    secondary9: "#8e4ec6",
    secondary10: "#9d5bd2",
    secondary11: "#bf7af0",
    secondary12: "#f7ecfc",

    error1: "#1d1412",
    error2: "#2a1410",
    error3: "#3b1813",
    error4: "#481a14",
    error5: "#541c15",
    error6: "#652016",
    error7: "#7f2315",
    error8: "#a42a12",
    error9: "#e54d2e",
    error10: "#ec5e41",
    error11: "#f16a50",
    error12: "#feefec",

    success1: "#0d1912",
    success2: "#0c1f17",
    success3: "#0f291e",
    success4: "#113123",
    success5: "#133929",
    success6: "#164430",
    success7: "#1b543a",
    success8: "#236e4a",
    success9: "#30a46c",
    success10: "#3cb179",
    success11: "#4cc38a",
    success12: "#e5fbeb",

    warning1: "#1f1300",
    warning2: "#271700",
    warning3: "#341c00",
    warning4: "#3f2200",
    warning5: "#4a2900",
    warning6: "#573300",
    warning7: "#693f05",
    warning8: "#824e00",
    warning9: "#ffb224",
    warning10: "#ffcb47",
    warning11: "#f1a10d",
    warning12: "#fef3dd",

    info1: "#0f1720",
    info2: "#0f1b2d",
    info3: "#10243e",
    info4: "#102a4c",
    info5: "#0f3058",
    info6: "#0d3868",
    info7: "#0a4481",
    info8: "#0954a5",
    info9: "#0091ff",
    info10: "#369eff",
    info11: "#52a9ff",
    info12: "#eaf6ff",
  },
  spaces: {
    0: ".125rem",
    1: ".25rem",
    2: ".5rem",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.5rem",
    14: "4rem",
    15: "4.5rem",
    16: "5rem",
    17: "5.5rem",
    18: "6rem",
  },
  fontSizes: {
    1: ".625rem",
    2: ".75rem",
    3: ".875rem",
    4: "1rem",
    5: "1.125rem",
    6: "1.25rem",
    7: "1.5rem",
    8: "1.75rem",
    9: "2rem",
    10: "2.25rem",
    11: "2.625rem",
    12: "3rem",
  },
  fonts: {},
  fontWeights: {
    1: 300,
    2: 400,
    3: 500,
    4: 600,
    5: 700,
    6: 900,
  },
  lineHeights: {
    1: "120%",
    2: "150%",
  },
  letterSpacings: {},
  borderWidths: {
    1: ".0625rem",
    2: ".125rem",
  },
  radii: {
    1: ".25rem",
    2: ".5rem",
    3: ".75rem",
    4: "1rem",
    pill: "999px",
  },
  shadows: {
    1: "var(--colors-primary12) 0 .5rem 1.5rem",
    2: "var(--colors-primary12) 0 .25rem .75rem",
    3: "var(--colors-primary11) 0 .0625rem .1875rem 0, var(--colors-primary12) 0 .0625rem .125rem 0",
    4: "var(--colors-primary12) 0 0 0 .0625rem",
  },
  zIndices: {
    1: 1000,
    2: 1002,
    3: 1003,
    4: 1004,
    5: 1005,
    6: 1006,
    7: 1007,
    8: 1008,
    9: 1009,
    10: 1010,
    11: 1011,
    12: 1012,
  },
};

function toDashLowerCase(value: string) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function useValue(
  customThemeProp: string | number | undefined,
  defaultProp: string | number
): string | number {
  return customThemeProp ?? defaultProp;
}

function convertToPxIfValueIsNumber(value: string | number): string {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

export function createTheme(selector: string, theme: RempiConfigCreateTheme) {
  const themeObject: RempiConfig = {
    colors: {
      ...theme.colors,
      primary1: useValue(
        theme.colors?.primary1,
        rempiDefaultConfig.colors.primary1
      ) as string,
      primary2: useValue(
        theme.colors?.primary2,
        rempiDefaultConfig.colors.primary2
      ) as string,
      primary3: useValue(
        theme.colors?.primary3,
        rempiDefaultConfig.colors.primary3
      ) as string,
      primary4: useValue(
        theme.colors?.primary4,
        rempiDefaultConfig.colors.primary4
      ) as string,
      primary5: useValue(
        theme.colors?.primary5,
        rempiDefaultConfig.colors.primary5
      ) as string,
      primary6: useValue(
        theme.colors?.primary6,
        rempiDefaultConfig.colors.primary6
      ) as string,
      primary7: useValue(
        theme.colors?.primary7,
        rempiDefaultConfig.colors.primary7
      ) as string,
      primary8: useValue(
        theme.colors?.primary8,
        rempiDefaultConfig.colors.primary8
      ) as string,
      primary9: useValue(
        theme.colors?.primary9,
        rempiDefaultConfig.colors.primary9
      ) as string,
      primary10: useValue(
        theme.colors?.primary10,
        rempiDefaultConfig.colors.primary10
      ) as string,
      primary11: useValue(
        theme.colors?.primary11,
        rempiDefaultConfig.colors.primary11
      ) as string,
      primary12: useValue(
        theme.colors?.primary12,
        rempiDefaultConfig.colors.primary12
      ) as string,

      secondary1: useValue(
        theme.colors?.secondary1,
        rempiDefaultConfig.colors.secondary1
      ) as string,
      secondary2: useValue(
        theme.colors?.secondary2,
        rempiDefaultConfig.colors.secondary2
      ) as string,
      secondary3: useValue(
        theme.colors?.secondary3,
        rempiDefaultConfig.colors.secondary3
      ) as string,
      secondary4: useValue(
        theme.colors?.secondary4,
        rempiDefaultConfig.colors.secondary4
      ) as string,
      secondary5: useValue(
        theme.colors?.secondary5,
        rempiDefaultConfig.colors.secondary5
      ) as string,
      secondary6: useValue(
        theme.colors?.secondary6,
        rempiDefaultConfig.colors.secondary6
      ) as string,
      secondary7: useValue(
        theme.colors?.secondary7,
        rempiDefaultConfig.colors.secondary7
      ) as string,
      secondary8: useValue(
        theme.colors?.secondary8,
        rempiDefaultConfig.colors.secondary8
      ) as string,
      secondary9: useValue(
        theme.colors?.secondary9,
        rempiDefaultConfig.colors.secondary9
      ) as string,
      secondary10: useValue(
        theme.colors?.secondary10,
        rempiDefaultConfig.colors.secondary10
      ) as string,
      secondary11: useValue(
        theme.colors?.secondary11,
        rempiDefaultConfig.colors.secondary11
      ) as string,
      secondary12: useValue(
        theme.colors?.secondary12,
        rempiDefaultConfig.colors.secondary12
      ) as string,

      error1: useValue(
        theme.colors?.error1,
        rempiDefaultConfig.colors.error1
      ) as string,
      error2: useValue(
        theme.colors?.error2,
        rempiDefaultConfig.colors.error2
      ) as string,
      error3: useValue(
        theme.colors?.error3,
        rempiDefaultConfig.colors.error3
      ) as string,
      error4: useValue(
        theme.colors?.error4,
        rempiDefaultConfig.colors.error4
      ) as string,
      error5: useValue(
        theme.colors?.error5,
        rempiDefaultConfig.colors.error5
      ) as string,
      error6: useValue(
        theme.colors?.error6,
        rempiDefaultConfig.colors.error6
      ) as string,
      error7: useValue(
        theme.colors?.error7,
        rempiDefaultConfig.colors.error7
      ) as string,
      error8: useValue(
        theme.colors?.error8,
        rempiDefaultConfig.colors.error8
      ) as string,
      error9: useValue(
        theme.colors?.error9,
        rempiDefaultConfig.colors.error9
      ) as string,
      error10: useValue(
        theme.colors?.error10,
        rempiDefaultConfig.colors.error10
      ) as string,
      error11: useValue(
        theme.colors?.error11,
        rempiDefaultConfig.colors.error11
      ) as string,
      error12: useValue(
        theme.colors?.error12,
        rempiDefaultConfig.colors.error12
      ) as string,

      success1: useValue(
        theme.colors?.success1,
        rempiDefaultConfig.colors.success1
      ) as string,
      success2: useValue(
        theme.colors?.success2,
        rempiDefaultConfig.colors.success2
      ) as string,
      success3: useValue(
        theme.colors?.success3,
        rempiDefaultConfig.colors.success3
      ) as string,
      success4: useValue(
        theme.colors?.success4,
        rempiDefaultConfig.colors.success4
      ) as string,
      success5: useValue(
        theme.colors?.success5,
        rempiDefaultConfig.colors.success5
      ) as string,
      success6: useValue(
        theme.colors?.success6,
        rempiDefaultConfig.colors.success6
      ) as string,
      success7: useValue(
        theme.colors?.success7,
        rempiDefaultConfig.colors.success7
      ) as string,
      success8: useValue(
        theme.colors?.success8,
        rempiDefaultConfig.colors.success8
      ) as string,
      success9: useValue(
        theme.colors?.success9,
        rempiDefaultConfig.colors.success9
      ) as string,
      success10: useValue(
        theme.colors?.success10,
        rempiDefaultConfig.colors.success10
      ) as string,
      success11: useValue(
        theme.colors?.success11,
        rempiDefaultConfig.colors.success11
      ) as string,
      success12: useValue(
        theme.colors?.success12,
        rempiDefaultConfig.colors.success12
      ) as string,

      warning1: useValue(
        theme.colors?.warning1,
        rempiDefaultConfig.colors.warning1
      ) as string,
      warning2: useValue(
        theme.colors?.warning2,
        rempiDefaultConfig.colors.warning2
      ) as string,
      warning3: useValue(
        theme.colors?.warning3,
        rempiDefaultConfig.colors.warning3
      ) as string,
      warning4: useValue(
        theme.colors?.warning4,
        rempiDefaultConfig.colors.warning4
      ) as string,
      warning5: useValue(
        theme.colors?.warning5,
        rempiDefaultConfig.colors.warning5
      ) as string,
      warning6: useValue(
        theme.colors?.warning6,
        rempiDefaultConfig.colors.warning6
      ) as string,
      warning7: useValue(
        theme.colors?.warning7,
        rempiDefaultConfig.colors.warning7
      ) as string,
      warning8: useValue(
        theme.colors?.warning8,
        rempiDefaultConfig.colors.warning8
      ) as string,
      warning9: useValue(
        theme.colors?.warning9,
        rempiDefaultConfig.colors.warning9
      ) as string,
      warning10: useValue(
        theme.colors?.warning10,
        rempiDefaultConfig.colors.warning10
      ) as string,
      warning11: useValue(
        theme.colors?.warning11,
        rempiDefaultConfig.colors.warning11
      ) as string,
      warning12: useValue(
        theme.colors?.warning12,
        rempiDefaultConfig.colors.warning12
      ) as string,

      info1: useValue(
        theme.colors?.info1,
        rempiDefaultConfig.colors.info1
      ) as string,
      info2: useValue(
        theme.colors?.info2,
        rempiDefaultConfig.colors.info2
      ) as string,
      info3: useValue(
        theme.colors?.info3,
        rempiDefaultConfig.colors.info3
      ) as string,
      info4: useValue(
        theme.colors?.info4,
        rempiDefaultConfig.colors.info4
      ) as string,
      info5: useValue(
        theme.colors?.info5,
        rempiDefaultConfig.colors.info5
      ) as string,
      info6: useValue(
        theme.colors?.info6,
        rempiDefaultConfig.colors.info6
      ) as string,
      info7: useValue(
        theme.colors?.info7,
        rempiDefaultConfig.colors.info7
      ) as string,
      info8: useValue(
        theme.colors?.info8,
        rempiDefaultConfig.colors.info8
      ) as string,
      info9: useValue(
        theme.colors?.info9,
        rempiDefaultConfig.colors.info9
      ) as string,
      info10: useValue(
        theme.colors?.info10,
        rempiDefaultConfig.colors.info10
      ) as string,
      info11: useValue(
        theme.colors?.info11,
        rempiDefaultConfig.colors.info11
      ) as string,
      info12: useValue(
        theme.colors?.info12,
        rempiDefaultConfig.colors.info12
      ) as string,
    },
    spaces: {
      ...(theme.spaces || {}),
      0: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[0], rempiDefaultConfig.spaces[0])
      ),
      1: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[1], rempiDefaultConfig.spaces[1])
      ),
      2: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[2], rempiDefaultConfig.spaces[2])
      ),
      3: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[3], rempiDefaultConfig.spaces[3])
      ),
      4: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[4], rempiDefaultConfig.spaces[4])
      ),
      5: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[5], rempiDefaultConfig.spaces[5])
      ),
      6: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[6], rempiDefaultConfig.spaces[6])
      ),
      7: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[7], rempiDefaultConfig.spaces[7])
      ),
      8: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[8], rempiDefaultConfig.spaces[8])
      ),
      9: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[9], rempiDefaultConfig.spaces[9])
      ),
      10: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[10], rempiDefaultConfig.spaces[10])
      ),
      11: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[11], rempiDefaultConfig.spaces[11])
      ),
      12: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[12], rempiDefaultConfig.spaces[12])
      ),
      13: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[13], rempiDefaultConfig.spaces[13])
      ),
      14: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[14], rempiDefaultConfig.spaces[14])
      ),
      15: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[15], rempiDefaultConfig.spaces[15])
      ),
      16: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[16], rempiDefaultConfig.spaces[16])
      ),
      17: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[17], rempiDefaultConfig.spaces[17])
      ),
      18: convertToPxIfValueIsNumber(
        useValue(theme.spaces?.[18], rempiDefaultConfig.spaces[18])
      ),
    },
    fontSizes: {
      ...(theme.fontSizes || {}),
      0: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[0], rempiDefaultConfig.fontSizes[0])
      ),
      1: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[1], rempiDefaultConfig.fontSizes[1])
      ),
      2: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[2], rempiDefaultConfig.fontSizes[2])
      ),
      3: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[3], rempiDefaultConfig.fontSizes[3])
      ),
      4: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[4], rempiDefaultConfig.fontSizes[4])
      ),
      5: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[5], rempiDefaultConfig.fontSizes[5])
      ),
      6: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[6], rempiDefaultConfig.fontSizes[6])
      ),
      7: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[7], rempiDefaultConfig.fontSizes[7])
      ),
      8: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[8], rempiDefaultConfig.fontSizes[8])
      ),
      9: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[9], rempiDefaultConfig.fontSizes[9])
      ),
      10: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[10], rempiDefaultConfig.fontSizes[10])
      ),
      11: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[11], rempiDefaultConfig.fontSizes[11])
      ),
      12: convertToPxIfValueIsNumber(
        useValue(theme.fontSizes?.[12], rempiDefaultConfig.fontSizes[12])
      ),
    },
    fonts: {
      ...(theme.fonts || rempiDefaultConfig.fonts),
    },
    fontWeights: {
      ...(theme.fontWeights || {}),
      1: useValue(theme.fontWeights?.[1], rempiDefaultConfig.fontWeights[1]),
      2: useValue(theme.fontWeights?.[2], rempiDefaultConfig.fontWeights[2]),
      3: useValue(theme.fontWeights?.[3], rempiDefaultConfig.fontWeights[3]),
      4: useValue(theme.fontWeights?.[4], rempiDefaultConfig.fontWeights[4]),
      5: useValue(theme.fontWeights?.[5], rempiDefaultConfig.fontWeights[5]),
      6: useValue(theme.fontWeights?.[6], rempiDefaultConfig.fontWeights[6]),
    },
    lineHeights: {
      ...(theme.lineHeights || {}),
      1: convertToPxIfValueIsNumber(
        useValue(theme.lineHeights?.[1], rempiDefaultConfig.lineHeights[1])
      ),
      2: convertToPxIfValueIsNumber(
        useValue(theme.lineHeights?.[2], rempiDefaultConfig.lineHeights[2])
      ),
    },
    letterSpacings: {
      ...(theme.letterSpacings || rempiDefaultConfig.letterSpacings),
    },
    borderWidths: {
      ...(theme.borderWidths || {}),
      1: convertToPxIfValueIsNumber(
        useValue(theme.borderWidths?.[1], rempiDefaultConfig.borderWidths[1])
      ),
      2: convertToPxIfValueIsNumber(
        useValue(theme.borderWidths?.[2], rempiDefaultConfig.borderWidths[2])
      ),
    },
    radii: {
      ...(theme.radii || {}),
      1: convertToPxIfValueIsNumber(
        useValue(theme.radii?.[1], rempiDefaultConfig.radii[1])
      ),
      2: convertToPxIfValueIsNumber(
        useValue(theme.radii?.[2], rempiDefaultConfig.radii[2])
      ),
      3: convertToPxIfValueIsNumber(
        useValue(theme.radii?.[3], rempiDefaultConfig.radii[3])
      ),
      4: convertToPxIfValueIsNumber(
        useValue(theme.radii?.[4], rempiDefaultConfig.radii[4])
      ),
      pill: convertToPxIfValueIsNumber(
        useValue(theme.radii?.pill, rempiDefaultConfig.radii.pill)
      ),
    },
    shadows: {
      ...(theme.shadows || {}),
      1: useValue(theme.shadows?.[1], rempiDefaultConfig.shadows[1]) as string,
      2: useValue(theme.shadows?.[2], rempiDefaultConfig.shadows[2]) as string,
      3: useValue(theme.shadows?.[3], rempiDefaultConfig.shadows[3]) as string,
      4: useValue(theme.shadows?.[4], rempiDefaultConfig.shadows[4]) as string,
    },
    zIndices: {
      ...(theme.zIndices || {}),
      1: useValue(
        theme.zIndices?.[1],
        rempiDefaultConfig.zIndices[1]
      ) as number,
      2: useValue(
        theme.zIndices?.[2],
        rempiDefaultConfig.zIndices[2]
      ) as number,
      3: useValue(
        theme.zIndices?.[3],
        rempiDefaultConfig.zIndices[3]
      ) as number,
      4: useValue(
        theme.zIndices?.[4],
        rempiDefaultConfig.zIndices[4]
      ) as number,
      5: useValue(
        theme.zIndices?.[5],
        rempiDefaultConfig.zIndices[5]
      ) as number,
      6: useValue(
        theme.zIndices?.[6],
        rempiDefaultConfig.zIndices[6]
      ) as number,
      7: useValue(
        theme.zIndices?.[7],
        rempiDefaultConfig.zIndices[7]
      ) as number,
      8: useValue(
        theme.zIndices?.[8],
        rempiDefaultConfig.zIndices[8]
      ) as number,
      9: useValue(
        theme.zIndices?.[9],
        rempiDefaultConfig.zIndices[9]
      ) as number,
      10: useValue(
        theme.zIndices?.[10],
        rempiDefaultConfig.zIndices[10]
      ) as number,
      11: useValue(
        theme.zIndices?.[11],
        rempiDefaultConfig.zIndices[11]
      ) as number,
      12: useValue(
        theme.zIndices?.[12],
        rempiDefaultConfig.zIndices[12]
      ) as number,
    },
  };

  const cssVariables: any = {};

  Object.entries(themeObject).forEach(([key, value]) => {
    Object.entries(value).forEach(([keyVal, valueVal]) => {
      cssVariables[`--${toDashLowerCase(key)}-${keyVal}`] = valueVal as string;
    });
  });

  function innerHTML(): string {
    const themeArray = Object.entries(cssVariables).map(([key, value]) => {
      return `${key}: ${value}`;
    });

    return `.${selector}{${themeArray.join(";")}}`;
  }

  function render(): string {
    if (typeof window !== "undefined") {
      const styleSheet =
        document.querySelector("#rempi") || document.createElement("style");
      styleSheet.id = "rempi";
      styleSheet.innerHTML = innerHTML();
      document.head.appendChild(styleSheet);
    }

    return selector;
  }

  return {
    getCssText: innerHTML,
    get className() {
      return render();
    },
    toString: render,
  };
}
