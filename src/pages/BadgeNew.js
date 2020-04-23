import React from 'react';
import "./styles/BadgeNew.css";
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = (e) => {
    // const copyStateForm = this.state.form
    // copyStateForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/0d9d0ae56037738c7582d512491d466c?s=80"
              /> 
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;