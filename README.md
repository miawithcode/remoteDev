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
