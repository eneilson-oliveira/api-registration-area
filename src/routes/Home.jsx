

import "./Register.css"
import { useForm } from 'react-hook-form';
const Home = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const onSubmit = (e) => {
    console.log(e)
  }
  const checkCep = (e) => {

    const cep = e.target.value.replace(/\D/g, '');

    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/ `)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setFocus('addressNumber')
      });
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <h2 className="h2">Cadastro de Cursos</h2>
      <div className="form-left-full">
        <label>
          <input type="text" {...register("id")} placeholder='ID' />
        </label>
      </div>
      <div className="form-left-todo">
        <label>
          <input type="text" {...register("nome")} placeholder='Nome' />
        </label>
      </div>
      <div className="form-btn" >
        <button type="reset">Cancelar</button>
        <button type="submit" >Gravar</button>

      </div>
      </form >
      )
}
     
     
 export default Home