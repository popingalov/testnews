import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  return <h2>{t('homePage.text')}</h2>;
}
