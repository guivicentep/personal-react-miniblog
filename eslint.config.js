import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      
      // Regras para padronização de aspas
      'quotes': ['error', 'single'], // Força aspas simples
      'jsx-quotes': ['error', 'prefer-single'], // Força aspas simples em JSX
      
      // Regras para alinhamento e formatação de componentes
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // Fecha tags em nova linha
      'react/jsx-closing-tag-location': 'error', // Alinha tags de fechamento
      'react/jsx-indent': ['error', 2], // Indentação de 2 espaços para JSX
      'react/jsx-indent-props': ['error', 2], // Indentação de props
      'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline' }], // Uma prop por linha quando multilinhas
      'react/jsx-first-prop-new-line': ['error', 'multiline'], // Props em nova linha quando multilinhas
      'react/jsx-wrap-multilines': ['error', {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line'
      }], // Controla quebras de linha em JSX multilinhas
      
      // Mantendo suas regras personalizadas
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]