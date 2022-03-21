import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'styles/theme';

const useStyles = ({
  theme,
  width,
  spaceWidth,
}: {
  theme: ProjectThemeType;
  width: number | string;
  spaceWidth: number;
}) => StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    width,
  },
  stepsContainer: {
    marginHorizontal: -spaceWidth / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  step: {
    flex: 1,
    marginHorizontal: spaceWidth / 2,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  activeStep: {
    backgroundColor: theme.colors.primary,
  },
  stepIndicator: {
    marginBottom: 15,
    textAlign: 'right',
    ...theme.fonts.spartan600,
    fontSize: 10,
    color: theme.colors.primary,
  },
});

export default useStyles;
