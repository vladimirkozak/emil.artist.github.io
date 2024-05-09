import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ProductDetail.scss";
import { useState } from "react";
import Btn from "@components/UI/Btn/Btn";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@components/containers/Container/Container";
import useFetch from "@hooks/useFetch";

const ProductDetail = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(data?.attributes?.description);

  const { t } = useTranslation();

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const onClickHandler = () => {};

  return (
    <Container>
      {loading ? (
        "loading"
      ) : (
        <section className="product">
          <div className="product-container">
            <div className="left">
              {/* <div className="images">
                <img
                  src={DUMMY_CATALOG[0].img}
                  onClick={() => setSelectedImg(0)}
                  alt="detail_img"
                />
                <img
                  src={DUMMY_CATALOG[1].img}
                  onClick={() => setSelectedImg(1)}
                  alt="detail_img"
                />
              </div> */}
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.image?.data?.attributes?.url
                  }
                  alt="main_detail_img"
                />
              </div>
            </div>
            <div className="right">
              <h5 className="title">{data?.attributes?.title}</h5>
              <span>{data?.attributes?.price}</span>
              <div className="desc">
                <p>{data?.attributes?.description}</p>
              </div>
              <div className="props">
                <div className="select">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        {t("catalog.size")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="Size"
                        onChange={handleChange}
                      >
                        <MenuItem value={"S"}>S</MenuItem>
                        <MenuItem value={"M"}>M</MenuItem>
                        <MenuItem value={"L"}>L</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="quantity">
                  <Stack direction="row" spacing={2}>
                    <Button
                      className="quantity__btn"
                      variant="contained"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </Button>
                    <span className="quantity__count">{quantity}</span>
                    <Button
                      className="quantity__btn"
                      variant="contained"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </Stack>
                </div>
                <div className="add-to-cart">
                  <Btn
                    title={t("cart.addToCart")}
                    onClick={onClickHandler}
                    color={"black"}
                    background={"#ffb301"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Container>
  );
};

export default ProductDetail;
