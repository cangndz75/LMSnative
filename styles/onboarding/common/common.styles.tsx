import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#2467EC",
    width: responsiveWidth(88),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    width: responsiveWidth(2),
    height: responsiveWidth(2),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#2467Ec",
    width: responsiveWidth(2),
    height: responsiveWidth(2),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: heightPercentageToDP("3.5%"),
    textAlign: "center",
  },
  description: {
    fontSize: heightPercentageToDP("2.5%"),
    textAlign: "center",
    color: "#575757",
  },
  input: {
    backgroundColor: "#fff",
    paddingLeft: 35,
    borderRadius: 8,
    height: 55,
    fontSize: 16,
    marginHorizontal: 16,
    color: "#A1A1A1",
  },
  errorContainer:{
    flexDirection: "row",
    marginHorizontal: 16,
    top:60,
    alignItems: "center",
    position: "absolute",
  },
});
