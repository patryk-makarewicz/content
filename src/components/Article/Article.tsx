import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import { ContentElementsModel } from 'api/ContentAPI/Content.model';

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
          src={`https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124${article.mainImage.value.leadImage.asset.resourceUri}`}
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
