import { Container } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react'
import Forms from './RemtoPx/Forms';

export default function RemPx() {
  const [rems, setRems] = useState({
    base: "16",
    rem: "1",
  });
  useEffect(() => {
    console.log(rems)
  }, [rems]);
  const [pixel, setPixel] = useState();
  const base = Number(rems.base);
  const remVal = Number(rems.rem);
  useEffect(() => {
    setPixel(base * remVal)
  }, [pixel,remVal,base]);
  return (
    <Container>
      <Forms rems={rems} setRems={setRems} />
      {pixel} pixel
    </Container>
  )
}
