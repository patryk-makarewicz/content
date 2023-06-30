import { format, parseISO } from 'date-fns';
import ReactHtmlParser from 'react-html-parser';

import { ContentElementsModel } from 'api/ContentAPI/Content.model';
import { BASE_URL } from 'api/config';

import { useTheme } from 'hooks/useTheme';

import { Placeholder } from 'components/Placeholder';

import { PhotoLoad } from 'utils/photo';

import { default as CalendarLogo } from '../../assets/calendar.svg';
import { default as PersonLogo } from '../../assets/person.svg';
import { default as TitleLogo } from '../../assets/title.svg';
import * as Styled from './Article.styles';

export type ArticleProps = {
  article: ContentElementsModel;
};

export const Article = ({ article }: ArticleProps) => {
  const { onLoad, loaded, refPhoto } = PhotoLoad();
  const { theme } = useTheme();

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
        <Styled.Box $margin="0 0 8px 0">
          <Styled.Icon src={TitleLogo} alt="Title logo" $dark={theme} />
          {article?.heading?.value}
        </Styled.Box>
      </Styled.Title>
      <Styled.Body data-testid="article-body">
        {article?.body?.values.map((elem, index) => (
          <div key={index}>{ReactHtmlParser(elem)}</div>
        ))}
      </Styled.Body>
      <Styled.Box $margin="12px 0 8px 0">
        <Styled.Icon src={CalendarLogo} alt="Calendar logo" $dark={theme} />
        <Styled.Metadata data-testid="article-date">
          {article?.date?.value && format(parseISO(article?.date?.value), 'dd-MM-yyyy, HH:mm')}
        </Styled.Metadata>
      </Styled.Box>
      <Styled.Metadata data-testid="article-author">
        <Styled.Box $margin="0">
          <Styled.Icon src={PersonLogo} alt="Person logo" $dark={theme} />
          {article?.author?.value}
        </Styled.Box>
      </Styled.Metadata>
    </Styled.Wrapper>
  );
};
