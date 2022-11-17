let displayElement = document.getElementById('displayElement');

let jsonDatabase = [
  {
    "characterImage" : "ahn-jeong-won.png",
    "characterName" : "Ahn Jeong-won",
    "characterNickname" : "Andrea (baptismal name), Buddha",
    "characterRole" : "Professor of Pediatric Surgery",
    "bandPosition" : "drummer",
    "characterDescription" : "Ahn Jeong-won is an overly sensitive doctor who has a heart of gold. Due to his hypersensitivity, he has been trying to quit being a doctor and become a priest like all his brothers (and his sisters are nuns). Despite being a catholic, everyone in the hospital gave him the nickname “Buddha” because of his kindness and patience.",
    "actorName" : "Yoo Yeon-seok"
  },

  {
    "characterImage" : "yang-seok-hyeong.png",
    "characterName" : "Yang Seok-hyeong",
    "characterNickname" : "Bear",
    "characterRole" : "Professor of Obstetrics and Gynecology Surgery",
    "bandPosition" : "keyboard",
    "characterDescription": "Because of all of the things that is going on his personal life, Yang Seok-hyeong rather spends his time alone watching variety/comedy TV shows. But after his closest friends start working at Yulje Hospital, he suggested that they should re-create their band in college as a way to distract himself from his personal problems. Furthermore, because of his big body build, quietness, and calm-spoken voice, everyone nicknamed him “Bear”.",
    "actorName" : "Kim Dae-myeong"

  },

  {
    "characterImage" : "kim-jun-wan.png",
    "characterName" : "Kim Jun-wan",
    "characterNickname" : "Buddha's friend (by Do Jae-hak), Tsundere (by fans)",
    "characterRole" : "Professor of Cardiothoracic Surgery",
    "bandPosition" : "guitarist",
    "characterDescription": "Although he seems very cold and sarcastic towards everyone at the hospital, he is actually the most sweet, caring, and empathetic person in his own secretive way.",
    "actorName" : "Jeong Kyeong-ho"
  },

  {
    "characterImage" : "lee-ik-jun.png",
    "characterName" : "Lee Ik-jun",
    "characterNickname" : "none",
    "characterRole" : "Professor of Hepato-Biliary-Pancreatic Surgery",
    "bandPosition" : "lead vocalist & guitarist",
    "characterDescription": "Lee Ik-jun is almost a perfect man, he is loved by everyone in the hospital and a genius at everything (he can go clubbing all night and still ace the exam the next day - true story). However, he is missing one thing, a good love life...although he has a very adorable son named U-ju.",

    "actorName" : "Jo Jeong-seok"
  },

  {
    "characterImage" : "chae-song-hwa.png",
    "characterName" : "Chae Song-hwa",
    "characterNickname" : "ghost",
    "characterRole" : "Professor of Neurological Surgery",
    "bandPosition" : "bass guitarist",
    "characterDescription": "Chae Song-hwa has a sunny personality, and is loved by everyone at the hospital; though she can be very stern and serious when it comes to surgery and her patients' wellness. She is nicknamed “ghost” by her hoobaes (a Korean word that refers to people with less experience than you in school or work) because she can do everything from surgery, checking thesis papers for her hoobaes, camping on the weekend, self-care, etc. and still arrives at work cheerfully at 7 in the morning.",
    "actorName" : "Jeon Mi-do"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newImageElement = document.createElement("DIV");
  newImageElement.classList.add('contentItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['characterImage'];
  newImageElement.appendChild(newImage);

  //////////////////////////////////////////////////////////////////////////////

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('newContentElement');

  let newContentCharacter = document.createElement("P");
  newContentCharacter.innerText = "Name: " + incomingJSON['characterName'];
  newContentElement.appendChild(newContentCharacter);

  let newContentNickname = document.createElement("P");
  newContentNickname.innerText = "Nickname: " + incomingJSON['characterNickname'];
  newContentElement.appendChild(newContentNickname);

  let newContentRole = document.createElement("P");
  newContentRole.innerText = "Role: " + incomingJSON['characterRole'];
  newContentElement.appendChild(newContentRole);

  let newContentPosition = document.createElement("P");
  newContentPosition.innerText = "Band Position: " + incomingJSON['bandPosition'];
  newContentElement.appendChild(newContentPosition);

  let newContentDescription = document.createElement("P");
  newContentDescription.innerText = "Description: " + incomingJSON['characterDescription'];
  newContentElement.appendChild(newContentDescription);

  let newContentActor = document.createElement("P");
  newContentActor.innerText = "Played By: " + incomingJSON['actorName'];
  newContentElement.appendChild(newContentActor);

  displayElement.appendChild(newImageElement);
  newImageElement.appendChild(newContentElement);

}
