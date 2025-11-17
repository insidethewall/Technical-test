# A: Mystic Waves

## Introduction

This program solves the “Mystic Waves” problem:

For each test case, you are given two integers x and n.
Nia generates a sequence of n waves: x, -x, x, -x, …, starting with x.
Your task is to compute the total energy (the sum of this sequence).

## Getting started

Make sure you installed Python (e.g. python3 on macOS/Linux, python on Windows).
Access to A folder and Run(mac)

```
python3 mystic_waves.py
```

for window run

```
python mystic_waves.py
```

Then type input,

- first line is the number of test cases and should be an integer T (1 <= T <= 100),
- Next T lines: each line contains two integers x(magical energy value) and n(waves of energy) (1 <= x, n <= 10).
- For each test case will output total energy after n.

# B: CargoCraft Fleet

## Introduction

In the futuristic world of **Aerion**, the CargoCraft company operates two types of transport crafts:

- **Type A** with 4 propulsion units
- **Type B** with 6 propulsion units

Given a total number of propulsion units `n` for the entire fleet, this program computes the **minimum** and **maximum** possible number of crafts that could make up exactly `n` units using only these two types. If no combination of Type A and Type B crafts can sum to `n`, the program reports it as impossible by printing `-1`.

The solution reads multiple test cases from standard input and, for each `n`, outputs either:

- `<minimum_crafts> <maximum_crafts>` if a valid configuration exists, or
- `-1` if no valid configuration is possible.

## Getting started

Make sure you installed Python (e.g. python3 on macOS/Linux, python on Windows).
Access to A folder and Run(mac)

```
python3 mystic_waves.py
```

for window run

```
python mystic_waves.py
```

then type input

- first line is the number of test cases and should be an integer T (1 <= T <= 1000),
- Each of the next t lines contains one integer n (1 ≤ n ≤ 10¹⁸) — the total number of propulsion units.
- output minimum and maximum possible number of crafts in the fleet for each test case. or -1 if no valid combination exist.

## problem solving idea

there are two types of crafts:

Type A: 4 propulsion units

Type B: 6 propulsion units

Let:

a = number of 4-unit crafts

b = number of 6-unit crafts

The total number of propulsion units is
n, so the problem becomes:

4a+6b=n,a≥0, b≥0, a,b∈Z

Maximum crafts → maximize a+b

Minimum crafts → minimize a+b

Since 4 and 6 both even number so I know for odd number and number < 4, there is no valid combination.

maximum crafts should be use as many 4-unit crafts as possible but some number may not be divided by single 4 or single 6

n = 4a + 6b >= 4a + 4b

a+b <= n/4

a + b is integer

so a+b <= floor(n/4)

therefore, maximum crafts <= floor(n/4) = n // 4

similar with 6:

n = 4a + 6b <= 6a + 6b

a+b >= n/6

since a+ b is integer so

a+b >= ceil(n/6)

therefore, minimum crafts ≥ ceil(n / 6) = (n + 6-1) // 6

# C : Login Page

## Introduction

this login page is a simple FontEnd template built with the [React framework](https://react.dev/), [tailwind css](https://tailwindcss.com/) using [ react hook from](https://react-hook-form.com/) as a solution for the form validation. [The Figma design](https://www.figma.com/community/file/1316288257262209196/login-signup-web-mobile-app-design) use as reference.

## Getting started

First, go to C folder, install dependencies (only needed the first time) and run the server:

```
cd C
npm install
npm run dev
```

Open http://localhost:5173 with your browser to see the login page.

This app uses hard-coded mock users for login (no real backend).

You can sign in with any of the following accounts:

| #   | Email             | Password   |
| --- | ----------------- | ---------- |
| 1   | test1@example.com | Password1! |
| 2   | test2@example.com | Password1! |
| 3   | test3@example.com | Password1! |

## Code standard

- File & Folder naming
  - All files and folders under C should be named with [camelCase](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case),
- Folder structuring:
  - Each template has its own folder and their sub-components are kept within `@/component`.

## Credential

Since there is no backend, authentication is handled purely on the client side.

- On successful login, the app stores the logged-in user in `localStorage`:
  ```
  `localStorage.setItem("isLoggedIn", email)`
  ```
- Protected routes (e.g. `/home`) check this value to decide whether the user
  can access the page. If `isLoggedIn` is not set, the user is redirected
  back to the login page.
- When the user clicks the **Logout** button:
  - The `isLoggedIn` item is removed from `localStorage`.
  - The user is redirected back to the login page.
