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
});
