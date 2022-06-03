import {TextInputProps, TextInput, ViewStyle} from 'react-native';

interface ITextInputProps extends TextInputProps {
  inputRef?: React.Ref<TextInput> | undefined;
  contentContainerStyle?: ViewStyle;
  showSearchIcon?: boolean;
  onClear?: () => void;
  onChange?: (value: string) => void;
  isLoading?: boolean;
  label?: string;
}

interface IContainerStyleProps {
  isFocused: boolean;
}
