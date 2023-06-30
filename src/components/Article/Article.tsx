// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from 'date-fns';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import { ContentElementsModel } from 'api/ContentAPI/Content.model';
import { BASE_URL } from 'api/config';

export type ArticleProps = {
  article: ContentElementsModel;
};

export const Article = ({ article }: ArticleProps) => {
  const { t } = useTranslation();

  return (
    <>
      <p data-testid="article-title">Title: {article?.heading?.value}</p>
      <p data-testid="article-date">
        Date: {article?.date?.value && format(parseISO(article?.date?.value), 'dd-MM-yyyy, HH:mm')}
      </p>
      <p data-testid="article-author">Author: {article?.author?.value}</p>
      <p data-testid="article-image">
        Image:{' '}
        <img
          style={{ width: '200px' }}
          src={`${BASE_URL}${article?.mainImage?.value?.leadImage?.asset?.resourceUri}`}
          alt={article?.mainImage?.value?.leadImage?.asset?.altText}
        />
      </p>
      <div data-testid="article-body">
        Body:{' '}
        {article?.body?.values.map((elem, index) => (
          <div key={index}>{ReactHtmlParser(elem)}</div>
        ))}
      </div>
    </>
  );
};
