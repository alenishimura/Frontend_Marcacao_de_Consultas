import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Header } from "react-native-elements";
import React from "react";
import { ViewStyle } from "react-native";
import { Container, ScrollView, Title, ProfileCard, Avatar, Name, Email, RoleText, SpecialtyText, styles } from "./styles";
import RoleBadge from "./components/RoleBadge";
import { RootStackParamList } from "../../types/navigation";
import { useAuth } from "../../contexts/AuthContext";

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<ProfileScreenProps['navigation']>();

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'doctor':
        return 'Médico';
      case 'patient':
        return 'Paciente';
      default:
        return role;
    }
  };

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Meu Perfil</Title>

        <ProfileCard>
          <Avatar source={{ uri: user?.image || 'https://via.placeholder.com/150' }} />
          <Name>{user?.name}</Name>
          <Email>{user?.email}</Email>
          <RoleBadge role={user?.role || ''}>
            <RoleText>{getRoleText(user?.role || '')}</RoleText>
          </RoleBadge>
          
          {user?.role === 'doctor' && (
            <SpecialtyText>Especialidade: {user?.specialty}</SpecialtyText>
          )}
        </ProfileCard>

        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;