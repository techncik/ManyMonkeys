# Many Monkeys

There is an idea that if you gave a monkey a type writer and infinite time,
eventually that monkey would reproduce Shakespeare.
Many Monkeys explores that idea further.
To try it out, click here
[ManyMonkeys](https://techncik.github.io/ManyMonkeys/)

---

## Features

- **React + TypeScript** frontend.
- **Web Worker** to handle the CPU-intense simulation without freezing the UI
- Responsive design and conditional rendering for menu, loading, and result screen

## How It Works

1. User inputs:
    - Number of monkeys to simulate.
    - Text choice (Macbeth, Romeo and Juliet, Hamlet).
2. On clicking **Run**, the app:
    - Switches to a loading screen.
    - Spawns a **web worker** to perform the heavy computation on a separate thread.
    - Ensures a run time of at least 5 seconds to ensure no spamming
3. The worker simulates each monkey typing random letters until a mismatch with the chosen text occurs:
    - We track the monkey with the longest matching sequence
    - Return the best monkey and their sequence to the main app thread
4. Show the finish screen where we display:
    - The best monkey
    - The best sentence

---

## Installation

1. Clone the repository:

```bash
git clone https://guthub.com/techncik/ManyMonkeys.git
cd ManyMonkeys
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally:

```bash
npm run dev
```

## Notes and Considerations

- Currently the app only uses 1 additional core. In the future I will add the ability to use extra cores to speed up large computations
- Extremely large numbers may still take a while to compute. Anything over 1 billion had a noticable impact on performance. Play with large numbers at your own risk
