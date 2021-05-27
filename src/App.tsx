import { useCallback, useState } from "react";
import Input from "./components/Input";
 
interface Usuario {
  cep: string;
  price: number;
  cpf: string;
  cnpj: string;
  tel: string;
}

const App = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
   setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value
      });
    }, [usuario]);


  return (  
    <div>
      <Input name="cep" mask="cep" onChange={handleChange}/>
      <Input name="currency" mask="currency" prefix='R$' onChange={handleChange}/>
      <Input name="cpf" mask="cpf" onChange={handleChange}/>
      <Input name="cnpj" mask="cnpj" onChange={handleChange}/>
      <Input name="tel" mask="tel" onChange={handleChange}/>


      
      <button onClick={() => console.log(usuario) }>Salvar</button>
    </div>
  );
}

export default App;
