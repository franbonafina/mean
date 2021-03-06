import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  DisabledInput,
  SelectInput,
  Filter,
  TextInput
} from 'react-admin'

const UserFilters = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='name' alwaysOn />
    <TextInput label='Email' source='email' />
    <SelectInput label='Role' source='role' choices={[
      { id: 'user', name: 'User', key: 1 },
      { id: 'moderator', name: 'Moderator', key: 2 },
      { id: 'admin', name: 'Admin', key: 3 }
    ]} />
  </Filter>
)

export const UserList = (props) => (
  <List {...props} filters={<UserFilters />}>
    <Datagrid>
      <TextField source='username' />
      <TextField source='name' />
      <TextField source='email' />
      <TextField source='role' />
      <EditButton label='Edit role' />
    </Datagrid>
  </List>
)
