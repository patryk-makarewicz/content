import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import { ContentElementsModel } from 'api/ContentAPI/Content.model';
import { BASE_URL } from 'api/config';

type ArticleProps = {
  article: ContentElementsModel;
};

export const Article = ({ article }: ArticleProps) => {
  const { t } = useTranslation();

  return (
    <>
      <p>Title: {article.heading.value}</p>
      <p>Date: {article.date.value}</p>
      <p>Author: {article.author.value}</p>
      <p>
        Image:{' '}
        <img
          style={{ width: '200px' }}
          src={`${BASE_URL}${article.mainImage.value.leadImage.asset.resourceUri}`}
          alt={article.mainImage.value.leadImage.asset.altText}
        />
      </p>
      <div>
        Body:{' '}
        {article.body.values.map((elem, index) => (
          <div key={index}>{ReactHtmlParser(elem)}</div>
        ))}
      </div>
    </>
  );
};
