import theme from "react-native-elements/dist/config/theme";
import styled from "styled-components/native";

const RoleBadge = styled.View<{ role: string }>`
  background-color: ${(props: { role: any; }) => {
    switch (props.role) {
      case 'admin':
        return theme.colors.primary + '20';
      case 'doctor':
        return theme.colors.success + '20';
      default:
        return theme.colors.secondary + '20';
    }
  }};
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export default RoleBadge;