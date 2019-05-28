import React, { Component } from 'react';
import { connect } from 'react-redux';

import DEMO_DATA_ACTIONS from 'app/stores/actions/demoDataActions';
import {
  getArticles,
  getAuthors,
  getAuthorByAuthorId
} from 'app/stores/selectors/demoDataSelectors';
import Article from './Article';

class ArticleList extends Component {
  articleActions = {
    getAuthorByAuthorId: authorId => this.props.authorById(authorId)
  };

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {
          Object.values(this.props.articles).map(article => (
            <Article
              key={ article.id }
              article={ article }
              actions={ this.articleActions }
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const articles = getArticles(state);
  const authors = getAuthors(state);

  return {
    articles,
    authors,
    authorById: authorId => getAuthorByAuthorId(state, authorId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(DEMO_DATA_ACTIONS.fetchDemoData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
