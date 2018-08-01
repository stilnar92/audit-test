import React, { Component } from "react";
import styled from "styled-components";
import { UserList } from "./components/user-list";
import { UserAddForm } from "./components/user-form";
import { UserActionButton } from "../../ui/button";
import { Header } from "../../ui/header";
import plus from "../../images/plus.svg";
import cross from "../../images/cross.svg";
import angleup from "../../images/angleup.svg";

const CloseButton = styled(UserActionButton)`
  background: url(${cross}) no-repeat;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const FormHideButton = styled(UserActionButton)`
  background: url(${angleup}) no-repeat;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const UserAddButton = styled(UserActionButton)`
  background: url(${plus}) no-repeat;
`;

const UserAddContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  margin-left: 10px;
`;

const Title = styled.h1``;

const FormHideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
`;

const Modal = styled.div`
  background: #f7f7f7;
  padding: 20px;
`;

export class UserManagePage extends Component {
  state = {
    user: {
      firstName: "",
      phone: "",
      email: ""
    },
    users: [],
    isOpen: false
  };

  handleInputChange = event => {
    const { user } = this.state;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleUserSave = event => {
    event.preventDefault();
    const {
      user: { firstName, email, phone },
      users
    } = this.state;
    this.setState({
      users: [...users, { firstName, email, phone }]
    });
  };

  handleUserEdit = (firstName, phone, email) => {
    this.setState({ user: { firstName, phone, email } });
  };

  handleUserDelete = id => {
    const { users } = this.state;
    users.splice(id, 1);
    this.setState({ users: users });
  };

  handleOpenForm = event => {
    this.setState({ isOpen: true });
  };

  handleHideForm = event => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      user: { firstName, email, phone },
      users,
      isOpen
    } = this.state;
    return (
      <Modal>
        <Header>
          <Title>Клиент</Title>
          <CloseButton />
        </Header>
        <UserAddContainer>
          <UserAddButton onClick={this.handleOpenForm} />
          <Label>Добавить клиента</Label>
        </UserAddContainer>
        {isOpen && (
          <div>
            <UserAddForm
              firstName={firstName}
              phone={phone}
              email={email}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleUserSave}
            />
            <FormHideContainer>
              <FormHideButton onClick={this.handleHideForm} />
              <FormHideButton onClick={this.handleHideForm} />
            </FormHideContainer>
          </div>
        )}
        <UserList
          users={users}
          handleEdit={this.handleUserEdit}
          handleDelete={this.handleUserDelete}
        />
      </Modal>
    );
  }
}
