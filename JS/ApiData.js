// Select the table body where todos will be added
const todoBody = document.getElementById("todoBody");
// Function to fetch todos from API
async function getTodos() {
  try {
    // Fetch data from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // Convert response to JSON
    const todos = await response.json();
    // Loop through each todo item
    todos.forEach(todo => {
      // Create a new table row
      const tr = document.createElement("tr");
      // Create table cells
      const idTd = document.createElement("td");
      const titleTd = document.createElement("td");
      const statusTd = document.createElement("td");
      // Insert data into cells
      idTd.innerText = todo.id;
      titleTd.innerText = todo.title;
      // Check if todo is completed or not
      if (todo.completed) {
        statusTd.innerText = "Completed";
        statusTd.classList.add("completed");
      } else {
        statusTd.innerText = "Pending";
        statusTd.classList.add("pending");
      }
      // Append cells to row
      tr.appendChild(idTd);
      tr.appendChild(titleTd);
      tr.appendChild(statusTd);

      // Append row to table body
      todoBody.appendChild(tr);
    });

  } catch (error) {
    // Handle errors if API fails
    console.error("Error fetching todos:", error);
  }
}
// Call function to load todos when page loads
getTodos();