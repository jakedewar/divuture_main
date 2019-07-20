import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const HomepageLayout = ( mobile ) => (
  <>
    <Segment vertical>
      <Image centered rounded size='large' src='https://i.imgur.com/glZdcKQ.jpg' />
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Grid.Column width={8} style={{ textAlign: "center" }}>
          <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile ? '1.0em' : '3em',
            }}
          />
          <Header
            as='h2'
            content='A social platform for creating goals.'
            inverted
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button color="blue" href="/register" size='huge'>Create an Account</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </>
)
export default HomepageLayout
