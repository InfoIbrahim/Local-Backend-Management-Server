Integration of Django Web Application, NFC Scanning, and Node.js Processing
Here's a step-by-step breakdown of how the different parts of the system come together, including the necessary commands and their flow:

1. Django Web Application (User Authentication & Management)
The Django web application acts as the central platform for users to manage their IHB (investment or asset) holdings. It supports features like:

User Authentication: Users log in with their username and password. The system verifies credentials and grants access to specific user features. Admins have additional access to view all users' ownership and transactions.
IHB Ownership & Transactions: Users can view their IHB holdings, check balances, and transfer ownership of IHBs to other users. Transactions are recorded in the user’s history.
Admin Dashboard: Admins can monitor the overall distribution of IHBs and view detailed transaction histories.
The system is backed by a file-based model using JSON to store IHB data, user ownership information, and transaction history. The app uses the data.json file to load and store this data.

Commands:
Run Django Server:
bash
Copy code
python manage.py runserver
This command starts the Django web application, enabling user interaction through the web interface.
2. NFC Scanning (Python Integration)
The Python script interacts with an NFC reader to scan NFC tags and assign IHB numbers to them. Here's how it works:

Scanning NFC Tags: The Python program uses the smartcard library to read NFC cards and retrieve their UID (unique identifier).
Mapping NFC UID to IHB: After scanning a card, the script checks whether the NFC UID is already linked to an IHB number. If not, it assigns a new IHB number and saves this information in a JSON file (nfc_data.json).
Node.js Integration: Once the NFC card is scanned, the script triggers a Node.js process, passing the IHB number associated with the scanned card.
Commands:
Run NFC Scanning Script:
bash
Copy code
python read_nfc.py
This command runs the Python script, which scans NFC tags, reads their unique identifiers, and links them to IHB numbers.
3. Node.js Processing (Data Handling & Update)
Once the NFC tag is scanned and the IHB number is passed to Node.js, the script processes the data in the following way:

Load User Data (data.json): The Node.js script loads the data.json file, which contains the IHB ownership and transaction information. The script looks for the specific IHB number passed from the NFC scanning process and retrieves details about the ownership and transaction history related to that IHB.

Update NFC Data (nfc_data.json): The script then loads nfc_data.json, which holds the NFC UID-to-IHB mappings. It finds the entry corresponding to the scanned IHB number and updates it with additional information, such as the ownership details and transaction history from data.json.

Save Updated NFC Data (nfc_data+.json): After updating the NFC data with relevant ownership and transaction information, the script saves the modified data into a new file, nfc_data+.json. This ensures the original data (nfc_data.json) is not overwritten, making it easy to track changes.

Commands:
Run Node.js Script:
bash
Copy code
node nfc_data+.js 'IHB Number'
This command runs the Node.js script, where 'IHB Number' is the number passed from the Python script. The script processes the IHB number, retrieves the relevant user data, updates the NFC data, and saves the updated information to nfc_data+.json.
Workflow Summary
User Authentication & Interaction (Django):

The user logs into the Django application (via python manage.py runserver).
Users can check their IHB balance, transfer ownership, and view transaction history.
NFC Scanning (Python):

The user places an NFC tag on the reader.
The Python script reads the NFC tag’s UID and links it to an IHB number.
If the UID is not already mapped to an IHB number, the Python script assigns a new number and logs it in nfc_data.json.
The script then passes the IHB number to Node.js for further processing (via python read_nfc.py).
Node.js Processing (Data Handling):

Node.js processes the IHB number by loading the data.json file, which contains ownership and transaction details.
It updates the corresponding NFC entry in nfc_data.json with the relevant ownership and transaction information.
The updated NFC data is saved into nfc_data+.json (via node nfc_data+.js 'IHB Number'), preserving the original data and making the updates available for further use.
Integration:

The NFC data now contains rich information about ownership and transactions, which can be displayed on the Django frontend or used for further user interactions (e.g., checking balances or transferring ownership).
Final Summary
This system enables the management of IHB ownership via a Django web application, NFC scanning for asset identification, and Node.js for processing and updating NFC data. It works as follows:

Users interact with the web application to manage IHBs.
NFC tags are scanned, and each tag is assigned an IHB number.
Node.js is used to process the scanned IHB data, update the NFC logs, and store the updated information in a new file (nfc_data+.json).
