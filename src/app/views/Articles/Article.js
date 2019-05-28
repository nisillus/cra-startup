import React from 'react';

import { ArticleStyles } from 'app/styles';

const convertShowingDate = dateStr => new Date(dateStr).toDateString();

function Article(props) {
  const { article, actions: { getAuthorByAuthorId } } = props;
  const author = (article && getAuthorByAuthorId(article.authorId)) || {};

  return (
    <ArticleStyles.ArticleWrapper>
      <ArticleStyles.ArticleTitle>{ article.title }</ArticleStyles.ArticleTitle>
      <ArticleStyles.ArticleTimestamp>
        { convertShowingDate(article.date) }
      </ArticleStyles.ArticleTimestamp>
      <ArticleStyles.ArticleAuthor>
        <a href={ author.website }>
          { author.firstName } { author.lastName }
        </a>
      </ArticleStyles.ArticleAuthor>
      <ArticleStyles.ArticleBody>{ article.body }</ArticleStyles.ArticleBody>
    </ArticleStyles.ArticleWrapper>
  );
}

export default Article;