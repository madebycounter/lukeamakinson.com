export const BLACK = "#121210";
export const WHITE = "#f0f0f0";
export const RED = "#824949";
export const GREEN = "#648249";
export const BLUE = "#495e82";

export const PrimaryTheme = (alt) => ({
    navFont: "ITC Busorama Bold",
    titleFont: "ECKMANN",
    bodyFont: "Times New Roman",

    background: BLACK,
    foreground: WHITE,
    alternate: alt || WHITE,

    colors: {
        red: RED,
        green: GREEN,
        blue: BLUE,
        back: BLACK,
        white: WHITE,
    },
});
