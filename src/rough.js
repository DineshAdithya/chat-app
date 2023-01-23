import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { keys } from "@mui/system";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const name = useRef(null);

  const timeoutFunction = () => {
    setTimeout(() => {
      console.log("count --> ", name.current);
    }, [3000]);
  };

  const refVechiOruFunc = () => {
    name.current.focus();
  };

  const countClickHandler = () => {
    setCount(count + 1);
  };

  const test = useMemo(() => {
    return count * 10;
  }, [search]);

  const countPrintHandler = () => {
    console.log("test --> ", test);
  };

  const getProductData = async () => {
    try {
      const data = await axios.get("https://api.github.com/users");
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>

      <button>search</button>

      <button onClick={countClickHandler}>COUNT</button>
      <h1>{count}</h1>
      <button onClick={refVechiOruFunc}>print Count</button>

      <input
        ref={name}
        type="text"
        placeholder="name"
        onChange={(e) => {
          name.current = e.target.value;
        }}
      ></input>
      {/* {product.filter(item=>{
    if(search=""){
      return item;
    }
    else if(item.login.includes(search)){
      return item;
    }
  })} */}

      {product[0] && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(product[0]).map((k) => (
                  <TableCell>{k}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {product
                .filter((item) => {
                  if (search === "") {
                    return true;
                  } else if (
                    Object.values(item).filter((k) => {
                      return `${k}`.includes(search);
                    }).length
                  ) {
                    return true;
                  }
                })
                .map((row) => (
                  <TableRow>
                    {Object.keys(row).map((key) => (
                      <TableCell>{row[key]}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default App;
