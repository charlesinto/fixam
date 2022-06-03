import { Text } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import colors, { addOpacity } from "../../theme/colors";
import { IContainerStyleProps } from "./interfaces";

export const LabelText = styled(Text)`
  color: ${colors.black};
`;

export const TextInput = styled.TextInput`
  background: ${"#63a4fb" + addOpacity(20)};
  color: ${colors.black};
  padding: 10px 10px;
  border-radius: 4px;
`;

export const InputWrapper = styled.View``;

export const Container = styled.View<IContainerStyleProps>``;

export const Button = styled.TouchableOpacity``;

export const ActivityIndicator = styled.ActivityIndicator.attrs(
  (p: { theme: DefaultTheme }) => ({})
)``;

export const PhoneCodeContainer = styled.View``;

export const PhoneCode = styled.Text``;
