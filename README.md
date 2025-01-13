

  <h1>GitHub User Management App</h1>
  <p>
    A full-stack web application to manage GitHub user data, including features such as saving user information, finding mutual friends, searching, updating, and listing users.
  </p>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express.js, Mongoose, CORS</li>
    <li><strong>Frontend:</strong> React.js, JavaScript, CSS, HTML</li>
    <li><strong>Database:</strong> MongoDB</li>
  </ul>

  <h2>Features</h2>
  <ul>
    <li>Save GitHub user data to the database</li>
    <li>Find mutual followers of a user</li>
    <li>Search users by username</li>
    <li>Soft delete a user</li>
    <li>Update user fields</li>
    <li>List all users sorted by fields</li>
  </ul>

  <h2>Backend API Endpoints</h2>
  <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST</td>
        <td><code>/save</code></td>
        <td>Save user data from GitHub API</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/friends/:username</code></td>
        <td>Find mutual followers of a user</td>
      </tr>
      <tr>
        <td>GET</td>
        <td><code>/search</code></td>
        <td>Search users by username</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td><code>/:username</code></td>
        <td>Soft delete a user</td>
      </tr>
      <tr>
        <td>PATCH</td>
        <td><code>/:username</code></td>
        <td>Update user fields</td>
      </tr>
      <tr>
        <td>GET</td>
        <td><code>/list</code></td>
        <td>List all users sorted by fields</td>
      </tr>
    </tbody>
  </table>

  <h2>Frontend Features</h2>
  <ul>
    <li>Interactive user interface built with React</li>
    <li>Search and display GitHub users</li>
    <li>Form validation for adding and updating user data</li>
    <li>Responsive design for various screen sizes</li>
  </ul>

  <h2>Installation</h2>
  <h3>Backend Setup</h3>
  <ol>
    <li>Clone the backend repository:
      <pre><code>git clone https://github.com/rk28284/Autonomize-Assignment.com</code></pre>
    </li>
    <li>Navigate to the backend directory:
      <pre><code>cd server</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
   a
    <li>Start the backend server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h3>Frontend Setup</h3>
  <ol>
    <li>Clone the frontend repository:
      <pre><code>git clone https://github.com/rk28284/Autonomize-Assignment</code></pre>
    </li>
    <li>Navigate to the frontend directory:
      <pre><code>cd client</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm start</code></pre>
    </li>
    <li>Open the app in your browser at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</li>
  </ol>

  <h2>Frontend Screenshot</h2>
  <p>Below is a screenshot of the application's user interface:</p>
  
 ![Screenshot 2025-01-13 073220](https://github.com/user-attachments/assets/ed581c7b-1c01-4d16-ba1e-2cfaccf99f8b)
 
![Screenshot 2025-01-13 073644](https://github.com/user-attachments/assets/04cad647-f148-4e31-aecd-7ac934153333)

![Screenshot 2025-01-13 073734](https://github.com/user-attachments/assets/fe8876c0-7202-4092-824b-141d796ec2d7)
![Screenshot 2025-01-13 073811](https://github.com/user-attachments/assets/80caf9c3-1183-4a86-b0f6-c5f3e4403568)
![Screenshot 2025-01-13 073845](https://github.com/user-attachments/assets/28724628-d8b6-45f0-b57a-ef0d8d9a6305)


  <h2>Usage</h2>
  <p>
    Test the API endpoints using a tool like <a href="https://www.postman.com/" target="_blank">Postman</a>, or interact with the app through the React frontend.
  </p>

  <h2>Contributing</h2>
  <p>
    Contributions are welcome! Please fork the repository, make changes, and submit a pull request.
  </p>

  


