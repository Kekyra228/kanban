import { useEffect, useState } from "react";
import Columns from "./Columns";
import { MainContainer, MainBlockWithContent, MainContent } from "./Main.styled";
import { Container } from "../Common.styled";
import Header from "../header/Header";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTasksContext } from "../../contexts/hooks/useTasks";
import { getTodoes } from "../../api";




const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];


function MainBlock({theme, setTheme}) {

const {user} = useUserContext()
const {tasksList, createNewTask} = useTasksContext()
const [isLoading, setIsLoading] = useState(true)

const [showError, setShowError] = useState(null)

useEffect(()=>{
  getTodoes({ token: user.token }).then((tasksList)=>{createNewTask(tasksList.tasks)
  setIsLoading(false)})

  .catch((error)=>{
	setShowError(error.message)
	setIsLoading(false)
  })
  },[]) 


	return (

		<MainContainer>
			<Header />
			<Container>
			<MainBlockWithContent>
			{showError && (<p style={{color:"red"}}> Ошибочка...</p>)}
					<MainContent>
						{isLoading ? "Данные загружаются" : <>
							{statusList.map((status, index) =>
								<Columns status={status} key={index}
									 cardList={tasksList.filter((task) => task.status === status)}
								/>
							)
							}</>

						}
					</MainContent>
				</MainBlockWithContent>
			</Container>
		</MainContainer>
	)
}
export default MainBlock