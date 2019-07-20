import React from 'react';
import { Form, Button, Card, Checkbox, Menu, Dropdown, Item, Modal, Header, Image } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../util/hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

import CustomizeGoal from './CustomizeGoal';

function PostForm(){

  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    title: '',
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result){
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });

      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.title = '';
      values.body = '';
    }
  });


const options = [
      { key: 1, text: 'Health & Fitness', value: 1 },
      { key: 2, text: 'Travel', value: 2 },
      { key: 3, text: 'Finance', value: 3 },
      { key: 4, text: 'Culture', value: 4 },
  ]

  function createPostCallback(){
    createPost();
  }

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Form onSubmit={onSubmit}>
          <h2>Create a Goal: </h2>
          <Form.Field>
            <Form.Input
              placeholder="Title"
              name="title"
              onChange={onChange}
              value={values.title}
              error={error ? true : false}
              />
            <Form.Input
              placeholder="Description"
              name="body"
              onChange={onChange}
              value={values.body}
              error={error ? true : false}
              />
            <Form.Input
              placeholder="Enter due date"
              name="dueDate"
              onChange={onChange}
              value={values.dueDate}
              error={error ? true : false}
              />
            <CustomizeGoal />
            <Button floated="right" type="submit" color="green">
            Share
            </Button>
          </Form.Field>
        </Form>
      </Card.Content>
    </Card>
    {error && (
      <div className="ui error message">
        <ul className="list">
          <li>{error.graphQLErrors[0].message}</li>
        </ul>
      </div>
    )}
  </>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String!, $body: String!){
    createPost (title: $title, body: $body){
      id
      title
      body
      createdAt
      username
      likes{
        id username createdAt
      }
      likeCount
      comments{
        id body username createdAt
      }
      commentCount
    }
  }
`

export default PostForm;
