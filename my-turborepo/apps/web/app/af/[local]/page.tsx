import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password === '123') {
      router.push('/af/demo');
    } else {
      router.push('/af/123');
    }
  };

  return (
    <div>
      <p>{t('welcomeMessage')}</p>
      <p>运行时的环境变量 NAME: {process.env.NAME}</p>
      <p>环境变量文件 ENV_NAME: {process.env.ENV_NAME}</p>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder={t('enterPassword')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{t('loginButton')}</button>
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
