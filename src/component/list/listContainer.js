import React from "react";

import { List, Item } from "./list.js";
import Heading from "./../heading.js";
import Image from "./../image.js";

const ListItem = ({ data }) => (
  <Item>
    <Image src={data.image} alt={data.name} />
    <Heading variant="glass" component="h4" children={data.name} />
  </Item>
);

const ListContainer = ({ data }) => (
  <List>
    {data.map((item, idx) => (
      <ListItem key={idx} data={item}/>
    ))}
  </List>
);

export default ListContainer;
