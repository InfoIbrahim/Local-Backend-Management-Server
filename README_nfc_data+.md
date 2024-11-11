Input (IHB Number from Python):

The IHB number (which represents a unique identifier for some asset or resource) is passed to the Node.js script. This number is provided as an input from the earlier NFC scanning process done by the Python script. Essentially, the Python script scans the NFC tag, retrieves the IHB number, and sends it to the Node.js script for further processing.
Load Existing Data (from data.json):

The Node.js script first loads the data.json file. This file contains detailed information about users, their ownership of IHB numbers, and their transaction histories. The script specifically looks for data associated with the given IHB number.
Get Ownership and Transaction Data:

Once the data.json file is loaded, the Node.js script searches through it to find:
Ownership details: This shows which users own this particular IHB number and what percentage of ownership they have.
Transaction history: This shows any transactions involving this IHB number, such as transfers or sales, and the details of those transactions.
Load NFC Data (from nfc_data.json):

The script then loads another JSON file called nfc_data.json, which holds data related to NFC tags. Each entry in this file corresponds to a specific IHB number and contains information like the tag ID and other related data.
Find Matching NFC Entry:

The script searches the nfc_data.json file to find an entry that matches the IHB number received earlier. If an entry for this IHB number exists, the script will update that entry with the newly gathered ownership and transaction data.
Update the NFC Data:

Once the matching entry is found, the script updates it with the ownership and transaction details fetched from data.json. The information is added as new fields (like "ownership_data" and "transaction_history") in the NFC entry.
Save Updated Data (to nfc_data+.json):

After updating the entry, the script saves the modified data to a new file called nfc_data+.json. This file now contains the updated NFC data with additional information about ownership and transaction history related to the scanned IHB number.
The original file (nfc_data.json) remains unchanged, so the updated data is stored separately, making it easy to track changes without overwriting the original information.
Summary:
The Node.js script serves as the part of your system that takes the IHB number passed from the Python NFC scanning process, retrieves relevant ownership and transaction data, updates the NFC data with this new information, and then saves the updated data to a new JSON file (nfc_data+.json). This ensures that the NFC tag now holds richer data, which can be used for further analysis or processing.



