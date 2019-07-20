import React, { useContext, setState } from 'react';
import { Button, Card, Image, Label, Icon, Progress, Item, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import ProgressBar from './ProgressBar';

function PostCard({
  post: { title, body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card className="card" fluid>
      <Card.Content>
      <div>
        <Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' avatar />
        <Item.Meta id="metaData" as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Item.Meta>
        <Label id="goalCategoryTag" circular color="grey" empty key="#" />
        <Card.Header>{username}</Card.Header>
        <Card.Header>{title}</Card.Header>
      </div>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <LikeButton user={user} post={{ id, likeCount, likes }} />
      <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
        <Button color='blue' basic>
          <Icon name='comment' />
        </Button>
        <Label basic color='blue' pointing='left'>
          {commentCount}
        </Label>
      </Button>
      {user && user.username === username && <DeleteButton postId={id} />}
      <Button floated="right">
        <Icon name='plus' style={{ margin: 0 }} />
      </Button>
      </Card.Content>
      <Card.Content>
        <ProgressBar />
      </Card.Content>
    </Card>
  )
}

export default PostCard;
