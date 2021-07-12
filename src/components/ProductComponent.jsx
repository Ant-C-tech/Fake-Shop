import React from "react";
import { Link } from 'react-router-dom';
import { Card, Image } from "semantic-ui-react";

export function ProductComponent({ props }) {
  const { category, id, image, price, title } = props;

  return (
    <Card as={Link} to={`/product/${id}`}>
        <Image
          src={image}
          alt={title}
          style={{ height: "200px", padding: "10px", background: "#fff" }}
          centered
        />
        <Card.Content style={{ maxHeight: "200px", overflow: "hidden" }}>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{category}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>$ {price}</Card.Meta>
        </Card.Content>
    </Card>
  );
}
