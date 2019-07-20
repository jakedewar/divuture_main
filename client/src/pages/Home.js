import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';


function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid>
      <Grid.Column>
        {loading ? (
          <h1> Loading Posts...</h1>
        ) : (
          <Transition.Group>
          { posts && posts.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post}/>
            </Grid.Column>
          ))}
          </Transition.Group>
        )}
      </Grid.Column>
  </Grid>
);
}


export default Home;
