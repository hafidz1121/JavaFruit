'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap foot-row">
        <span>{t.footer.rights.replace('{year}', year)}</span>
        <span>{t.footer.location}</span>
      </div>
    </footer>
  );
}
