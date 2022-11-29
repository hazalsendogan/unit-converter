import React,{useState,useEffect} from 'react';
import { Container } from '@chakra-ui/react';
import Forms from './PxtoRem/Forms';

export default function PxRem() {
  const [pixel, setPixel] = useState({base:"16",px:"16"});
  const [rem, setRem] = useState();
  useEffect(() => {
    console.log(pixel)
  }, [pixel]);
  const base = Number(pixel.base);
  const px = Number(pixel.px);
  useEffect(() => {
    setRem(px/base);
  }, [rem,base,px]);
  return (
    <Container>
      <Forms pixel={pixel} setPixel={setPixel}/>
       {rem} rem
    </Container>
  )
}
