# Technical Assessment from Sendbird

#### Assessment 1

1. <a href="https://drive.google.com/file/d/13LdKTxnW_zqOYl49Ya3Ka6c5fKR5niOc/view?usp=sharing"> Assignment 1.1  </a>
<img src="https://drive.google.com/uc?export=view&id=13LdKTxnW_zqOYl49Ya3Ka6c5fKR5niOc"> 

2. <a href="https://drive.google.com/file/d/11IbS6OxvpQtCP5keYu8ixx7I20SkBz6S/view?usp=sharing"> Assignment 1.2</a>
<img src="https://drive.google.com/uc?export=view&id=11IbS6OxvpQtCP5keYu8ixx7I20SkBz6S">

<hr />

#### Assessment 2 

1. <a href="https://drive.google.com/file/d/1X55LDn-s55IDm6KCzfZfZLDMgmeRTr16/view?usp=sharing"> Assignment 2.a </a>
<img src="https://drive.google.com/uc?export=view&id=1X55LDn-s55IDm6KCzfZfZLDMgmeRTr16">

2. <a href="https://drive.google.com/file/d/1cszQP1G2suB_iZkXxwI40HXYGbmonnJg/view?usp=sharing"> Assignment 2.b </a>
<img src="https://drive.google.com/uc?export=view&id=1cszQP1G2suB_iZkXxwI40HXYGbmonnJg">

<hr />

#### Assignment 3

1. <a href="https://drive.google.com/file/d/1hI9C_OBza75MNOzdV_7Pc19JgGpE8WWw/view?usp=sharing"> Assessment 3  </a>
<img src="https://drive.google.com/uc?export=view&id=1hI9C_OBza75MNOzdV_7Pc19JgGpE8WWw">

<hr />

#### Assignment 4 

Browser Notification 
<a href="https://drive.google.com/file/d/1j0Paf7O7qssytWlFD97z48sOhKGgexFQ/view?usp=sharing"> Assessment 4 - Browser Notification </a>
<img src = "https://drive.google.com/uc?export=view&id=1j0Paf7O7qssytWlFD97z48sOhKGgexFQ" />

<hr />

#### Bonus

1. In Assessments 1 and 2, we sent a message after creating new channels. If we do not
send a message, the channels will not be displayed. Why does this occur? (5 points).

-> Because channels is an empty error. As per display rule {channel.lastMessage?.message} it will display only if message is present in the channel. Otherwise show nothing

2. We can list channels without messages as well. How do we make this happen? (10
points).

-> Since we are using HOF map to list all channels in our Basic group channel. Our map function returning an array of all the channels irrespestive of whether it contains any messages or not. 

3. In Assessment 4, we generated notifications while viewing the channelList. You could
also generate push notifications while viewing the conversation. Why should you be
careful when implementing this type of logic? (15 points).

4. If you’ve utilized a tool like Postman or cURL before, you can complete steps 7, 8 and 9
of Assessment 1 utilizing the Platform API instead of the Sendbird Dashboard.
a. Look over out Platform API documentation.
b. Provide a screenshot which shows both the HTTP request (if there is a body,
make sure to include it), and the response from Sendbird for the items below:

- <a href="https://drive.google.com/file/d/1tfmwOXEfa5t8FSdv4zBLFFYuzMAR3s_-/view?usp=sharing"> Create a new user with the nickname “u4” </a>

<img src="https://drive.google.com/uc?export=view&id=1tfmwOXEfa5t8FSdv4zBLFFYuzMAR3s_-">

- <a href="https://drive.google.com/file/d/1UJcPea1KlEQ0UigFWTCmGdm_Ho3vrWsP/view?usp=sharing"> Create a new channel containing users “u1” and “u4”, and a customType </a>
value of “b4”

<img src="https://drive.google.com/uc?export=view&id=1UJcPea1KlEQ0UigFWTCmGdm_Ho3vrWsP">

- <a href="https://drive.google.com/file/d/15P3ahBJ2sf6rx2BAHtHt4Nwi3OPLBJ1D/view?usp=sharing"> Send a text message containing the text “Bonus4” to the newly created
channel. </a>

<img src="https://drive.google.com/uc?export=view&id=15P3ahBJ2sf6rx2BAHtHt4Nwi3OPLBJ1D">


