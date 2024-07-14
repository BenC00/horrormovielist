document.addEventListener('DOMContentLoaded', () => {
  const movies = [
    { id: 'movie1', title: 'Alien' },
    { id: 'movie2', title: 'Psycho' },
    { id: 'movie3', title: 'The Shining' },
    { id: 'movie4', title: 'The Thing' },
    { id: 'movie5', title: 'Tumbbad' },
    { id: 'movie6', title: 'The Exorcist' },
    { id: 'movie7', title: 'Diabolique' },
    { id: 'movie8', title: 'Rosemary\'s Baby' },
    { id: 'movie9', title: 'What Ever Happened to Baby Jane?' },
    { id: 'movie10', title: 'The Cabinet of Dr. Caligari' },
    { id: 'movie11', title: 'The Blue Elephant' },
    { id: 'movie12', title: 'Shaun of the Dead' },
    { id: 'movie13', title: 'Nosferatu' },
    { id: 'movie14', title: 'Let the Right One In' },
    { id: 'movie15', title: 'King Kong' },
    { id: 'movie16', title: 'Get Out' },
    { id: 'movie17', title: 'Predator' },
    { id: 'movie18', title: 'I Saw the Devil' },
    { id: 'movie19', title: 'Dawn of the Dead' },
    { id: 'movie20', title: 'Night of the Living Dead' },
    { id: 'movie21', title: 'Freaks' },
    { id: 'movie22', title: 'Frankenstein' },
    { id: 'movie23', title: 'The Innocents' },
    { id: 'movie24', title: 'The Bride of Frankenstein' },
    { id: 'movie25', title: 'Evil Dead II' },
    { id: 'movie26', title: 'Halloween' },
    { id: 'movie27', title: 'Invasion of the Body Snatchers' },
    { id: 'movie28', title: 'American Psycho' },
    { id: 'movie29', title: 'Saw' },
    { id: 'movie30', title: 'Train to Busan' },
    { id: 'movie31', title: 'The Fly' },
    { id: 'movie32', title: 'Zombieland' },
    { id: 'movie33', title: 'The Birds' },
    { id: 'movie34', title: 'The Skin I Live In' },
    { id: 'movie35', title: 'The Others' },
    { id: 'movie36', title: 'What We Do in the Shadows' },
    { id: 'movie37', title: 'Eyes Without a Face' },
    { id: 'movie38', title: 'Vampire Hunter D: Bloodlust' },
    { id: 'movie39', title: 'Repulsion' },
    { id: 'movie40', title: 'One Cut of the Dead' },
    { id: 'movie41', title: 'The Invisible Man' },
    { id: 'movie42', title: 'Peeping Tom' },
    { id: 'movie43', title: 'The Conjuring' },
    { id: 'movie44', title: 'A Quiet Place' },
    { id: 'movie45', title: '28 Days Later' },
    { id: 'movie46', title: 'Interview with the Vampire: The Vampire Chronicles' },
    { id: 'movie47', title: 'The Crow' },
    { id: 'movie48', title: 'An American Werewolf in London' },
    { id: 'movie49', title: 'Tucker and Dale vs Evil' },
    { id: 'movie50', title: 'The Wicker Man' },
    { id: 'movie51', title: 'The Omen' },
    { id: 'movie52', title: 'Grindhouse' },
    { id: 'movie53', title: 'Braindead' },
    { id: 'movie54', title: 'Godzilla' },
    { id: 'movie55', title: 'Deep Red' },
    { id: 'movie56', title: 'Stree' },
    { id: 'movie57', title: 'The Evil Dead' },
    { id: 'movie58', title: 'Scream' },
    { id: 'movie59', title: 'Bram Stoker\'s Dracula' },
    { id: 'movie60', title: 'Army of Darkness' },
    { id: 'movie61', title: 'The Rocky Horror Picture Show' },
    { id: 'movie62', title: 'A Nightmare on Elm Street' },
    { id: 'movie63', title: 'The Texas Chain Saw Massacre' },
    { id: 'movie64', title: 'Carrie' },
    { id: 'movie65', title: 'The Wailing' },
    { id: 'movie66', title: 'Jacob\'s Ladder' },
    { id: 'movie67', title: 'Invasion of the Body Snatchers' },
    { id: 'movie68', title: 'REC' },
    { id: 'movie69', title: 'The Orphanage' },
    { id: 'movie70', title: 'Nosferatu the Vampyre' },
    { id: 'movie71', title: 'Dracula' },
    { id: 'movie72', title: 'The Devil\'s Backbone' },
    { id: 'movie73', title: 'The Haunting' },
    { id: 'movie74', title: 'Thesis' },
    { id: 'movie75', title: 'Bhool Bhulaiyaa' },
    { id: 'movie76', title: 'Hereditary' },
    { id: 'movie77', title: 'It' },
    { id: 'movie78', title: 'Split' },
    { id: 'movie79', title: 'Doctor Sleep' },
    { id: 'movie80', title: 'Dawn of the Dead' },
    { id: 'movie81', title: 'Possession' },
    { id: 'movie82', title: 'Poltergeist' },
    { id: 'movie83', title: 'Sweeney Todd: The Demon Barber of Fleet Street' },
    { id: 'movie84', title: 'Gremlins' },
    { id: 'movie85', title: 'The Conjuring 2' },
    { id: 'movie86', title: 'Sleepy Hollow' },
    { id: 'movie87', title: 'Take Shelter' },
    { id: 'movie88', title: 'Eraserhead' },
    { id: 'movie89', title: 'Suspiria' },
    { id: 'movie90', title: 'The Return of the Living Dead' },
    { id: 'movie91', title: 'Twin Peaks: Fire Walk with Me' },
    { id: 'movie92', title: 'House' },
    { id: 'movie93', title: 'Pi' },
    { id: 'movie94', title: 'The Hidden Face' },
    { id: 'movie95', title: 'Bacurau' },
    { id: 'movie96', title: 'The Menu' },
    { id: 'movie97', title: 'From Dusk Till Dawn' },
    { id: 'movie98', title: 'The Lost Boys' },
    { id: 'movie99', title: 'A Quiet Place Part II' },
    { id: 'movie100', title: 'The Descent' },
    { id: 'movie101', title: 'They Live' },
    { id: 'movie102', title: 'I Am Legend' },
    { id: 'movie103', title: '10 Cloverfield Lane' },
    { id: 'movie104', title: 'Dead Ringers' },
    { id: 'movie105', title: 'Angel Heart' },
    { id: 'movie106', title: 'An American Crime' },
    { id: 'movie107', title: 'Videodrome' },
    { id: 'movie108', title: 'Re-Animator' },
    { id: 'movie109', title: 'Only Lovers Left Alive' },
    { id: 'movie110', title: 'The Changeling' },
    { id: 'movie111', title: 'Ringu' },
    { id: 'movie112', title: 'The Dead Zone' },
    { id: 'movie113', title: 'Sleep Tight' },
    { id: 'movie114', title: 'Horror of Dracula' },
    { id: 'movie115', title: 'The Wolf Man' },
    { id: 'movie116', title: 'Midsommar' },
    { id: 'movie117', title: 'The Ring' },
    { id: 'movie118', title: 'Prey' },
    { id: 'movie119', title: 'The Mist' },
    { id: 'movie120', title: 'Don\'t Breathe' },
    { id: 'movie121', title: 'Little Shop of Horrors' },
    { id: 'movie122', title: 'Blade' },
    { id: 'movie123', title: 'Bone Tomahawk' },
    { id: 'movie124', title: 'The Invisible Man' },
    { id: 'movie125', title: 'Tremors' },
    { id: 'movie126', title: 'Planet Terror' },
    { id: 'movie127', title: 'The Call' },
    { id: 'movie128', title: 'Don\'t Look Now' },
    { id: 'movie129', title: 'Let Me In' },
    { id: 'movie130', title: 'Cube' },
    { id: 'movie131', title: 'The Frighteners' },
    { id: 'movie132', title: 'Audition' },
    { id: 'movie133', title: 'In the Mouth of Madness' },
    { id: 'movie134', title: 'The Host' },
    { id: 'movie135', title: 'The Thing from Another World' },
    { id: 'movie136', title: 'Day of the Dead' },
    { id: 'movie137', title: 'Timecrimes' },
    { id: 'movie138', title: 'Black Christmas' },
    { id: 'movie139', title: 'A Tale of Two Sisters' },
    { id: 'movie140', title: 'Thirst' },
    { id: 'movie141', title: 'The Fearless Vampire Killers' },
    { id: 'movie142', title: 'Pearl' },
    { id: 'movie143', title: 'Barbarian' },
    { id: 'movie144', title: 'Orphan' },
    { id: 'movie145', title: 'Last Night in Soho' },
    { id: 'movie146', title: 'The Platform' },
    { id: 'movie147', title: 'Cloverfield' },
    { id: 'movie148', title: 'The Cabin in the Woods' },
    { id: 'movie149', title: 'Martyrs' },
    { id: 'movie150', title: 'The Killing of a Sacred Deer' },
    { id: 'movie151', title: 'World War Z' },
    { id: 'movie152', title: 'Constantine' },
    { id: 'movie153', title: 'Pitch Black' },
    { id: 'movie154', title: 'Hotel Transylvania' },
    { id: 'movie155', title: 'Hellboy II: The Golden Army' },
    { id: 'movie156', title: 'Green Room' },
    { id: 'movie157', title: 'Fright Night' },
    { id: 'movie158', title: 'Raw' },
    { id: 'movie159', title: 'Brotherhood of the Wolf' },
    { id: 'movie160', title: 'Shutter' },
    { id: 'movie161', title: 'Thelma' },
    { id: 'movie162', title: 'Henry: Portrait of a Serial Killer' },
    { id: 'movie163', title: 'Tenebrae' },
    { id: 'movie164', title: 'Carnival of Souls' },
    { id: 'movie165', title: 'The Mummy' },
    { id: 'movie166', title: 'Doctor Strange in the Multiverse of Madness' },
    { id: 'movie167', title: 'The Black Phone' },
    { id: 'movie168', title: 'The VVitch: A New-England Folktale' },
    { id: 'movie169', title: 'Climax' },
    { id: 'movie170', title: '28 Weeks Later' },
    { id: 'movie171', title: 'Hocus Pocus' },
    { id: 'movie172', title: 'Hellraiser' },
    { id: 'movie173', title: 'Near Dark' },
    { id: 'movie174', title: 'Ravenous' },
    { id: 'movie175', title: 'Altered States' },
    { id: 'movie176', title: 'Stir of Echoes' },
    { id: 'movie177', title: 'Bubba Ho-Tep' },
    { id: 'movie178', title: 'A Girl Walks Home Alone at Night' },
    { id: 'movie179', title: 'The Monster Squad' },
    { id: 'movie180', title: 'Creature from the Black Lagoon' },
    { id: 'movie181', title: 'Troll Hunter' },
    { id: 'movie182', title: 'Shadow of the Vampire' },
    { id: 'movie183', title: 'Frankenweenie' },
    { id: 'movie184', title: 'Bhoot Police' },
    { id: 'movie185', title: 'Nope' },
    { id: 'movie186', title: 'Bones and All' },
    { id: 'movie187', title: 'Ready or Not' },
    { id: 'movie188', title: 'Insidious' },
    { id: 'movie189', title: 'It Follows' },
    { id: 'movie190', title: 'Annihilation' },
    { id: 'movie191', title: 'Sinister' },
    { id: 'movie192', title: 'Us' },
    { id: 'movie193', title: 'The House That Jack Built' },
    { id: 'movie194', title: 'The Babadook' },
    { id: 'movie195', title: 'The Autopsy of Jane Doe' },
    { id: 'movie196', title: 'Warm Bodies' },
    { id: 'movie197', title: 'Hellboy' },
    { id: 'movie198', title: 'Odd Thomas' },
    { id: 'movie199', title: 'Exam' },
    { id: 'movie200', title: '1408' },
    { id: 'movie201', title: 'The Fog' },
    { id: 'movie202', title: 'Creepshow' },
    { id: 'movie203', title: 'Ginger Snaps' },
    { id: 'movie204', title: 'The Witches' },
    { id: 'movie205', title: 'eXistenZ' },
    { id: 'movie206', title: 'Dog Soldiers' },
    { id: 'movie207', title: 'Dead Calm' },
    { id: 'movie208', title: 'Shin Godzilla' },
    { id: 'movie209', title: 'Zombie' },
    { id: 'movie210', title: 'The Brood' },
    { id: 'movie211', title: 'Night of the Living Dead' },
    { id: 'movie212', title: 'House on Haunted Hill' },
    { id: 'movie213', title: 'Stonehearst Asylum' },
    { id: 'movie214', title: 'Under the Shadow' },
    { id: 'movie215', title: 'Dead Snow 2: Red vs. Dead' },
    { id: 'movie216', title: 'Evil Dead Rise' },
    { id: 'movie217', title: 'Suspiria' },
    { id: 'movie218', title: 'Eden Lake' },
    { id: 'movie219', title: 'Final Destination' },
    { id: 'movie220', title: 'Fresh' },
    { id: 'movie221', title: 'Zombieland: Double Tap' },
    { id: 'movie222', title: 'The Devil\'s Rejects' },
    { id: 'movie223', title: 'Pandorum' },
    { id: 'movie224', title: 'Christine' },
    { id: 'movie225', title: 'Marrowbone' },
    { id: 'movie226', title: 'The Gift' },
    { id: 'movie227', title: 'Blade II' },
    { id: 'movie228', title: 'High Tension' },
    { id: 'movie229', title: 'Candyman' },
    { id: 'movie230', title: 'Return to Oz' },
    { id: 'movie231', title: 'Saint Maud' },
    { id: 'movie232', title: 'From Hell' },
    { id: 'movie233', title: 'Fear Street: Part Two - 1978' },
    { id: 'movie234', title: 'Scanners' },
    { id: 'movie235', title: 'The Exorcism of Emily Rose' },
    { id: 'movie236', title: 'Summer of 84' },
    { id: 'movie237', title: 'Inside' },
    { id: 'movie238', title: 'Trick \'r Treat' },
    { id: 'movie239', title: 'Phenomena' },
    { id: 'movie240', title: 'Where the Wild Things Are' },
    { id: 'movie241', title: 'Goodnight Mommy' },
    { id: 'movie242', title: 'Spring' },
    { id: 'movie243', title: 'Tales from the Crypt: Demon Knight' },
    { id: 'movie244', title: 'Ju-on: The Grudge' },
    { id: 'movie245', title: 'Turbo Kid' },
    { id: 'movie246', title: 'Cronos' },
    { id: 'movie247', title: 'Housebound' },
    { id: 'movie248', title: 'Dark Water' },
    { id: 'movie249', title: 'Los ojos de Julia' },
    { id: 'movie250', title: 'Fido' },
    { id: 'movie251', title: 'X II' },
    { id: 'movie252', title: 'Scream VI' },
    { id: 'movie253', title: 'The Pale Blue Eye' },
    { id: 'movie254', title: 'Bird Box' },
    { id: 'movie255', title: 'Mother!' },
    { id: 'movie256', title: 'Event Horizon' },
    { id: 'movie257', title: 'Speak No Evil' },
    { id: 'movie258', title: 'Life I' },
    { id: 'movie259', title: 'Resident Evil' },
    { id: 'movie260', title: 'You\'re Next' },
    { id: 'movie261', title: 'The Faculty' },
    { id: 'movie262', title: 'Glass' },
    { id: 'movie263', title: 'Drag Me to Hell' },
    { id: 'movie264', title: '30 Days of Night' },
    { id: 'movie265', title: 'What Lies Beneath' },
    { id: 'movie266', title: 'Death Becomes Her' },
    { id: 'movie267', title: 'Child\'s Play' },
    { id: 'movie268', title: 'The Invitation I' },
    { id: 'movie269', title: 'Happy Death Day' },
    { id: 'movie270', title: 'Overlord' },
    { id: 'movie271', title: 'Hush I' },
    { id: 'movie272', title: 'Prince of Darkness' },
    { id: 'movie273', title: 'Saw II' },
    { id: 'movie274', title: 'From Beyond' },
    { id: 'movie275', title: 'A Nightmare on Elm Street 3: Dream Warriors' },
    { id: 'movie276', title: 'Hotel Transylvania 2' },
    { id: 'movie277', title: 'The Hunger' },
    { id: 'movie278', title: 'The Blob' },
    { id: 'movie279', title: 'The Loved Ones' },
    { id: 'movie280', title: 'Psycho II' },
    { id: 'movie281', title: 'May' },
    { id: 'movie282', title: 'Phantasm' },
    { id: 'movie283', title: 'Rare Exports' },
    { id: 'movie284', title: 'The Girl with All the Gifts' },
    { id: 'movie285', title: 'Fear Street: Part Three - 1666' },
    { id: 'movie286', title: 'Demons' },
    { id: 'movie287', title: 'The Eye' },
    { id: 'movie288', title: 'Smile V' },
    { id: 'movie289', title: 'Evil Dead' },
    { id: 'movie290', title: 'It Chapter Two' },
    { id: 'movie291', title: 'Gerald\'s Game' },
    { id: 'movie292', title: 'The Hunt II' },
    { id: 'movie293', title: 'Silent Hill' },
    { id: 'movie294', title: 'Antichrist' },
    { id: 'movie295', title: 'Insidious: Chapter 2' },
    { id: 'movie296', title: 'The Last House on the Left' },
    { id: 'movie297', title: 'The Night House' },
    { id: 'movie298', title: 'Host II' },
    { id: 'movie299', title: 'Mandy I' },
    { id: 'movie300', title: 'The Girl Next Door' }
      // Add more movies as needed
  ];

  const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
  
  const movieList = document.getElementById('movie-list');
  const seenPageButton = document.getElementById('seenPageButton');
  const unseenPageButton = document.getElementById('unseenPageButton');
  const backToListButton = document.getElementById('backToListButton');
  const resetListButton = document.getElementById('resetListButton');

    if (movieList) {
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<label>
                <input type="checkbox" id="${movie.id}" /> ${movie.title}
            </label>`;
            movieList.appendChild(listItem);

            const checkbox = document.getElementById(movie.id);
            checkbox.checked = savedStates[movie.id] || false;

            // Apply checked class based on saved state
            if (checkbox.checked) {
                listItem.classList.add('checked');
            }

            checkbox.addEventListener('change', () => {
                savedStates[movie.id] = checkbox.checked;
                localStorage.setItem('checkboxStates', JSON.stringify(savedStates));

                // Update class based on checkbox state
                if (checkbox.checked) {
                    listItem.classList.add('checked');
                } else {
                    listItem.classList.remove('checked');
                }
            });
        });
    }

  if (seenPageButton) {
      seenPageButton.addEventListener('click', () => {
          window.location.href = 'seen.html';
      });
  }

  if (unseenPageButton) {
      unseenPageButton.addEventListener('click', () => {
          generateUnseenMoviesList();
          window.location.href = 'unseen.html';
      });
  }

  if (backToListButton) {
      backToListButton.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }

  if (resetListButton) {
    resetListButton.addEventListener('click', () => {
        // Clear local storage
        localStorage.clear();
        // Redirect to the desired page
        window.location.href = 'index.html';
    });
  }

  if (window.location.pathname.endsWith('seen.html')) {
      const moviesSeenCount = document.getElementById('moviesSeenCount');
      const seenMovieList = document.getElementById('seen-movie-list');

      if (moviesSeenCount && seenMovieList) {
          const seenMovies = movies.filter(movie => savedStates[movie.id]);
          moviesSeenCount.textContent = `You have seen ${seenMovies.length} movies.`;

          seenMovies.forEach(movie => {
              const li = document.createElement('li');
              li.textContent = movie.title;
              seenMovieList.appendChild(li);
          });
      }
  }

  if (window.location.pathname.endsWith('unseen.html')) {
      const unseenMovieList = document.getElementById('unseen-movie-list');
      const moviesUnseenCount = document.getElementById('moviesUnseenCount');

      if (unseenMovieList && moviesUnseenCount) {
          const unseenMovies = getUnseenMovies(movies, savedStates);
          moviesUnseenCount.textContent = `You have ${unseenMovies.length} movies left to watch!`;

          unseenMovies.forEach(movie => {
              const li = document.createElement('li');
              li.textContent = movie.title;
              unseenMovieList.appendChild(li);
          });
      }
  }
});

function generateUnseenMoviesList() {
  const movies = [
      { id: 'movie1', title: 'The Exorcist' },
      { id: 'movie2', title: 'The Shining' },
      { id: 'movie3', title: 'A Nightmare on Elm Street' },
      { id: 'movie4', title: 'Halloween' },
      { id: 'movie5', title: 'The Conjuring' },
      { id: 'movie6', title: 'Hereditary' },
      { id: 'movie7', title: 'Get Out' },
      { id: 'movie8', title: 'It Follows' },
      { id: 'movie9', title: 'The Babadook' },
      { id: 'movie10', title: 'Midsommar' },
  ];

  const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
  const unseenMovies = movies.filter(movie => !savedStates[movie.id]);
  localStorage.setItem('unseenMovies', JSON.stringify(unseenMovies));
}

function getUnseenMovies(movies, savedStates) {
  return movies.filter(movie => !savedStates[movie.id]);
}
