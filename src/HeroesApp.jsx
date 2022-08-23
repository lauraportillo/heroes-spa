//Components
import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
// Styles
import './styles.scss';

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
