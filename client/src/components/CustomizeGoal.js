import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Dropdown, Label, Radio } from 'semantic-ui-react';


const options = [
    { key: 1, text: 'Health & Fitness', value: 1 },
    { key: 2, text: 'Travel', value: 2 },
    { key: 3, text: 'Finance', value: 3 },
    { key: 4, text: 'Culture', value: 4 },
];

const CustomizeGoal = () => (
  <Modal trigger={<Button href="#" icon="options" color="blue"></Button>}>
    <Modal.Header>Goal Options:</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
            <Dropdown className="button" text='Category' options={options} item />
            <Radio toggle style={{ marginLeft: 10 }} /> <Label>Public Post</Label>
            <Button floated="right" href="#">Customize</Button>
          </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default CustomizeGoal;
