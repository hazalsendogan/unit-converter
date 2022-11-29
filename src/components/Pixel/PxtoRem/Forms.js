import React, { useState, useEffect } from "react";
import {
  Input,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

export default function Forms({ pixel, setPixel }) {
  const [forms, setForms] = useState({
    base: "16",
    px: "16",
  });
  useEffect(() => {

  }, [pixel]);
  const handleChange = (e) => {
    setForms({...forms,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>  {
    e.preventDefault();
    console.log(forms);
    setPixel(forms);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={2}>
          <label htmlFor="base">Default Px Size</label>
          <Input name="base" value={forms.base} onChange={handleChange}>
       
          </Input>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <label htmlFor="px">Px</label>
          <Input name="px" value={forms.px} onChange={handleChange}>
            
          </Input>
        </GridItem>
        <GridItem w="100%">
          <Button type="submit" colorScheme="pink">Convert</Button>
        </GridItem>
      </Grid>
    </form>
  );
}
