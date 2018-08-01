import React from "react";
import { Table, Thead, Th } from "../../../ui/table";
import { UserItem } from "./user-item";

export const UserList = ({ users, handleEdit, handleDelete }) => (
  <Table>
    <Thead>
      <tr>
        <Th />
        <Th>Клиент</Th>
        <Th>Телефон</Th>
        <Th>E-Mail</Th>
        <Th>Дата последнего посещения</Th>
        <Th>Сумма оплат</Th>
        <Th>Количество посещении</Th>
        <Th>Активный абонимент</Th>
      </tr>
    </Thead>
    <tbody>
      {users.map((user, index) => {
        return (
          <UserItem
            key={index}
            index={index}
            user={user}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </tbody>
  </Table>
);
