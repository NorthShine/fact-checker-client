import type { Styles } from "types";

const styles: Styles = {
  root: {
    paddingTop: 40,
    textAlign: "center",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  header: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    height: 600,
    width: 1000,
  }),
  headlineResult: {
    textAlign: "left",
    padding: 15,
  },
};

export default styles;
