# Two Sum Visualizer

An interactive and animated **Two Sum Visualizer** built to help understand how the optimized **Hash Map approach** works step-by-step in a visual and intuitive way.

## 🎯 Objective

This project helps users understand how the Two Sum algorithm works internally, including:

* How elements are processed one by one
* How complement (`target - current`) is calculated
* How Hash Map enables efficient lookup
* Why this approach is efficient (**O(n)**)

## 🌐 Live Demo

🚀 Try it here:
https://your-demo-link.com/

## 🚀 Features

* 🔍 Step-by-step Two Sum visualization
* 🎮 Play / Pause animation control
* ⏭ Forward & ⏮ Backward traversal
* 📊 Real-time Hash Map visualization
* 🧪 Custom array and target input support
* 🎯 Highlights matching pair when found
* ❌ Handles "No Solution Found" case
* 📱 Fully responsive UI

## 🎮 Controls

* ▶ **Play:** Start visualization
* ⏸ **Pause:** Stop animation
* ⏭ **Next Step:** Move forward step-by-step
* ⏮ **Previous Step:** Move backward step-by-step
* 🎯 **Input Fields:** Enter custom array and target

## 🛠 Tech Stack

* ⚛️ React.js *(if used)*
* 🎨 Tailwind CSS
* 💡 JavaScript

## 📊 Time & Space Complexity

* ⏱ **Time Complexity:** O(n)
* 🧠 **Space Complexity:** O(n)

## ⚙️ How It Works

The optimized approach uses a **Hash Map**:

1. Traverse the array
2. For each element, calculate complement

   ```
   complement = target - currentElement
   ```
3. Check if complement exists in the map
4. If yes → Pair found 🎯
5. Else → Store current element in map

This allows finding the solution in a single pass.

## 🧑‍💻 Run Locally

```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
npm install
npm run dev
```

## 🚀 Future Improvements

* Add speed control slider
* Better animations for map operations
* Dark mode support
* Add more algorithm visualizers

---

If you found this helpful, consider giving it a ⭐
