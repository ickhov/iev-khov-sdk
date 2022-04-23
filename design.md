# LibLab Assessment SDK Design

LibLab assessment SDK design schema.

## Using the SDK

- Import SDK module
- Call SDK.initialize and pass in the token to access [The Lord of the Rings APIs](https://the-one-api.dev/documentation) as shown below
  ```
  SDK.initialize({ token: process.env.TOKEN });
  ```
- NOTE: SDK.initialize must be called before calling any other SDK functions. All of the funcitons will throw an error with the message "Please initialize the SDK before calling this function." if token is required and null.

## All SDK Functions

Synchronous

- Initialize: initialize the SDK with the token

  ```
  SDK.initialize({ token })
  ```

Asynchronous

- Book: calls the book API and return the unmodified results

  ```
  SDK.book(query, id, isChapter)
  ```

- Movie: calls the movie API and return the unmodified results

  ```
  SDK.movie(query, id, isQuote)
  ```

- Character: calls the character API and return the unmodified results

  ```
  SDK.character(query, id, isQuote)
  ```

- Quote: calls the quote API and return the unmodified results

  ```
  SDK.quote(query, id)
  ```

- Chapter: calls the chapter API and return the unmodified results

  ```
  SDK.chapter(query, id)
  ```

## Query

All of the asynchronous SDK functions accepts a query as the first parameter. The query is an object with the paging, sorting, and filtering data which includes:
- limit
- page
- offset
- sort
- Any other data that does not match the keys above are considered filters.