import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "48px 72px 24px",
    gap: "4px",
    position: "absolute",
    width: "1440px",
    height: "119px",
    left: "0px",
    top: "0px",
    background: "#FFFFFF",
  },
  navItem: {
    width: "124px",
    height: "47px",

    /* Destop/H4 */

    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "35px",
    lineHeight: "47px",
    /* identical to box height */

    letterSpacing: "0.0025em",

    /* Text Color/Light/Primary Text */

    color: "#1F1235",
  },
  navFrame: {
    display: "flex",
    flexDirection: "row",
    padding: "0px",
    gap: "48px",

    width: "347px",
    height: "47px",
    alignItems:'flex-end',

    /* Inside auto layout */
    flex: "none",
    order: 1,
    flexGrow: 0,
  },

  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
  },

  home_heading: {
    justifyContent: "center",
    marginTop: 150,
    fontFamily: "Cabin Sketch",
    fontWeight: 500,
  },
}));
