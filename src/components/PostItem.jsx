import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostItem = ({ post }) => {
  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    marginBottom: '15px',
  },
};

export default PostItem;
