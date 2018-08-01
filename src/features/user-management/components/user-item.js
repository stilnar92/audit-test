import React from "react";
import styled from "styled-components";
import { UserActionButton } from "../../../ui/button";
import { Td } from "../../../ui/table";
import pen from "../../../images/pen.svg";
import cross from "../../../images/cross.svg";

export const UserEditButton = styled(UserActionButton)`
  background: url(${pen}) no-repeat;
  margin-right: 10px;
`;

export const UserRemoveButton = styled(UserActionButton)`
  background: url(${cross}) no-repeat;
`;

export const UserItem = ({
  index,
  user: { firstName, phone, email },
  handleEdit,
  handleDelete
}) => (
  <tr>
    <Td>
      <UserEditButton onClick={event => handleEdit(firstName, phone, email)} />
      <UserRemoveButton onClick={event => handleDelete(index)} />
    </Td>
    <Td>{firstName}</Td>
    <Td>{phone}</Td>
    <Td>{email}</Td>
    <Td>--------</Td>
    <Td>--------</Td>
    <Td>--------</Td>
    <Td>--------</Td>
  </tr>
);
