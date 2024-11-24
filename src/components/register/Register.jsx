import React, { useState } from 'react'
import { Wrapper } from '../Common.styled'
import { ContainerSignin, FormLogin, Modal, ButtonLogin } from './Register.styled'
import { ModalBlock, ModalTtl, ModalInput, FormGroup } from '../auth/Login.styled'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../lib/constsns'
import { authorize } from '../../api'
import { useUserContext } from '../../contexts/hooks/useUser'

const Register = () => {

const {createUser} = useUserContext()

const navigate = useNavigate()
const [name, setName] = useState("")
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")

const [showError, setShowError] = useState(null)

const handleSubmit = async (event) => {
	event.preventDefault();
  }

  const regUser = async () => {
	await authorize({name,login,password}).then((responseData)=>{createUser(responseData.user)
		.catch((error)=>{
            if (error.message==="Пользователь уже существует") {
                alert(error.message)
            }
            else if (error.message==="Что-то сломалось") {
                alert(error.message)
            }
        })
	navigate(paths.LOGIN)
	})

  }

  return (
      <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtl>
						<h2>Регистрация</h2>
					</ModalTtl>
					<FormLogin onSubmit={handleSubmit}>
                	<ModalInput 
						type="text" 
						name="first-name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Имя">
						
					</ModalInput>
						<ModalInput 
						type="text" 
						name="login"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						placeholder="Эл. почта">

					</ModalInput>
					<ModalInput 
						type="password" 
						name="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Пароль">

					</ModalInput>
						<ButtonLogin onClick={regUser}>
							<Link to={paths.LOGIN}><p>Зарегистрироваться</p></Link>
							</ButtonLogin>
							{showError && (<p style={{color:"red"}}> Ошибочка...</p>)}
						<FormGroup>
							<p>Уже есть аккаунт? <Link to={paths.LOGIN}><p>Войдите здесь</p></Link></p>
						</FormGroup>
                    </FormLogin>
				</ModalBlock>
			</Modal>
        </ContainerSignin>
    </Wrapper>
  )
}

export default Register
