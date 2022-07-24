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
    bgColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  device,
  name: "light",
};

export const darkTheme = {
  color: {
    bgColor: "#000",
    textColor: "#fff",
    shadowColor: "#000",
  },
  device,
  name: "dark",
};
