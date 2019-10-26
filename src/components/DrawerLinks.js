import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import TheatersIcon from "@material-ui/icons/Theaters";
import EventIcon from "@material-ui/icons/Event";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MovieIcon from "@material-ui/icons/Movie";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { Link } from "react-router-dom";

const items = [
  {
    icon: InfoIcon,
    text: "O kinie",
    link: "o_kinie"
  },
  {
    icon: TheatersIcon,
    text: "Repertuar",
    link: "/repertuar"
  },
  {
    icon: EventIcon,
    text: "Wydarzenia",
    link: "/wydarzenia"
  },
  {
    icon: ForumIcon,
    text: "Forum",
    link: "/forum"
  },
  {
    icon: LocalOfferIcon,
    text: "Promocje",
    link: "/promocje"
  },
  {
    icon: MovieIcon,
    text: "Newsy",
    link: "/newsy"
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
