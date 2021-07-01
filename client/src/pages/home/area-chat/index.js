import React from 'react';
import { Box, Button, ListItem, ListItemAvatar, ListItemText, Avatar, Badge, TextField } from '@material-ui/core';
import { Image, CallOutlined, VideocamOutlined, EmojiEmotionsOutlined, SendOutlined, AttachmentOutlined } from '@material-ui/icons';
import useStyles from './styles';
import MessageItem from '../../../components/message-item';

const AreaChat = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.areaChat}
    >
      <div className={classes.chatHeader}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Badge
                overlap="circle"
                color="secondary"
                variant="dot"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                classes={{
                  badge: classes.badge
                }}
              >
                <Image />
              </Badge>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Do Viet Tri" secondary="5 minutes ago" />
        </ListItem>
        <div className={classes.grow} />
        <Button
          variant="outlined"
          size="small"
        >
          <CallOutlined color="primary" />
        </Button>
        <Button
          variant="outlined"
          size="small"
        >
          <VideocamOutlined color="action" />
        </Button>
      </div>

      <div className={classes.chatBody}>
        <Box className={classes.messageList}>
          <MessageItem />
        </Box>
      </div>

      <div className={classes.chatFooter}>
        <Button
          variant="contained"
          disableElevation
        >
          <EmojiEmotionsOutlined />
        </Button>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Write a message..."
        />
        <Button
          variant="contained"
          size="small"
          disableElevation
        >
          <AttachmentOutlined />
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="primary"
        >
          <SendOutlined />
        </Button>
      </div>
    </Box>
  )
}

export default AreaChat;
