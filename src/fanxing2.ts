

type A<T> = {
  a: T;
}

var a: A = {
  a: 123
}

function useCallback<T extends (...args: any[]) => any>(callback: T): T{
  return callback;
}

var b = useCallback(function() {})

export {};