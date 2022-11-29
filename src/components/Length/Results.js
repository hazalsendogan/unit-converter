import React,{useState,useEffect} from 'react'

export default function Results({converter}) {

  const [results, setResults] = useState(0);
  useEffect(() => {
    if(converter) {
        const val = Number(converter.val);
        if (converter.from === "km" && converter.to === "m") {
          setResults(val * 1000);
        } else if (converter.from === "m" && converter.to === "km") {
            setResults(val / 1000); 
        } else if (converter.from === "m" && converter.to === "m") {
            setResults(val); 
        } else if (converter.from === "km" && converter.to === "km") {
            setResults(val); 
        } else if (converter.from === "dm" && converter.to === "m") {
        
            setResults(val / 10);
        } else if (converter.from === "cm" && converter.to === "m") {
        
            setResults(val / 100);
        } else if (converter.from === "mm" && converter.to === "m") {
        
            setResults(val / 1000);
        } else if (converter.from === "m" && converter.to === "dm") {
            setResults(val * 10);
        } else if (converter.from === "m" && converter.to === "cm") {
            setResults(val * 100);
        }  else if (converter.from === "m" && converter.to === "mm") {
            setResults(val * 1000);
        }
        else if (converter.from === "dm" && converter.to === "km") {
        
            setResults(val / 10000);
        } else if (converter.from === "cm" && converter.to === "km") {
        
            setResults(val / (100000));
        } else if (converter.from === "mm" && converter.to === "km") {
        
            setResults(val / (1000000));
        } else if (converter.from === "km" && converter.to === "dm") {
            setResults(val * 10000);
        } else if (converter.from === "km" && converter.to === "cm") {
            setResults(val * 100000);
        }  else if (converter.from === "km" && converter.to === "mm") {
            setResults(val * 1000000);
        } else if (converter.from === "dm" && converter.to === "dm") {
            setResults(val); 
        } else if (converter.from === "cm" && converter.to === "cm") {
            setResults(val); 
        } else if (converter.from === "mm" && converter.to === "mm") {
            setResults(val); 
        } else if (converter.from === "dm" && converter.to === "cm") {
            setResults(val * 10);
        }
        else if (converter.from === "cm" && converter.to === "dm") {
            setResults(val / 10);
        } else if (converter.from === "dm" && converter.to === "mm") {
            setResults(val * 100);
        }
        else if (converter.from === "mm" && converter.to === "dm") {
            setResults(val / 100);
        }
        else if (converter.from === "cm" && converter.to === "mm") {
            setResults(val * 10);
        }
        else if (converter.from === "mm" && converter.to === "cm") {
            setResults(val / 10);
        }
        console.log(converter.val)
    }
  }, [converter]);
  return (
    <div>
        {results}
    </div>
  )
}
