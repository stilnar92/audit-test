import React from "react";
import styled from "styled-components";
import { Button } from "../../../ui/button";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Field = styled.div`
  width: 450px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 10px 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 50px;
`;

export const Label = styled.label`
  color: #aaa;
`;

export const UserAddForm = ({
  handleInputChange,
  handleSubmit,
  firstName,
  phone,
  email
}) => (
  <React.Fragment>
    <form>
      <Container>
        <Field>
          <Label>Имя</Label>
          <br />
          <Input
            type="text"
            name="firstName"
            placeholder="Иванов Иван Иванович"
            value={firstName}
            onChange={handleInputChange}
          />
        </Field>
        <Field>
          <Label>Телефон</Label>
          <br />
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </Field>
        <Field>
          <Label>E-Mail</Label>
          <br />
          <Input
            type="email"
            name="email"
            placeholder="name@address.ru"
            value={email}
            onChange={handleInputChange}
          />
        </Field>
        <Field>
          <Button onClick={handleSubmit}>Сохранить</Button>
        </Field>
      </Container>
    </form>
  </React.Fragment>
);
