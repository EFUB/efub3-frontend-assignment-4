import React, { useState } from "react";
import { useCallback } from "react";

const List = ({ id, title, content, image, data, setData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);

  const onDelete = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  const onToggle = useCallback((targetId) => {
    setData((data) =>
      data.map((it) => (it.id === targetId ? { ...it, isDone: true } : it))
    );
  }, []);

  const handleRemove = () => {
    console.log(id);
    if (window.confirm(`${id + 1} 번째 리스트를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
    // 수정된 값들 초기화
  };

  const handleEdit = () => {
    if (window.confirm(`${id + 1} 번째 리스트를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  //완료 됐을 때 함수
  const handleDone = (e) => {
    alert("완료!");
    onToggle(id);
  };

  return (
    <div className="Item">
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>
            {title}
            {content}
            {image}
          </>
        )}
      </div>

      {isEdit ? (
        <>
          {" "}
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}

      <button onClick={handleDone}>완료</button>
    </div>
  );
};

export default React.memo(List);
