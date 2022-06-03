import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { ITextInputProps } from "./interfaces";

import {
  Button,
  Container,
  TextInput,
  PhoneCode,
  ActivityIndicator,
  PhoneCodeContainer,
  LabelText,
  InputWrapper,
} from "./styles";
import font from "../../theme/font";
import colors from "../../theme/colors";

const Input = (props: ITextInputProps) => {
  const {
    onClear,
    onChange,
    inputRef,
    isLoading,
    label,
    showSearchIcon,
    maxLength = 255,
    contentContainerStyle,
    ...inputProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const isPassword = props.textContentType === "password";
  const isPhoneNumber = props.textContentType === "telephoneNumber";
  const [secureTextEntry, setSecureTextEntry] = useState(
    (isPassword && props.secureTextEntry) || false
  );

  const _showPassword = () => setSecureTextEntry(!secureTextEntry);

  return (
    <InputWrapper>
      <LabelText>{label}</LabelText>
      <Container style={contentContainerStyle as any} isFocused={isFocused}>
        {showSearchIcon && (
          <Ionicons
            name="search"
            size={font.size.font20}
            color={colors.black}
            style={{ marginRight: 6 }}
          />
        )}

        {isPhoneNumber && (
          <PhoneCodeContainer>
            <PhoneCode>+234</PhoneCode>
          </PhoneCodeContainer>
        )}

        <TextInput
          maxLength={maxLength}
          {...(inputProps as any)}
          ref={inputRef as any}
          placeholderTextColor={colors.textGrey}
          secureTextEntry={props.secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChange}
          underlineColor="transparent"
        />

        {onClear && (
          <Button onPress={onClear}>
            <Ionicons
              name="close"
              size={font.size.font20}
              color={colors.black}
              style={{ marginRight: 6 }}
            />
          </Button>
        )}

        {isLoading && <ActivityIndicator />}

        {isPassword && (
          <Button onPress={_showPassword}>
            <Ionicons
              size={font.size.font20}
              color={colors.black}
              style={{ marginRight: 6 }}
              name={secureTextEntry ? "eye-off" : "eye"}
            />
          </Button>
        )}
      </Container>
    </InputWrapper>
  );
};

export default Input;
