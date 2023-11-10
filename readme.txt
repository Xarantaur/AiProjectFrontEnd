Guide to using the program: 

1 Run the backend code
2 Open the frontpage.html file in preview mode
3 Write messages to the wizards by selecting a wizard and then sending them a message

Known errors:
If if the inspector says that Data[0] is null, it means that the API key is not present
To remidy this. Enter a valid API key into the environmental variable GPT_API_KEY in the 
backend part of the project by going to Run->Edit Configurations and inserting the variable
as GPT_API_KEY = valid key

Notice: Do not use quotation marks around the key value as this would be included in the String. 

Notice: There is a limit to how many messages you can send pr minute, the limit is set to 5 messages.
