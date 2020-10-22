// 사용자가 무언가를 하기 전에/이벤트 실행 전에 확인
export const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };