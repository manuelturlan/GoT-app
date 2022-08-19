import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./Loading/Loading";
import CharacterCard from "./CharacterCard/CharacterCard";

const HouseDetail = ({ house }) => {
  const [theHouse, setHouse] = useState({});
  const { houseId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setHouse((prevState) => {
        return {
          ...prevState,
          houseDetail: house?.filter((h) => h.id === Number(houseId)),
        };
      });
    }, 500);
  }, [house, houseId]);

  if (house.length === 0) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Vuelve al menú principal para seleccionar una house y acceder a sus{" "}
          <strong>detalles.</strong>
        </Alert>
      </Stack>
    );
  }

  if (!theHouse.houseDetail) {
    return (
      <>    
        <h1>Cargando...</h1>
        <Loading></Loading>
      </>
    );
  }
  return (
    <CssBaseline>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
          <h1>Detalles de la casa</h1>
          <p>{theHouse.houseDetail[0].name}</p>
          <p>{theHouse.houseDetail[0].region}</p>
          <p>{theHouse.houseDetail[0].words}</p>
          <h3>Characters</h3>
          {theHouse.houseDetail[0].characters?.map((ch) => {
            return (
              <CharacterCard
                fullName={ch.fullName}
                title={ch.title}
                family={ch.family}
                key={ch.id}
                id={ch.id}
              ></CharacterCard>
            );
          })}
        </Box>
      </Container>
    </CssBaseline>
  );
};

function mapStateToProps(state) {
  return {
    house: state.houses,
  };
}

export default connect(mapStateToProps, null)(HouseDetail);
