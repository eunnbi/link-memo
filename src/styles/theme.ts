const deviceSizes = {
  smallMobile: "300px",
  mobile: "500px",
  tablet: "900px",
};

const device = {
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

export const lightTheme = {
  color: {
    bodyBgColor: "#fff",
    bgColor: "#fff",
    secondBgColor: "#fff",
    grayBgColor: "#f0f0f0",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "#212121",
    hoverColor: "rgba(0, 0, 0, 0.05)",
    placeholderColor: "#757575",
    red: "red",
    blue: "blue",
  },
  device,
  name: "light",
};

export const darkTheme = {
  color: {
    bodyBgColor: "#252525",
    bgColor: "#000",
    secondBgColor: "#353535",
    grayBgColor: "#454545",
    textColor: "#fff",
    shadowColor: "#000",
    borderColor: "#fff",
    hoverColor: "#363636",
    red: "#F07470",
    blue: "#56A9FF",
    placeholderColor: "#ababab",
  },
  device,
  name: "dark",
};
