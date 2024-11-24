import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../lib/constsns"
import { Wrapper } from "../Common.styled"
import { ContainerSignin, FormGroup, FormLogin, LoginBtn, Modal, ModalBlock, ModalInput, ModalTtl } from "./Login.styled"
import { logon } from "../../api"
import { useState } from "react"
import { useUserContext } from "../../contexts/hooks/useUser"

function Login() {

    const {createUser} = useUserContext()

    const [showError, setShowError] = useState(null)

	const nav = useNavigate()

    const [login, setUserLogin] = useState("")
    const [password, setPassword] = useState("")
   
    const loginUser = async () => {

        await logon({ login, password}).then((responseData)=>{createUser(responseData.user)
        console.log("вход")
        })
        .catch((error)=>{
            if (error.message==="Неправильный логин или пароль") {
                alert(error.message)
            }
            else if (error.message==="Что-то сломалось") {
                alert(error.message)
            }
        })
        nav(paths.MAIN)
      }


    return (
        <>
       <Wrapper>
        <ContainerSignin>
            <Modal>
                <ModalBlock>
                    <ModalTtl>
                        <h2>Вход</h2>
                    </ModalTtl>
					<FormLogin>
                        <ModalInput 
                            type="text"
                            name="login" 
                            id="formlogin"
                            placeholder="Эл. почта"
                            value={login}
                            onChange={(e)=>setUserLogin(e.target.value)}>
                        </ModalInput>

						<ModalInput 
                            type="password"
                            name="password" 
                            id="formpassword"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}>
                        </ModalInput>

                        <LoginBtn type="button" onClick={loginUser}>
                           <p>Войти</p>
                        </LoginBtn>
                       
						<FormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={paths.REGISTER}><p>Регистрируйся здесь</p></Link>
						</FormGroup>
                    </FormLogin>
                </ModalBlock>
            </Modal>
        </ContainerSignin>
       </Wrapper>
         
        </>
    )
}
export default Login