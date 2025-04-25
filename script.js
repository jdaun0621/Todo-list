/**
 * 기능 
 * 1. 추가
 * 입력 창 공백 체크
 * 리스트의 맨 하단에 입력한 내용이 추가
 * 
 * 2,완료 및 삭제
 * 리스트에서 글씨를 클릭하면 글씨가 흐려지고 취소선이 생김
 * x버튼 클릭하면 경고창 출력 예 클릭했을시 리스트에서 삭제
 * 
 * 추가기능: 입력 후 입력한 창의 값 비워두고 포커스
 */

document.addEventListener("DOMContentLoaded", () => {
  const todoText = document.querySelector(".todoText"); // 입력창
  const addBtn = document.querySelector(".addBtn"); // 추가 버튼
  const todoList = document.querySelector(".todoList"); // ul

  const initialInput = () => {
    todoText.value = "";
    todoText.focus();
  };

  const deleteList = (liElement) => {
    const taskSpan = liElement.querySelector(".task");
    const trashSpan = liElement.querySelector(".trash");

    // 완료 기능 (on 클래스 토글 => 취소선, 글씨 흐리게)
    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("on");
    });

    // 삭제 기능
    trashSpan.addEventListener("click", () => {
      let answer = confirm("정말 삭제하겠습니까?");
      if (answer) todoList.removeChild(liElement);
    });
  };

  const makeList = (text) => {
    // text: 입력창에 입력한 텍스트 
    const newLi = document.createElement("li");
    const newTaskSpan = document.createElement("span"); // 할 일 
    const newTrashSpan = document.createElement("span"); // 삭제 버튼
    newLi.classList.add("todo");

    newTaskSpan.textContent = text; // 입력한 내용을 newTaskSpan에 지정
    newTaskSpan.classList.add("task");
    newLi.appendChild(newTaskSpan); // li에 첫 번째 span 삽입

    newTrashSpan.classList.add("trash");
    newTrashSpan.textContent = "x";
    newLi.appendChild(newTrashSpan); // li에 두 번째 span(x) 삽입

    deleteList(newLi);
    todoList.appendChild(newLi); // ul에 생성한 li를 삽입
  };

  // 기존 리스트 항목에 이벤트 추가
  document.querySelectorAll(".todo").forEach((el) => deleteList(el));

  // 추가 버튼 클릭 이벤트
  addBtn.addEventListener("click", () => {
    // 입력 창 공백 체크
    if (!todoText.value.trim()) {
      alert("빈 문자열은 입력할 수 없음");
    } else {
      // 리스트 맨 하단에 입력된 내용 추가
      makeList(todoText.value);
    }
    initialInput();
  });

  initialInput();
});













