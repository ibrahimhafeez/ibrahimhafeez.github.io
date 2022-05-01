const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
const startingWord = document.querySelector("#strt-word") 
const anyWord = document.querySelector("#search-word") 
const input =  document.querySelector(".inputBox") 
const alphabet = document.querySelector(".alphabet") 
const number = document.querySelector(".number") 
const hiddenText = document.querySelector(".hiddenText") 
const container = document.querySelector("#characterList") 
const list = document.querySelector(".character") 
const ascending = document.querySelector("#ascending") 
const randomWord = document.querySelector("#search-word") 
const startWord = document.querySelector("#strt-word") 

const htmlString = countries.map((country) => { 
 
  return ` 
<li class="character"> 
<h2>${country}</h2> 
 
</li> 
`; 
}) 
.join(''); 
container.innerHTML = htmlString; 


 
 
randomWord.addEventListener('click', e => { 
input.addEventListener("keyup", e => { 
  const searchTarget = e.target.value.toLowerCase() 
  hiddenText.style.display = "block" 
 alphabet.textContent = input.value 
 number.textContent = input.value.length 
 
 const filteredChars = countries.filter((character) => { 
    
   if (input.value === "") { 
     hiddenText.style.display = "none" 
   } 
   return ( 
     character.toLowerCase().includes(searchTarget) 
      
   ) 
   })  
 
   ascending.addEventListener("click", () => { 
  const reversedWords =  filteredChars.reverse() 
  const reverseMap = reversedWords.map((words) => { 
    return ` 
    <li class="character"> 
        <h2>${words}</h2> 
         
    </li> 
`; 
      }) 
      .join(''); 
      container.innerHTML = reverseMap; 
     
    
   }) 
    
number.textContent = filteredChars.length 
 
   displayCharacters(filteredChars) 
  }) 
   
 
const displayCharacters = (characters) => { 
  const htmlString = characters.map((character) => { 
 
    return ` 
    <li class="character"> 
        <h2>${character}</h2> 
         
    </li> 
`; 
      }) 
      .join(''); 
      container.innerHTML = htmlString; 
     
  };  
}) 
   
 
startWord.addEventListener('click', e => { 
input.addEventListener("keyup", e => { 
  const searchTarget = e.target.value.toLowerCase() 
  hiddenText.style.display = "block" 
 alphabet.textContent = input.value 
 number.textContent = input.value.length 
 
 const strtWord = countries.filter((woah) => { 
    
   if (input.value === "") { 
     hiddenText.style.display = "none" 
   } 
   return ( 
     woah.toLowerCase().startsWith(searchTarget) 
      
   ) 
   })  
 
   ascending.addEventListener("click", () => { 
  const reversedWords =  strtWord.reverse() 
  const reverseMap = reversedWords.map((words) => { 
    return ` 
    <li class="character"> 
        <h2>${words}</h2> 
         
    </li> 
`; 
      }) 
      .join(''); 
      container.innerHTML = reverseMap; 
     
    
   }) 
    
number.textContent = startWord.length 
 
   displayCharacterso(strtWord) 
  }) 
   
 
const displayCharacterso = (characters) => { 
  const htmlString = characters.map((character) => { 
 
    return ` 
    <li class="character"> 
        <h2>${character}</h2> 
         
    </li> 
`; 
      }) 
      .join(''); 
      container.innerHTML = htmlString; 
     
  };  
}) 