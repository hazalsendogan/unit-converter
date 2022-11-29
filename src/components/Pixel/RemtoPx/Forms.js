import React, { useState, useEffect } from "react";
import {
  Input,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

export default function Forms({ rems, setRems }) {
  const [forms, setForms] = useState({
    base: "16",
    rem: "1",
  });
  useEffect(() => {

  }, [rems]);
  const handleChange = (e) => {
    setForms({...forms,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>  {
    e.preventDefault();
    console.log(forms);
    setRems(forms);
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
          <label htmlFor="rem">Rem</label>
          <Input name="rem" value={forms.rem} onChange={handleChange}>
            
          </Input>
        </GridItem>
        <GridItem w="100%">
          <Button type="submit" colorScheme="pink">Convert</Button>
        </GridItem>
      </Grid>
    </form>
  );
}
