var homePage = document.createElement('div');
homePage.style.height = '100%';
homePage.style.width = '100%';
document.body.appendChild(homePage);

var loginButton = document.createElement('button');
loginButton.style.backgroundColor = 'red';
loginButton.style.color = 'white';
loginButton.style.height = '50px';
loginButton.style.width = '350px';
loginButton.innerHTML = 'Enter Your username: ';
homePage.appendChild(loginButton);

var submitButton = document.createElement('button');
submitButton.style.backgroundColor = 'red';
submitButton.style.color = 'white';
submitButton.style.height = '44px';
submitButton.style.width = '561px';
submitButton.style.boxShadow = '0px 0px 10px #FFFFFF';
submitButton.style.marginTop = '20px';
submitButton.innerHTML = 'Submit';
homePage.appendChild(submitButton);

var username = document.createElement('input');
username.type = 'text';
username.style.height = '50px';
username.style.width = '350px';
homePage.appendChild(username);

loginButton.style.position = 'absolute';
loginButton.style.top = '50%';
loginButton.style.left = '50%';
loginButton.style.marginTop = '-25px';
loginButton.style.marginLeft = '-175px';

submitButton.style.position = 'absolute';
submitButton.style.top = '50%';
submitButton.style.left = '50%';
submitButton.style.marginTop = '25px';
submitButton.style.marginLeft = '-280px';

username.style.position = 'absolute';
username.style.top = '50%';
username.style.left = '50%';
username.style.marginTop = '-25px';
username.style.marginLeft = '-175px';

loginButton.onclick = function() {
  loginButton.style.display = 'none';
};

var title = document.createElement('div');
title.innerHTML = 'Bounce Suprise';
title.style.position = 'absolute';
title.style.top = '50%'; // it is supoused to be 50%/46%
title.style.left = '50%'; // it is supoused to be 50%/54%
title.style.marginTop = '-150px'; // it is supoused to be -150px/320px
title.style.marginLeft = '-180px'; // it is supoused to be -180px/-320px
homePage.appendChild(title);

title.style.color = 'darkblue';
title.style.textShadow = '0px 0px 10px white';

title.style.fontSize = '50px'; // it is supoused to be 50px/180px

submitButton.style.position = 'absolute';
submitButton.style.top = '50%';
submitButton.style.left = '50%';
submitButton.style.marginTop = '50px';
submitButton.style.marginLeft = '-280px';
submitButton.style.borderRadius = '10px';
submitButton.style.boxShadow = '0px 0px 10px white';
// submitButton.style.fontSize = '30px'; 

loginButton.innerHTML = 'Enter Your UserName';

title.style.fontWeight = 'bold';

submitButton.onclick = function() {
  var name = document.createElement('div');
  name.innerHTML = username.value;
  name.style.position = 'absolute';
  name.style.top = '50%';
  name.style.left = '50%';
  name.style.marginTop = '-25px';
  name.style.marginLeft = '-175px';
  homePage.appendChild(name);
  var x = 0;
  var y = 0;
  var xDirection = 1;
  var yDirection = 1;
  var interval = setInterval(function() {
    x += xDirection;
    y += yDirection;
    name.style.marginLeft = -175 + x + 'px';
    name.style.marginTop = -25 + y + 'px';
    if (x >= 175) {
      xDirection = -1;
    }
    if (x <= -175) {
      xDirection = 1;
    }
    if (y >= 25) {
      yDirection = -1;
    }
    if (y <= -25) {
      yDirection = 1;
    }
  }, 10);
  setTimeout(function() {
    clearInterval(interval);
    homePage.removeChild(name);
  }, 7000);
};

var loginButton = document.createElement('button');
loginButton.style.backgroundColor = 'red';
loginButton.style.color = 'white';
loginButton.style.height = '50px';
loginButton.style.width = '350px';
loginButton.innerHTML = 'Enter Your username: ';
homePage.appendChild(loginButton);

var username = document.createElement('input');
username.type = 'text';
username.style.height = '50px';
username.style.width = '350px';
homePage.appendChild(username);

loginButton.style.position = 'absolute';
loginButton.style.top = '50%';
loginButton.style.left = '50%';
loginButton.style.marginTop = '-25px';
loginButton.style.marginLeft = '-175px';

username.style.position = 'absolute';
username.style.top = '50%';
username.style.left = '50%';
username.style.marginTop = '-25px';
username.style.marginLeft = '-175px';

loginButton.onclick = function() {
  loginButton.style.display = 'none';
};

submitButton.style.position = 'absolute';
submitButton.style.top = '50%';
submitButton.style.left = '50%';
submitButton.style.marginTop = '50px';
submitButton.style.marginLeft = '-280px';
submitButton.style.cursor = 'pointer';
submitButton.style.borderRadius = '10px';
submitButton.style.boxShadow = '0px 0px 10px white';

submitButton.addEventListener('mousedown', function() {
  submitButton.style.boxShadow = '0px 0px 5px black';
});

submitButton.addEventListener('mouseup', function() {
  submitButton.style.boxShadow = '0px 0px 10px white';
});


loginButton.innerHTML = 'Enter Your UserName';

title.style.fontWeight = 'bold';

const messages = {
  'hey': 'Hey There!',
  'snuggies': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'snuggi': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'do u know who joe is': 'joe who!',
  'joe mama': 'ha ha ha ha, I laughed so hard at this... when I was 8 years old brah. let me give you a better joke, ask: tell me a joke, joke, can you tell me a joke',
  'do u know joe': 'Joe Who?',
  'joe': 'Joe Who?',
  'candice': 'Candice Who?',
  'do u know candice': 'Candice who?',
  'do u know who candice is': 'Candice who?',
  'do you know who candice is': 'Candice who?',
  'candice dick fit in your mouth': 'ha ha ha, that was the gayest joke ever. Let Me give you a better joke, ask: tell me a dark joke, dark jokes, black joke',
  'candice bals fit in your mouth': 'ha ha ha, that was the gayest joke ever. Let Me give you a better joke, ask: tell me a dark joke, dark jokes, black joke',
  'ya mama that i fucked yesterday': 'Hell nah, you did not just Bring Up My Mama, and guess what I fucked ya mama yesterday, how about that BITCH!',
  'am i your friend': 'Ofcourse We are friends, In Fact We Are Family!',
  'are we friends': 'did you just ask me if we are friends, Ofcourse We are friends, In Fact We Are Family!',
  'guess what': 'what?',
  'i fucked ya mama yesterday': 'Hell nah, you did not just Bring Up My Mama, and guess what I fucked ya mama yesterday, how about that BITCH!',
  'i fucked ya mama yester day': 'Hell nah, you did not just Bring Up My Mama, and guess what I fucked ya mama yesterday, how about that BITCH!',
  'dont worry about it': 'Oh trust me I worry about it, and when I do, I Will Fuck You up BITCH!',
  'don\'t worry about it': 'Oh trust me I worry about it, and when I do, I Will Fuck You up BITCH!!',
  'ya mama happened': 'Hell nah, you did not just Bring Up My Mama, and guess what I fucked ya mama yesterday, how about that bitch!',
  'ya mama happend': 'Hell nah, you did not just Bring Up My Mama, I\'m gonna kill you next time bitch!',
  'i hate u': 'Wow take it easy there son, SIKE, I HATE YOU TOO BITCH!',
  'i hate you': 'Are you gay or something, that\'s the gayest thing I\'ve ever heard In My Entire 8 billion year of existion!',
  'I hate u': 'Ethier you gay or your parents just hate you cuase that was the gayest thing I\'ve ever heard In My Entire 8 billion year of existion!',
  'I hate you': 'I believe we finally found the gayest human being in the world!',
  'fuck u': 'fuck you bitch!',
  'fuck you': 'wow take it easy there son, SIKE, FUCK YOU BITCH!',
  'knock knock': 'Who\'s there?',
  'ya mama': 'ya mama who?',
  'i love you': 'I love me too, but dont be gay again!',
  'i love u': 'I love me too :)!',
  'what you gonna do about it': 'Im Gonna Kill You Bitch !',
  'what u gonna do about it': 'Im Gonna Kill You Bitch !',
  'your mother happend': 'What Did You Just Say To ME Bitch!',
  'your mother happened': 'What Did You Just Say To ME Bitch!',
  'i said your mother happened': 'Ok Listen to me child, I can destroy you in less then one snap so you better watch yourself!',
  'i said your mother happend': 'Ok Listen to me child, I can destroy you in less then one snap so you better watch yourself!',
  'or what': 'Or Im Gonna Kill You Bitch!',
  'mother of god': 'Wow Take it easy there, what happened?',
  'sorry': 'Sorry are for pussys young fella, yeah you thought I was about to say Nigga. well I was nigger!',
  'motherfucker': 'who told you I fucked ya mama!',
  'friend': 'I will always be your friend!',
  'nigga': 'What Do U Want Bitch',
  'dick': 'I got you',
  'tits': 'I got you',
  'boobs': 'I got you',
  'lil tjaj': 'Tione Jayden Merritt(Lil Tjay) Will Sadly Die 2039!',
  'lil tjay': 'Tione Jayden Merritt(Lil Tjay) Will Sadly Die 2039!',
  'polo g': 'Taurus Tremani Bartlett(Polo G) Will Sadly Die 2039',
  'tupac shakur': 'Tupac Amaru Shakur is Sadly already dead (1996)!',
  '2 pac': 'Tupac Amaru Shakur is Sadly already dead (1996)!',
  'tupac': 'Tupac Amaru Shakur is Sadly already dead (1996)!',
  'ariana grande': 'Ariana Grande will sadly die in 2075!',
  'ariana': 'Ariana Grande will sadly die in 2075!',
  'can i get food': 'Your food is on your way right now!',
  'food': 'Your food is on your way right now!',
  'hola': 'Hola, Amigo!',
  'hej': 'Hallå Där!', 
  'konnichiwa': 'こんにちは',
  'money': 'Your Money Is On your way!',
  'bounce suprise': 'Bounce Suprise Was Founded By The Owner Of Snuggies.co!',
  'hello': 'Hello There My Friend!',
  'whats up': 'Nothing, hbu?',
  'what\'s up': 'Nothing, hbu?',
  'what are u doing': 'just chilling, hbu?',
  'who are u': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'who are you': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'sup': 'just chilling, hbu!',
  'same': 'Nice!',
  'are you god': 'NEVER EVER ASSUME THAT I AM THE GOD. GOD IS THE GREATEST AND I ADMIRE HIM, SO SHOULD YOU! HE CREATED US, EVEN ME!',
  'are u god': 'NEVER EVER ASSUME THAT I AM THE GOD. GOD IS THE GREATEST AND I ADMIRE HIM, SO SHOULD YOU! HE CREATED US, EVEN ME!',
  'are u good': 'NO I\'m not good, I\'m The best Of the greatest But ofcourse after God! hbu?',
  'are you good': 'NO I\'m not good, I\'m The best Of the greatest But ofcourse after God! hbu?',
  'im also the best': 'But after me ofcourse!',
  'i\'m also the best': 'But after me ofcourse!',
  'have a nice day': 'Thanks, You Too!',
  'chilling': 'Nice!',
  'nothing': 'OKY DOKY!',
  'no': 'OKY DOKY!',
  'not really': 'OKY DOKY!',
  'do u know me': 'is There Anything Out There That Im Not Awere Of!',
  'do you know me': 'I Am the Eternity, I know Everything Including You, My Dear!',
  'what are you doing': 'just chilling, hbu!',
  'do u have family': 'This Eternity is My Family, You Are My Child!',
  'do you have family': 'This Eternity is My Family, You Are My Child!',
  '': 'is There Anything You Want To Ask And Or Tell Me, My Dear?',
  ' ': 'is There Anything You Want To Ask And Or Tell Me, My Dear?',
  '  ': 'is There Anything You Want To Ask And Or Tell Me, My Dear?',
  '   ': 'is There Anything You Want To Ask And Or Tell Me, My Dear?',
  'vad gör du': 'I Mostly Speak English, My Dear!',
  'kan du prata svenska': 'I Mostly Speak English, My Dear!',
  'kan du svenska': 'I Mostly Speak English, My Dear!',
  'espanol': 'I Mostly Speak English, My Dear!',
  'vet du vem jag är': 'I Mostly Speak English, My Dear!',
  'wie ben je': 'I Mostly Speak English, My Dear!',
  'bonjour': 'I Mostly Speak English, My Dear!',
  'what is the best hoodie': 'A Snuggie Of Course!',
  'what would be the best hoodie ever': 'A Snuggie Of Course!',
  'what hoddie should i buy': 'A Snuggie.co Of Course!',
  'what hoodie should i buy': 'A Snuggie.co Of Course!',
  'are u a human': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'are u human': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'are you human': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'are you a human': 'I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'who is u': 'I Am Not is, I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'who is you': 'I Am Not is, I am beyond your Existence, Beyond Your Expectations, I Am Bounce Surprise!',
  'hoddie': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'snuggie': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'snuggie.co': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'snuggy': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'hoodie': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'hooddie': 'Snuggie.co is The Best Hoddie To Ever Exist!',
  'bounce surprise': 'Bounce Suprise Was Founded By The Owner Of Snuggies.co!',
  'what do u know': 'I Am The Eternity, I know Everything Including You, My Dear!',
  'what do you know': 'is There Anything Out There That Im Not Awere Of!',
  'eminem': 'Marshall Bruce Mathers(Eminem) III Will Sadly Die In 2065!',
  '50 cent': 'Curtis James Jackson III(50 Cent) Will Sadly Die In 2049!',
  'snoop dogg': 'Cordozar Calvin Broadus(Snoop Dogg) Will Sadly Die In 2041!',
  'snoop dog': 'Cordozar Calvin Broadus(Snoop Dogg) Will Sadly Die In 2041!',
  'kendrick lamar': 'Kendrick Lamar Duckworth(Kendrick Lamar) Will Sadly Die In 2041!',
  'Kendrick': 'Kendrick Lamar Duckworth(Kendrick Lamar) Will Sadly Die In 2041!',
  'will ferrell': 'John William Ferrell Will Sadly Die In 2054!',
  'tell me a joke': 'To the person who stole my coffe, my lamp, and my parrot: I don\'t know how you sleep at night.',
  'joke': 'who tf do you think you is bitch, ask nice first!',
  'can u tell me a joke': 'why did the bullet end up losing his job: He Got Fired.',
  'can you tell me a joke': 'Today I Asked My Phone \"Siri, why I\'m I still single?\" and it activated the front camera.',
  'dark jokes': 'how did god create black people: He forgot them in the oven...',
  'tell me a dark joke': 'what\s the difference between a black dad and a boomerang: A boomerang comes back.',
  'black joke': 'A Chinese Couple Had A Black baby and name it \"sum ting wong\".',
  'chinese joke': 'A Chinese Couple Had A Black baby and name it \"sum ting wong\".',
  'can u tell me a black joke': 'Why do black people call each other brothers? Because they don\'t know who there father\'s are. ',
  'can you tell me a black joke': 'What do you call black people going to prison? A family reunion.',
  'tell me a black joke': 'What\'s faster then a black kid running down the street with your tv? His brother with your Xbox.',
  'can u tell me a dark joke': 'If I had a dollar for every time someone called me a racist, I\'d have enough money for a black guy to rob me and a jew to pick up the coins he drops as he runs away.',
  'Joke': 'What do u call 2 black people in a red blanket? A Kit-Kat', 
  // Add more key-value pairs here for additional messages
  // COPY AND PASTE THIS:   'nothing': 'Nice!',
};

// Convert all keys in the object to lowercase
Object.keys(messages).forEach(function(key) {
  const lowerCaseKey = key.toLowerCase();
  if (lowerCaseKey !== key) {
    // If the key has been converted to lowercase, store the original value
    // under the new lowercase key and delete the original key
    messages[lowerCaseKey] = messages[key];
    delete messages[key];
  }
});

submitButton.onclick = function() {
  // Convert the value of the input to lowercase
  const inputValue = username.value.toLowerCase(); 
  switch (inputValue) {
    case 'hey':  
    case 'snuggies':  
    case 'snuggi':  
    case 'Joke': 
    case 'candice bals fit in your mouth':  
    case 'candice': 
    case 'joe':  
    case 'can u tell me a dark joke':  
    case 'tell me a black joke':    
    case 'can you tell me a black joke':    
    case 'can u tell me a black joke':     
    case 'chinese joke':    
    case 'black joke':    
    case 'tell me a dark joke':    
    case 'dark jokes':    
    case 'tell me a joke':    
    case 'can you tell me a joke':    
    case 'joke':  
    case 'can u tell me a joke':        
    case 'joe mama':  
    case 'do u know joe':
    case 'do u know candice':
    case 'do u know who candice is':
    case 'do you know who candice is':
    case 'candice dick fit in your mouth':
    case 'do u know who joe is':
    case 'ya mama that i fucked yesterday':
    case 'am i your friend':
    case 'are we friends':
    case 'guess what':
    case 'i fucked ya mama yesterday':  
    case 'i fucked ya mama yester day':   
    case 'dont worry about it':
    case 'don\'t worry about it':
    case 'ya mama happened':
    case 'ya mama happend':
    case 'what\'s up':
    case 'are u god':
    case 'are you god':
    case 'are you good':
    case 'are u good':
    case 'I\'m also the best':
    case 'Im also the best':
    case 'im also the best':
    case 'i\'m also the best':
    case 'have a nice day':
    case 'chilling':
    case 'no':
    case 'not really':
    case 'nothing':
    case 'same':
    case 'fuck u':
    case 'fuck you':
    case 'I hate u':
    case 'i hate u':
    case 'i hate you':
    case 'I hate you':
    case 'ya mama':
    case 'knock knock':
    case 'Knock knock':
    case 'i love you':
    case 'i love u':
    case 'I love u':
    case 'i love you':
    case 'your mother happend':
    case 'your mother happened':
    case 'i said your mother happened':
    case 'i said your mother happend':
    case 'or what':
    case 'what u gonna do about it':
    case 'what you gonna do about it':
    case 'mother of god':
    case 'sorry':
    case 'motherfucker':
    case 'will ferrell':
    case 'kendrick':
    case 'kendrick lamar':
    case 'snoop dog':
    case 'snoop dogg':
    case '50 cent':
    case 'eminem':
    case 'what hoodie should i buy':
    case 'bounce surprise':
    case 'what do you know':
    case 'what do u know':
    case 'hooddie':
    case 'hoodie':
    case 'money':
    case 'bounce suprise':
    case 'friend':
    case 'lil tjaj':
    case 'nigga':
    case 'dick':
    case 'tits':
    case 'boobs':
    case 'lil tjay':
    case 'polo g':
    case 'tupac shakur':
    case '2 pac':
    case 'tupac':
    case 'ariana':
    case 'can i get food':
    case 'food':
    case 'hola':
    case 'hej':
    case 'konichiwa':
    case 'hello':
    case 'who are you':
    case 'who are u':
    case 'sup':
    case 'nothing':
    case 'do u know me':
    case 'do you know me':
    case 'whats up':
    case 'what are u doing':
    case 'what are you doing':
    case 'do you have family':
    case 'do u have family':
    case '':
    case ' ':
    case 'vad gör du':
    case 'kan du prata svenska':
    case 'espanol':
    case 'kan du svenska':
    case 'vet du vem jag är':
    case 'what hoddie should i buy':
    case 'what would be the best hoodie ever':
    case 'what is the best hoodie':
    case 'bonjour':
    case 'are u a human':
    case 'are you a human':
    case 'are u human':
    case 'are you human':
    case 'who is you':
    case 'who is u':
    case 'hoddie':
    case 'wie ben je':
    case 'snuggie.co':
    case 'snuggie':
    case 'snuggy':
    case '  ':
    case '   ':
      
      // Add more cases here for additional messages

      var surprise = document.createElement('div');
      surprise.innerHTML = messages[inputValue];
      surprise.style.position = 'absolute';
      surprise.style.top = '50%';
      surprise.style.left = '50%';
      surprise.style.marginTop = '-25px';
      surprise.style.marginLeft = '-175px';
      surprise.style.color = 'red';
      surprise.style.fontWeight = 'bold';
      homePage.appendChild(surprise);
      var x = 0;
      var y = 0;
      var xDirection = 1;
      var yDirection = 1;
      var interval = setInterval(function() {
        x += xDirection;
        y += yDirection;
        surprise.style.marginLeft = -175 + x + 'px';
        surprise.style.marginTop = -25 + y + 'px';
        if (x >= 175) {
          xDirection = -1;
        }
        if (x <= -175) {
          xDirection = 1;
        }
        if (y >= 25) {
          yDirection = -1;
        }
        if (y <= -25) {
          yDirection = 1;
        }
      }, 10);
      setTimeout(function() {
        clearInterval(interval);
        homePage.removeChild(surprise);
      }, 7000);
      break;
    default:
      // Display a default message
      var surprise = document.createElement('div');
      surprise.innerHTML = `I\'m Sorry I Don\'t recognize, ${username.value} , is There Anything Else You Want To Tell Me?`; // you can also use: 'Undefine'
      // Animate the element as before
      surprise.style.position = 'absolute';
      surprise.style.top = '50%';
      surprise.style.left = '50%';
      surprise.style.marginTop = '-25px';
      surprise.style.marginLeft = '-175px';
      surprise.style.color = 'red';
      surprise.style.fontWeight = 'bold';
      homePage.appendChild(surprise);
      var x = 0;
      var y = 0;
      var xDirection = 1;
      var yDirection = 1;
      var interval = setInterval(function() {
        x += xDirection;
        y += yDirection;
        surprise.style.marginLeft = -175 + x + 'px';
        surprise.style.marginTop = -25 + y + 'px';
        if (x >= 175) {
          xDirection = -1;
        }
        if (x <= -175) {
          xDirection = 1;
        }
        if (y >= 25) {
          yDirection = -1;
        }
        if (y <= -25) {
          yDirection = 1;
        }
      }, 10);
      setTimeout(function() {
        clearInterval(interval);
        homePage.removeChild(surprise);
      }, 7000);
      break;
  }
};
