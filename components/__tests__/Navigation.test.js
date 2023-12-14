import { fireEvent, render } from "@testing-library/react-native";
import SecondScreen from "../SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useAppNavigation } from "../../navigation/utils/useAppNavigation";

// Mock the useAppNavigation module
jest.mock("../../navigation/utils/useAppNavigation");

describe("navigation test", () => {
  it("is navigation process successful", () => {
    const navigationMock = { navigate: jest.fn() };
    useAppNavigation.mockReturnValue(navigationMock);

    const { getByRole } = render(
      <NavigationContainer>
        <SecondScreen />
      </NavigationContainer>
    );

    const navBtn = getByRole("button", { name: "Go to first screen" });
    fireEvent.press(navBtn);

    expect(navigationMock.navigate).toHaveBeenCalledWith("OnBoarding", {
      screen: "HomeScreen",
    });
  });
});
