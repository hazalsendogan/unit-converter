import React, { useState, useEffect } from "react";
import { Input, Grid, GridItem, Button, Select } from "@chakra-ui/react";

export default function Forms({ converter,setConverter }) {
  const [length, setLength] = useState("");
  const [units, setUnits] = useState({from:"m",to:"km"});

  useEffect(() => {
    setLength();
    setUnits()
    setConverter()
  }, [converter]);
  const handleChange = (e) => {
    setLength(e.target.value);
  }
  const handleSelect = (e) => {
    setUnits({...units, [e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setConverter({val:e.target[0].value,from:e.target[1].value,to:e.target[2].value})
    console.log(e.target[0].value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={2}>
          <label htmlFor="length">Length</label>
          <Input variant="flushed" name="length" value={length} onChange={handleChange}></Input>
        </GridItem>
        <GridItem w="100%">
          <Select placeholder="From" name="from" onChange={handleSelect}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="dm">Decimeter</option>
            <option value="cm">Cantimeter</option>
            <option value="mm">Milimeter</option>
          </Select>
        </GridItem>
        <GridItem w="100%">
          <Select placeholder="To" name="to"  onChange={handleSelect}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="dm">Decimeter</option>
            <option value="cm">Cantimeter</option>
            <option value="mm">Milimeter</option>
          </Select>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Button type="submit" colorScheme="teal" width="100%">
            Convert
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}
