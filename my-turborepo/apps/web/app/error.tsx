'use client';

import { useTranslation } from 'next-i18next';

export default ({ error, reset }: { error: Error, reset: () => void }) => {
    const { t } = useTranslation('common');

    return <div>
        {t('errorPage')}
        <br />
        {error.message}
        <br />
        <button onClick={() => reset()}>reset</button>
    </div>
}