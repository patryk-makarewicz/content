import { QueryKey, ContentAPI } from 'api';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { ContentDTO, ContentElementsModel } from 'api/ContentAPI/Content.model';

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
    data: (data ? data : {}) as ContentDTO,
    article: (data && data.elements ? data.elements : {}) as ContentElementsModel,
    isLoading: isLoading || initialLoading,
    isError,
    isSuccess,
  };
};
