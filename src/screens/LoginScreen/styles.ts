import theme from "../../styles/theme";

export const styles = {
  scrollContent: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    marginTop: 10,
  },
  registerButton: {
    marginTop: 10,
    width: '100%',
  },
  registerButtonStyle: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
  },
   hint: {
    marginTop: 20,
    textAlign: 'center' as const,
    color: theme.colors.text,
  },
};

