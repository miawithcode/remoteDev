# 3 ways of closing popover on click outside

## Method 1: using id selector

> 给整个文档添加点击监听事件，点击事件发生后，关闭 popover。再排除 `#bookmark-button` 元素和 `#bookmark-popover` 元素，实现 Close popover on click outside。

```tsx
useEffect(() => {
  const handleClick = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      !e.target.closest("#bookmark-btn") &&
      !e.target.closest("#bookmark-popover")
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClick);

  return () => document.removeEventListener("click", handleClick);
}, []);
```

- `e.target.closest` - 返回触发事件元素的最近的符合该选择器的祖先元素（包括自身），如果没有符合的元素，返回 `null`。
- `e.target instanceof HTMLElement` - 必须确保 `e.target` 是一个 HTMLElement 类型的实例才能使用 `closest` 方法。
