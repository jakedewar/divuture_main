import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';


function Settings() {
  const { user } = useContext(AuthContext);
  const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

  return (
  <h1> discovery </h1>
);
}


export default Settings;
