import React from 'react';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';

class BadgesListItem extends React.Component {
  render() {
    return (
        <div className="BadgesListItem">
            <Gravatar
              className="BadgesListItem__avatar"
              email={this.props.badge.email}
            />

            <div>
                <strong>
                    {this.props.badge.firstName} {this.props.badge.lastName}
                </strong>
                <br /><span>@{this.props.badge.twitter}</span><br />{this.props.badge.jobTitle}
            </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {

    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Not badge were found</h3>
          <Link className="btn btn-primary" to='badges/new'>
            Create New Badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;