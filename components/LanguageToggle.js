'use client';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLanguage } = useLanguage();

  const handleSelect = (selectedLang, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(selectedLang);
  };

  return (
    <div
      className="lang-toggle"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(31, 92, 49, 0.08)',
        borderRadius: '100px',
        padding: '3px',
        border: '1px solid var(--line)',
        position: 'relative',
        zIndex: 60,
        pointerEvents: 'auto',
      }}
    >
      <button
        type="button"
        onClick={(e) => handleSelect('id', e)}
        style={{
          border: 'none',
          background: lang === 'id' ? 'var(--green-deep)' : 'transparent',
          color: lang === 'id' ? '#fff' : 'var(--ink-soft)',
          padding: '6px 13px',
          borderRadius: '100px',
          fontSize: '12px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: lang === 'id' ? '0 2px 6px rgba(31, 92, 49, 0.25)' : 'none',
          position: 'relative',
          zIndex: 61,
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
        aria-label="Bahasa Indonesia"
      >
        🇮🇩 ID
      </button>
      <button
        type="button"
        onClick={(e) => handleSelect('en', e)}
        style={{
          border: 'none',
          background: lang === 'en' ? 'var(--green-deep)' : 'transparent',
          color: lang === 'en' ? '#fff' : 'var(--ink-soft)',
          padding: '6px 13px',
          borderRadius: '100px',
          fontSize: '12px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: lang === 'en' ? '0 2px 6px rgba(31, 92, 49, 0.25)' : 'none',
          position: 'relative',
          zIndex: 61,
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
        aria-label="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
