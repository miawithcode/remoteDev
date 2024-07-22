> What I learned from this project

1. 防抖的原理是通过**设置一个延迟时间，确保在这段时间内只有一次更新操作**。在这段时间内，如果有新的输入发生，之前的定时器会被清除并重新计时。因此，只要输入是连续的，定时器就不会触发。只有在用户停止输入超过延迟时间后，才会更新防抖后的值。这样可以避免在短时间内频繁触发函数调用。

   ```ts
   useEffect(() => {
     const timerId = setTimeout(() => {
       setDebouncedValue(value);
     }, delay);

     return () => {
       clearTimeout(timerId);
     };
   }, [value, delay]);
   ```

2. Ideally, 我们只希望运行从 LocalStorage 获取数据的代码一次，而不是每一次渲染时都运行一次。在 `useState` 中提供一个函数作为初始值，这个函数只会在组件初次渲染的时候运行一次。
    ```tsx
    const [bookmarkIds, setBookmarkIds] = useState<number[]>(() =>
      JSON.parse(localStorage.getItem("bookmarkIds") || '[]'),
    );
    ```

3. `JSON.parse()` 只接受 `string` 类型的参数，但如果 `String([])` 会导致 `''` 空字符，但这里不能传入空字符，要想传入 `[]` 空数组的 `string` 形式，应该用 `JSON.stringify([])`

4. 在 Custom Hook 中的 `useState` 中用了 Generic Type，但如果传入的是初始值是空数组，只会被推断成 `never[]` 类型，应该怎么明确是哪种类型的数组？
    ```tsx
    // useCustomHook.ts
    const useCusomHook = <T>(
      initialValue: T,
    ): [T, React.Dispatch<React.SetStateAction<T>>] => {
      const [value, setValue] = useState<T>(initialValue);
      // ...
      return [value, setValue] as const;
    };

    // use this custom hook
    const [value, setValue] = useCustomHook<number[]>([])
    ```