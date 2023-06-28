import { QueryKey, ContentAPI } from 'api';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { ContentDTO } from 'api/ContentAPI/Content.dto';

export const useGetContent = () => {
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);

  const { data, isLoading, isError, isSuccess } = useQuery([QueryKey.loadContent], ContentAPI.getContent, {
    refetchOnWindowFocus: false,
    onSettled: () => {
      setInitialLoading(false);
    },
    onError: () => {
      console.log(t('messages.fail.generic'));
    },
  });

  return {
    data: useMemo(() => (data ? data : {}), [data]) as ContentDTO,
    isLoading: isLoading || initialLoading,
    isError,
    isSuccess,
  };
};
