import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';
import 'font-awesome/css/font-awesome.css';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    repositorioInput: '',
  };

  handleRepository = (event) => {
    event.preventDefault();
    this.props.addFavoriteRequest(this.state.repositorioInput);

    this.setState({ repositorioInput: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleRepository}>
          <input
            placeholder="usuário/repositorio"
            value={this.state.repositorioInput}
            onChange={e => this.setState({ repositorioInput: e.target.value })}
          />

          <button type="submit">
            {this.props.favorites.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>

          {!!this.props.favorites.error && (
            <span style={{ color: '#F00' }}>{this.props.favorites.error}</span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>
(
                {favorite.description}
)
              </p>
              <a href={favorite.url}>Acessar repositório...</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
