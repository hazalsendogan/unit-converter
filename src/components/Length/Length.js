import { Container, Grid, GridItem } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import Forms from "./Forms";
import Results from "./Results";


export default function Length() {
  const [converter, setConverter] = useState({val:"",from:"",to:""});
  useEffect(() => {
    console.log(converter)
  }, [converter]);
  return (
    <Container>
      <Forms converter={converter} setConverter={setConverter}/>
      <Results converter={converter}/>
    </Container>
  );
}
