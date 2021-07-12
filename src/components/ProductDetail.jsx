import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import {
  Container,
  Segment,
  Grid,
  Image,
  Header,
  Label,
  Divider,
  Icon,
  Button,
} from "semantic-ui-react";

import {
  selectedProduct,
  removeSelectedProduct,
  toggleLoading,
} from "../redux/actions/productActions";
import { LoaderComponent } from "./LoaderComponent";

export function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const isLoading = useSelector((state) => state.isLoading.loading);

  const { category, description, image, price, title } = product;

  const fetchProduct = async () => {
    dispatch(toggleLoading());
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(toggleLoading());
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProduct();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <Container>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Segment style={{ marginTop: "20px" }}>
          <Grid relaxed='very'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={image} centered />
              </Grid.Column>
              <Grid.Column>
                <Header as='h2' attached='top'>
                  {title}
                </Header>
                <Segment attached textAlign='left'>
                  <Label as='a' color='teal' tag>
                    $ {price}
                  </Label>
                  <Divider horizontal style={{ marginTop: "50px" }}>
                    <Header as='h4' color='teal'>
                      <Icon name='folder open' />
                      Category
                    </Header>
                  </Divider>
                  <Segment as='h3'>{category}</Segment>
                  <Divider horizontal style={{ marginTop: "50px" }}>
                    <Header as='h4' color='teal'>
                      <Icon name='tag' />
                      Description
                    </Header>
                  </Divider>
                  <Segment as='h3'>{description}</Segment>
                </Segment>
                <Button animated='vertical' attached='bottom' negative>
                  <Button.Content visible>Add to Cart</Button.Content>
                  <Button.Content hidden>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider vertical>And</Divider>
        </Segment>
      )}
    </Container>
  );
}
