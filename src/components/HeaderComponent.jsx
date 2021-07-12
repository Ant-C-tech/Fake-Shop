import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";

export function HeaderComponent() {
  return (
    <Menu attached='top' inverted style={{ padding: "20px" }}>
      <Container>
        <Header as='h1' inverted>
          Fake Shop
        </Header>
      </Container>
    </Menu>
  );
}
