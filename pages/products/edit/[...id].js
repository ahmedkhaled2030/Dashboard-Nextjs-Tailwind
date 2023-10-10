import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditProductPage = () => {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true)
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
      console.log(productInfo);
      setIsLoading(false)
    });
  }, [id]);
  return (
    <Layout>
      <h1>Edit product</h1>
      {isLoading && (
        <Spinner fullWidth={true} />
      )}
      {productInfo && (
        <ProductForm {...productInfo} />
      )}
    </Layout>
  );
};

export default EditProductPage;
