# Tổng quan về Unit Test

- **What**:
- **Why**:
- **When**:
- **Who**:

Doc: [https://jestjs.io/](https://jestjs.io/)

```js
// Chạy đầu tiên trước tất cả các test - Chạy đúng 1 lần
beforeAll(() => console.log("1 - beforeAll"));
// Chạy sau tất cả khi các test hoàn thành
afterAll(() => console.log("1 - afterAll"));

// Trước khi bắt đầu 1 test case
beforeEach(() => console.log("1 - beforeEach"));
// Sau khi thực hiện xong 1 test case
afterEach(() => console.log("1 - afterEach"));

// Định nghĩa 1 test case
test("", () => console.log("1 - test"));

// Gom nhóm các test case về chung 1 nhóm
describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));

  test("", () => console.log("2 - test"));
});
```
