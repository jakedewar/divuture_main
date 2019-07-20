import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from 'react-router-dom';
import {
  Grid,
  Transition,
  Container,
  Card,
  Image,
  Icon,
  Message,
  Label,
  Statistic,
  Divider,
  Button,
  Menu
} from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import ProfileTable from "../components/ProfileTable";
import GoalSearchMenu from "../components/GoalSearchMenu";
import { FETCH_POSTS_QUERY } from "../util/graphql";


function Profile() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(FETCH_POSTS_QUERY);

  return (
  <>
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{user.username}</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                {user.username} is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Card.Description>
                    <Statistic size="mini" floated="right">
                      <Statistic.Label>Score:</Statistic.Label>
                      <Statistic.Value>40,509</Statistic.Value>
                    </Statistic>
                  </Card.Description>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Button icon="pie graph" size='massive' />
                </Grid.Column>
              </Grid>

              <Divider vertical>Or</Divider>
              </Card.Content>
            </Card>

            <Card fluid>
              <Card.Content>
                <Card.Header content="Jake Smith" />
                <Card.Meta content="Musicians" />
                <Card.Description content="Jake is a drummer living in New York." />
              </Card.Content>
            </Card>

            <Card fluid>
              <Card.Content>
                <Card.Header content="Jake Smith" />
                <Card.Meta content="Musicians" />
                <Card.Description content="Jake is a drummer living in New York." />
              </Card.Content>
            </Card>

            <Button as={Link} to="/goals" size="huge" color="blue" style={{ margin: "auto", marginTop: 17 }}>Create a Goal</Button>

          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <ProfileTable />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <h1 style={{ color: 'white' }} >{user.username + "'s Goals:"}</h1>
    <GoalSearchMenu />
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
  </>
  );
}

export default Profile;
