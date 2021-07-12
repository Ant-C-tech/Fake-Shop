import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Container, Card } from "semantic-ui-react";

import { ProductComponent } from "./ProductComponent";
import { LoaderComponent } from "./LoaderComponent";
import { setProducts, toggleLoading } from "../redux/actions/productActions";

export function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const isLoading = useSelector((state) => state.isLoading.loading);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(toggleLoading());
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(toggleLoading());
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Card.Group
        itemsPerRow={4}
        stackable={true}
        doubling={true}
        style={{ paddingTop: "20px" }}
      >
        {isLoading ? (
          <LoaderComponent />
        ) : (
          products.map((product) => {
            return <ProductComponent key={product.id} props={product} />;
          })
        )}
      </Card.Group>
    </Container>
  );
}
