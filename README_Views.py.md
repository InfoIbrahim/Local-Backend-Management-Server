This code is a Django-based web application that allows users to interact with a financial system related to investments in something called "IHB" (likely an investment or asset type). Below is an explanation of what the logic does:

Key Concepts:
User Authentication:

Users can log in using their username and password.
The application supports both regular users and an admin user.
The admin has special access to the admin dashboard, where they can view ownership data across users.
User and IHB Data:

Users have ownership percentages in specific IHBs, and the application allows them to check their balance or transfer ownership of IHBs to other users.
IHB values are stored in a JSON file (data.json) and are loaded when needed.
Users and their IHB ownership are also stored in the same file, allowing the application to track ownership and transaction history.
Transactions:

Users can transfer ownership of IHBs to other users, provided they have sufficient ownership to do so.
Transactions are recorded in the user's transaction history, and the ownership percentages of IHBs are updated accordingly.
The application checks if the user is transferring more ownership than they actually hold.
Admin Dashboard:

The admin user can view a comprehensive overview of all IHB ownership across users.
The admin can see the total value of each user's holdings in each IHB.
Security:

The application uses Django sessions to manage logged-in users and ensure that users can only access their data or the admin dashboard if they are logged in with the appropriate credentials.
If a user is not logged in and tries to access the dashboard or admin area, they are redirected to the login page.
Workflow:
Loading Data:

The application loads and saves data from a JSON file (data.json). This file contains the IHB values, user information (including ownership percentages), and transaction history. If the file doesn’t exist or is corrupted, it returns default data.
User Class:

The User class represents a user with properties such as their name, password, client ID, IHB ownership, and transaction history.
Methods in the User class allow users to log in (log_in), log out (log_out), check their IHB balance (check_balance), and add transactions (add_transaction).
Login View:

When a user logs in, their credentials (username and password) are checked against hard-coded user data (user_data).
If valid, the user is logged in, and their session is created. Regular users are redirected to their dashboard, while the admin user is redirected to the admin dashboard.
Dashboard:

Once logged in, users can perform different actions through commands. These include:

Check Balance: Displays the current value of an IHB that the user owns based on their ownership percentage.
Transfer Ownership: Allows a user to transfer ownership of an IHB to another user, adjusting the percentage of ownership between the sender and recipient.
Logout: Logs the user out and redirects to the login page.
Each of these actions updates the IHB ownerships, transaction histories, and other related data.

Admin Dashboard:

Only accessible by the admin user, this page displays detailed ownership data across all users, including the total value of each user's holdings in IHBs. The admin can view all user transactions and IHB balances.
Ledger View (Added in November 2024):

An additional feature allows the display of NFC data from a file (nfc_data+.json). Only logged-in users can access this data. The data is read from the file, and if the file exists and is valid JSON, it’s rendered on a page; otherwise, an error message is displayed.
Detailed Steps for Some Key Views:
Login View:

The login function checks if the login form is submitted (POST request).
It verifies the username and password, and if valid, creates a session for the user.
Users who are not authenticated are redirected to the login page.
The view renders the login page (login.html).
Dashboard View:

The dashboard function checks if the user is logged in by checking the session for a valid client_id.
If the user is logged in, they can execute commands like checking their balance or transferring ownership.
The check_balance method calculates how much the user owns of a given IHB and its total value.
The transfer method handles the process of transferring ownership between users, checking if the transfer amount is valid, and updating the user data accordingly.
Admin Dashboard View:

The admin_dashboard function is restricted to the admin user.
It gathers data on IHB ownership across all users and calculates the total value of each IHB owned by the users, then renders this data on the admin_dashboard.html.
Edge Case Handling:
Invalid Credentials: If the username or password is incorrect, an error message is displayed.
Invalid IHB Number: If a user enters an invalid IHB number for balance or transfer, the system responds with an error.
Insufficient Ownership: The system prevents a user from transferring more ownership than they actually have.
File Errors: If the JSON files are missing or not valid JSON, the system handles these errors gracefully by providing feedback.
Summary:
This Django app simulates a simple system where users can manage ownership of investment assets (IHBs). The app supports basic actions like login, checking balances, transferring ownership, and viewing historical transactions. There’s also an admin feature to monitor overall asset distribution, and the system is backed by a file-based storage model using JSON files.
