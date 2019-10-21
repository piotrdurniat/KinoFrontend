import React from "react";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarIcon from "@material-ui/icons/Star";
import SnoozeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import LabelIcon from "@material-ui/icons/Label";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { Link } from "react-router-dom";

const items = [
  {
    icon: InboxIcon,
    text: "Inbox",
    link: "/mail/inbox"
  },
  {
    icon: StarIcon,
    text: "Starred",
    link: "/mail/starred"
  },
  {
    icon: SnoozeIcon,
    text: "Snoozed",
    link: "/mail/snoozed"
  },
  {
    icon: LabelImportantIcon,
    text: "Important",
    link: "/mail/important"
  },
  {
    icon: SendIcon,
    text: "Sent",
    link: "/mail/sent"
  },
  {
    icon: DraftsIcon,
    text: "Drafts",
    link: "/mail/drafts"
  },
  {
    icon: LabelIcon,
    text: "Categories",
    link: "/mail/categories"
  }
];

const DrawerLinks = () => {
  return (
      <List>
        {items.map((item, index) => (
          <ListItem button component={Link} to={item.link} key={index}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
  );
};

export default DrawerLinks;
