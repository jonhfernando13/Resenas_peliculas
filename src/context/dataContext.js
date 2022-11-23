import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const url = "http://localhost:3000/";


const DataContext = createContext();

const Data = ({ children }) => {
  const [ user, setUser ] = useState(undefined);
  const [ pelis, setPelis ] = useState(undefined);
  const [ resenas, setResenas ] = useState(undefined);
  const nav = useNavigate();

  const setUsers = async () => {
    const block = await fetch(url+'Usuarios');
    const info = await block.json();
    if (info === []) {
      setUser(undefined);
    } else {
      setUser(info);
    }
  }

  const addUsers = async (formData) => {
    await axios
      .post(url+'Usuarioscrear', formData, {
        headers: {
          "content-type": "application/json; charset=UTF-8;",
          "Accept": "Token",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log("sucesss");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const borrar = async (dato) => {
    await axios.delete(url+'Usuariosborrar',{ data: { 'correo': dato } },{
      headers: {
        "content-type": "application/json; charset=UTF-8;",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        console.log("Usuarios eliminado");  
    }
    })
  }

  const data = {
    user,
    setUsers,
    addUsers,
    borrar,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { Data };
export default DataContext;
