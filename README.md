# 3 ways of closing popover on click outside

1. using id selector - easiest, but not react way
2. using useRef - typically
3. using a custom hook

## Method 1: using id selector

> 给整个文档添加点击监听事件，点击事件发生后，关闭 popover。再用 `e.target.closet` 和 id 选择器排除 `#bookmark-btn` 元素和 `#bookmark-popover` 元素，实现 Close popover on click outside。

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

## Method 2: using useRef

> 给整个文档添加点击监听事件，点击事件发生后，关闭 popover。再用 `useRef` 排除 bookmark button 按钮元素和 bookmark popover元素，实现 Close popover on click outside。

```tsx
const buttonRef = useRef<HTMLButtonElement>(null);
const popoverRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClick = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      !buttonRef.current?.contains(e.target) &&
      !popoverRef.current?.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClick);

  return () => document.removeEventListener("click", handleClick);
}, []);
```

- 注意怎么给组件传递 `ref`

  ```tsx
  import { forwardRef } from "react";

  const BookmarkPopover = forwardRef<HTMLDivElement>(function (_, ref) {
    return <div ref={ref}>{/*...*/}</div>;
  });
  export default BookmarkPopover;

  // How to type props if we are passing any?
  type BookmarkPopoverProps = {
    isOpen: boolean;
  };

  const BookmarkPopover = forwardRef<HTMLDivElement, BookmarkPopoverProps>(
    function ({ isOpen }, ref) {
      return <div ref={ref}>{/*...*/}</div>;
    },
  );
  export default BookmarkPopover;
  ```

## Method 3: using custom hook

```tsx
// BookmarkButton.tsx
const buttonRef = useRef<HTMLButtonElement>(null);
const popoverRef = useRef<HTMLDivElement>(null);
useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

// useOnClickOutside.ts
import { useEffect } from "react";

const useOnClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  handler: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        refs.every((ref) => !ref.current?.contains(e.target as Node))
      ) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [refs, handler]);
};
export default useOnClickOutside;
```
