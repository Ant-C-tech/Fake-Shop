import React from "react";
import { Dimmer, Loader} from "semantic-ui-react";

export const LoaderComponent = () => (
    <Dimmer active inverted>
      <Loader size='large'>Loading</Loader>
    </Dimmer>
);
