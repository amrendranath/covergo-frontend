# Solution

Here is the detail about the technical choices and architecture:

## Technical Choices

To build this Form Wizard, I have used React, Typescript, and Tailwindcss. Also, I have used `react-router-dom` for routing purposes.

- TypeScript: because most of the errors are captured at the time of compilation.
- React: It is a library used for making single-page applications. Plus, I am comfortable with it.
- Tailwindcss: For styling.

## Architecture

Since It was a test project, I tried the simple and basic architecture for managing the files and directories. Directories and files are as follows:

```
- src/
----- constants/
--------------- countries.ts
--------------- countryCurrency.ts
----- contexts/
--------------- formWizardContext/
---------------------------------- index.tsx
---------------------------------- types.ts
----- pages/
----------- form/
----------------- components/
---------------------------- form.tsx
---------------------------- error.tsx
----------------- tests/
------------------------ index.test.tsx
----------------- index.tsx
----------- notFound/
-------------------- tests/
--------------------------- index.test.tsx
-------------------- index.tsx
----------- summary/
-------------------- tests/
--------------------------- index.test.tsx
-------------------- index.tsx
----------- welcome/
-------------------- tests/
--------------------------- index.test.tsx
-------------------- index.tsx
```

## Approach

1. I divided all three pages into individual components. Each page contains its file and test cases.
2. Then I created a context that contains the state of the application.
3. For The Form page, I divided it into two separate components `PolicyForm` and `Error`. Error component will show when age is over 100. Initially, I show the form component that is used for setting the states.
4. All the calculations related to premium, package selection, country, age, and name will be done on `form.tsx` file.
5. After that I wrote tests for every component.
