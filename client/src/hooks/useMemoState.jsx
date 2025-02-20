import { useState, useMemo, useCallback } from "react";
import isEqual from "lodash.isequal";

export const useMemoState = (initialState) => {
  const [state, setState] = useState(initialState);

  const memoState = useMemo(() => state, [state]);

  const memoSetState = useCallback((getState) => {
    // 타입 체크
    const isFunction = typeof getState === "function";

    setState((prev) => {
      // 함수일 경우 다르게 처리
      const checkState = isFunction ? getState(prev) : getState;

      // 이전 상태와 새 상태가 같을 경우 이전 상태로 설정
      const getNewState = isEqual(prev, checkState) ? prev : checkState;

      return getNewState;
    });
  }, []);

  const memoSet = useMemo(
    () => [memoState, memoSetState],
    [memoState, memoSetState]
  );

  return memoSet;
};
