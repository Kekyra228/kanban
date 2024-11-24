import { Link, useNavigate, useParams } from "react-router-dom";
import { paths } from "../../lib/constsns";
import CalendarContent from "../calendar/Calendar";
import { useEffect, useState } from "react";
import {
  PopBrowse,
  PopBrowseBlock,
  PopBrowseBtn,
  PopBrowseBtnClose,
  PopBrowseBtnDelete,
  PopBrowseBtnEdit,
  PopBrowseBtnGroup,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseTopBlock,
  PopBrowseWrap,
  PopBrowseContentTheme,
  PopBrowseContentThemeTop,
  PopBrowseStatus,
  PopBrowseStatusThemes,
  PopBrowseStatusTheme,
  PopBrowseEditMode,
  PopBrowseEditBtnGroup,
  PopBrowseBtnEditSave,
  PopBrowseBtnEditUndo,
  PopBrowseBtnEditDelete,
  PopBrowseBtnEditClose,
  EditedArea,
  PopBrowseStatusThemeInput,
} from "./DataTasks.styled";
import { deleteTask, editTask } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTasksContext } from "../../contexts/hooks/useTasks";
import { NewCardFormInput } from "../createdTask/CreatedTasks.styled";

function DataTask({ status }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const nav = useNavigate();
  const { tasksList, createNewTask } = useTasksContext();
  const { user } = useUserContext();
  const { id } = useParams();

  const deleteItem = async () => {
    await deleteTask({ id, token: user.token }).then((tasksList) => {
      createNewTask(tasksList.tasks);
      nav(paths.MAIN);
    });
  };

  const [isEdit, setIsEdit] = useState(false);
  const openEditMode = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (tasksList.length) {
      const taksItemCurrent = tasksList.find((task) => task._id === id);
      setEditingTask(taksItemCurrent);
    }
  }, [tasksList]);

  const editItem = async () => {
    const editingTaskData = {
      ...editingTask,
      date: selected,
      id,
      token: user.token,
    };
    await editTask(editingTaskData).then((response) => {
      createNewTask(response.tasks);
    });
    nav(paths.MAIN);
  };

  const [selected, setSelected] = useState("");

  return (
    <PopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {isEdit ? (
                <NewCardFormInput
                  type="text"
                  name="title"
                  value={editingTask.title}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, title: e.target.value })
                  }
                  placeholder="Введите новое название задачи..."
                ></NewCardFormInput>
              ) : (
                <h3>{editingTask?.title}</h3>
              )}

              <PopBrowseContentThemeTop $topic={editingTask?.topic}>
                <p>{editingTask?.topic}</p>
              </PopBrowseContentThemeTop>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <p>Статус</p>
              <PopBrowseStatusThemes>
                {isEdit ? (
                  <>
                    {statusList.map((status) => (
                      <PopBrowseStatusTheme key={status}>
                        {" "}
                        {status}
                        <PopBrowseStatusThemeInput
                          type="radio"
                          name="status"
                          value={status}
                          onChange={(e) =>
                            setEditingTask({
                              ...editingTask,
                              status: e.target.value,
                            })
                          }
                        />
                      </PopBrowseStatusTheme>
                    ))}
                  </>
                ) : (
                  <PopBrowseStatusTheme>
                    {editingTask?.status}
                  </PopBrowseStatusTheme>
                )}
              </PopBrowseStatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                {isEdit ? (
                  <PopBrowseFormBlock>
                    <label htmlFor="textArea01" className="subttl">
                      Отредактируйте описание{" "}
                    </label>
                    <EditedArea
                      type="text"
                      name="description"
                      value={editingTask?.description}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          description: e.target.value,
                        })
                      }
                      placeholder="Введите описание задачи..."
                    ></EditedArea>
                  </PopBrowseFormBlock>
                ) : (
                  <PopBrowseFormBlock>
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <EditedArea
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                    >
                      {editingTask?.description}
                    </EditedArea>
                  </PopBrowseFormBlock>
                )}
              </PopBrowseForm>
              {isEdit ? (
                <CalendarContent
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : (
                <CalendarContent
                  selected={editingTask?.date}
                  setSelected={editingTask?.date}
                />
              )}
            </PopBrowseWrap>
            <PopBrowseContentTheme></PopBrowseContentTheme>

            {isEdit ? (
              <PopBrowseEditMode>
                <PopBrowseEditBtnGroup>
                  <PopBrowseBtnEditSave onClick={editItem}>
                    Сохранить
                  </PopBrowseBtnEditSave>
                  <PopBrowseBtnEditUndo onClick={openEditMode}>
                    Отменить
                  </PopBrowseBtnEditUndo>
                  <PopBrowseBtnEditDelete onClick={deleteItem}>
                    Удалить задачу
                  </PopBrowseBtnEditDelete>
                </PopBrowseEditBtnGroup>
                <PopBrowseBtnEditClose>
                  <Link to={paths.MAIN}>
                    {" "}
                    <p>Закрыть</p>
                  </Link>
                </PopBrowseBtnEditClose>
              </PopBrowseEditMode>
            ) : (
              <>
                <PopBrowseBtn>
                  <PopBrowseBtnGroup>
                    <PopBrowseBtnEdit onClick={openEditMode}>
                      Редактировать задачу
                    </PopBrowseBtnEdit>
                    <PopBrowseBtnDelete onClick={deleteItem}>
                      Удалить задачу
                    </PopBrowseBtnDelete>
                  </PopBrowseBtnGroup>
                  <PopBrowseBtnClose>
                    <Link to={paths.MAIN}>
                      {" "}
                      <p>Закрыть</p>
                    </Link>
                  </PopBrowseBtnClose>
                </PopBrowseBtn>
              </>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}

export default DataTask;
