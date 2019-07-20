import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const ProfileTable = () => (
  <Table celled style={{ height: '100%' }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="3">Active Goals:</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Percent Complete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>No Name Specified</Table.Cell>
        <Table.Cell>Active</Table.Cell>
        <Table.Cell>47%</Table.Cell>
      </Table.Row>
      <Table.Row warning>
        <Table.Cell>Jimmy</Table.Cell>
        <Table.Cell>
          Nearing Due Date
        </Table.Cell>
        <Table.Cell>92%</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Active</Table.Cell>
        <Table.Cell>23%</Table.Cell>
      </Table.Row>
      <Table.Row error>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>
          <Icon name='attention' />
          Overdue
        </Table.Cell>
        <Table.Cell>84%</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ProfileTable;
