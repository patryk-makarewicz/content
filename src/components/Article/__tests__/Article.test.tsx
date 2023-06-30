import { render } from '@testing-library/react';
import React from 'react';

import { Article, ArticleProps } from '../Article';

const renderArticle = ({ article = {} }: Partial<ArticleProps> = {}) => {
  const { getByTestId } = render(<Article article={article} />);

  return {
    getByTestId,
  };
};

describe('test Article', () => {
  it('should render article with elements', () => {
    const { getByTestId } = renderArticle();

    const Title = getByTestId('article-title');
    expect(Title).toBeInTheDocument();

    const Date = getByTestId('article-date');
    expect(Date).toBeInTheDocument();

    const Author = getByTestId('article-author');
    expect(Author).toBeInTheDocument();

    const Image = getByTestId('article-image');
    expect(Image).toBeInTheDocument();

    const Body = getByTestId('article-body');
    expect(Body).toBeInTheDocument();
  });
});
