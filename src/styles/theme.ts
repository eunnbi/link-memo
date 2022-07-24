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
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "#212121",
    buttonColor: "#212121",
    bgColor: "#fff",
    red: "red",
    blue: "blue",
    hoverColor: "rgba(0, 0, 0, 0.05)",
  },
  device,
  name: "light",
};

export const darkTheme = {
  color: {
    bodyBgColor: "#252525",
    textColor: "#fff",
    shadowColor: "#000",
    borderColor: "#fff",
    buttonColor: "#101010",
    bgColor: "#000",
    red: "#F07470",
    blue: "#56A9FF",
    hoverColor: "#363636",
  },
  device,
  name: "dark",
};
