import { useTypedSelector } from './useTypedSelector';
import { useTypedDispatch } from './useTypedDispatch';
import { toggleDarkMode, setDarkMode, setPrimaryColor, setAccentColor } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useTypedDispatch();
  const { darkMode, primaryColor, accentColor } = useTypedSelector(state => state.theme);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleSetDarkMode = (isDark: boolean) => {
    dispatch(setDarkMode(isDark));
  };

  const handleSetPrimaryColor = (color: string) => {
    dispatch(setPrimaryColor(color));
  };

  const handleSetAccentColor = (color: string) => {
    dispatch(setAccentColor(color));
  };

  return {
    darkMode,
    primaryColor,
    accentColor,
    toggleDarkMode: handleToggleDarkMode,
    setDarkMode: handleSetDarkMode,
    setPrimaryColor: handleSetPrimaryColor,
    setAccentColor: handleSetAccentColor,
  };
};