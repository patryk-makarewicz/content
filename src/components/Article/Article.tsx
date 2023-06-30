import { format, parseISO } from 'date-fns';
import ReactHtmlParser from 'react-html-parser';

import { ContentElementsModel } from 'api/ContentAPI/Content.model';
import { BASE_URL } from 'api/config';

import { Placeholder } from 'components/Placeholder';

import { PhotoLoad } from 'utils/photo';

import { ReactComponent as TitleLogo } from '../../assets/title.svg';
import * as Styled from './Article.styles';

export type ArticleProps = {
  article: ContentElementsModel;
};

export const Article = ({ article }: ArticleProps) => {
  const { onLoad, loaded, refPhoto } = PhotoLoad();

  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper data-testid="article-image">
        <Placeholder hide={loaded} />
        <Styled.Image
          src={`${BASE_URL}${article?.mainImage?.value?.leadImage?.asset?.resourceUri}`}
          alt={article?.mainImage?.value?.leadImage?.asset?.altText}
          ref={refPhoto}
          onLoad={onLoad}
          hide={!loaded}
        />
      </Styled.ImageWrapper>
      <Styled.Title data-testid="article-title">
        <TitleLogo width={20} height={20} />
        {article?.heading?.value}
      </Styled.Title>
      <Styled.Body data-testid="article-body">
        {article?.body?.values.map((elem, index) => (
          <div key={index}>{ReactHtmlParser(elem)}</div>
        ))}
      </Styled.Body>
      <Styled.Metadata data-testid="article-date">
        {article?.date?.value && format(parseISO(article?.date?.value), 'dd-MM-yyyy, HH:mm')}
      </Styled.Metadata>
      <Styled.Metadata data-testid="article-author">Author: {article?.author?.value}</Styled.Metadata>
    </Styled.Wrapper>
  );
};
