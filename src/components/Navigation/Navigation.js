import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import styles from './Navigation.module.css';

let cx = classNames.bind(styles);

class Navigation extends Component {
  state = { isModalOpen: false };
  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    let className = cx({
      hamburgerButton: true,
      active: this.state.isModalOpen,
    });
    return (
      <nav className={styles.nav}>
        <div onClick={this.toggleModal} className={className}>
          <span></span>
        </div>
        {this.state.isModalOpen && (
          <ul className={styles.ul}>
            <li>Our Games</li>
            <li>Platform</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Log In</li>
            <Button text="Get Started Now" highlight height="38" width="171" />
          </ul>
        )}
        <ul className={styles.show}>
          <li>Our Games</li>
          <li>Platform</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Log In</li>
          <Button text="Get Started Now" highlight height="38" width="171" />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
