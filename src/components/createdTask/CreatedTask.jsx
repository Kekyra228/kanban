import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/constsns";
import CalendarContent from "../calendar/Calendar";
import {
  NewCard,
  NewCardBlock,
  NewCardContainer,
  NewCardContent,
  NewCardClose,
  NewCardWrap,
  NewCardForm,
  NewCardFormBlock,
  NewCardFormTitle,
  NewCardFormInput,
  NewCardFormTextArea,
  CreateNewBtn,
  NewCardCategoris,
  NewCardCategorisThemes,
  NewCardCategorisTheme,
} from "./CreatedTasks.styled";
import { useState } from "react";
import { addTaskApi } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTasksContext } from "../../contexts/hooks/useTasks";

export function CreatedTask() {
  const nav = useNavigate();
  const { user } = useUserContext();
  const { createNewTask } = useTasksContext();
  const [selected, setSelected] = useState("");

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const [showError, setShowError] = useState(null);

  const createTask = async (event) => {
    event.preventDefault();
    const tasksData = { ...newTask, date: selected, token: user?.token };
    addTaskApi(tasksData)
      .then((responseData) => {
        console.log(responseData.tasks);
        createNewTask(responseData.tasks);
        nav(paths.MAIN);
        console.log("задача отправлена");
      })
      .catch((err) => {
        if (!newTask.date || !newTask.description || !newTask.title) {
          setShowError(err.message);
          nav(paths.CREATE);
        } else if (!newTask.date || !newTask.topic) {
          setShowError(err.message);
          nav(paths.CREATE);
        }
      });
  };

  return (
    <NewCard>
      <NewCardContainer>
        <NewCardBlock>
          <NewCardContent>
            <h3>Создание задачи 🖊</h3>
            <NewCardClose>
              <Link to={paths.MAIN}>ЗАКРЫТЬ</Link>
            </NewCardClose>
            <NewCardWrap>
              <NewCardForm action="#">
                <NewCardFormBlock>
                  <NewCardFormTitle>Название задачи</NewCardFormTitle>
                  <NewCardFormInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    placeholder="Введите название задачи..."
                  ></NewCardFormInput>
                </NewCardFormBlock>
                <NewCardFormBlock>
                  <NewCardFormTitle>Описание задачи</NewCardFormTitle>
                  <NewCardFormTextArea
                    type="text"
                    name="description"
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."
                  ></NewCardFormTextArea>
                </NewCardFormBlock>
              </NewCardForm>

              <CalendarContent selected={selected} setSelected={setSelected} />
            </NewCardWrap>
            <NewCardCategoris>
              <p>Категория</p>
              <NewCardCategorisThemes>
                <NewCardCategorisTheme $topic="Research">
                  Research
                  <input
                    type="radio"
                    name="topic"
                    value="Research"
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                  />
                </NewCardCategorisTheme>
                <NewCardCategorisTheme $topic="Copywriting">
                  Copywriting
                  <input
                    type="radio"
                    name="topic"
                    value="Copywriting"
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                  />
                </NewCardCategorisTheme>
                <NewCardCategorisTheme $topic="Web Design">
                  Web Design
                  <input
                    type="radio"
                    name="topic"
                    value="Web Design"
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                  />
                </NewCardCategorisTheme>
              </NewCardCategorisThemes>
            </NewCardCategoris>
            {showError && <p style={{ color: "red" }}>Зполните все поля!</p>}
            <CreateNewBtn onClick={createTask}>Создать задачу</CreateNewBtn>
          </NewCardContent>
        </NewCardBlock>
      </NewCardContainer>
    </NewCard>
  );
}
export default CreatedTask;
