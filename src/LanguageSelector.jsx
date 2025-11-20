import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' }
];

export default function LanguageSelector({ value, onChange }) {
  return (
    <div style={{ minWidth: 140 }}>
      <Select
        options={options}
        value={options.find(opt => opt.value === value)}
        onChange={opt => onChange(opt.value)}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #1cb5e0 0%, #61dafb 100%)',
            color: '#0a0e27',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(97,218,251,0.18)',
            border: 'none',
            minHeight: 38,
          }),
          singleValue: (base) => ({ ...base, color: '#0a0e27', fontWeight: 600 }),
          menu: (base) => ({ 
            ...base, 
            borderRadius: 12, 
            boxShadow: '0 4px 16px rgba(97,218,251,0.18)',
            background: 'rgba(10, 14, 39, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(97, 218, 251, 0.2)'
          }),
          menuList: (base) => ({
            ...base,
            padding: '0.3rem',
            background: 'transparent'
          }),
          option: (base, state) => ({
            ...base,
            borderRadius: 10,
            background: state.isFocused ? 'linear-gradient(135deg, #61dafb 0%, #1cb5e0 100%)' : 'rgba(255, 255, 255, 0.05)',
            color: state.isFocused ? '#fff' : '#61dafb',
            fontWeight: 600,
            margin: '0.2rem 0',
            cursor: 'pointer'
          })
        }}
        isSearchable={false}
      />
    </div>
  );
}
