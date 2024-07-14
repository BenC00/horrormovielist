document.addEventListener('DOMContentLoaded', () => {
  const movies = [
    { id: 'movie1', title: 'Psycho' },
    { id: 'movie2', title: 'The Shining' },
    { id: 'movie3', title: 'The Exorcist' },
    { id: 'movie4', title: 'Halloween' },
    { id: 'movie5', title: 'A Nightmare on Elm Street' },
    { id: 'movie6', title: 'The Texas Chain Saw Massacre' },
    { id: 'movie7', title: 'Night of the Living Dead' },
    { id: 'movie8', title: 'Jaws' },
    { id: 'movie9', title: 'Rosemary\'s Baby' },
    { id: 'movie10', title: 'Alien' },
    { id: 'movie11', title: 'The Silence of the Lambs' },
    { id: 'movie12', title: 'The Thing' },
    { id: 'movie13', title: 'Get Out' },
    { id: 'movie14', title: 'Hereditary' },
    { id: 'movie15', title: 'It Follows' },
    { id: 'movie16', title: 'The Babadook' },
    { id: 'movie17', title: 'The Blair Witch Project' },
    { id: 'movie18', title: 'Saw' },
    { id: 'movie19', title: 'The Conjuring' },
    { id: 'movie20', title: 'Poltergeist' },
    { id: 'movie21', title: 'Suspiria' },
    { id: 'movie22', title: 'The Ring' },
    { id: 'movie23', title: 'The Sixth Sense' },
    { id: 'movie24', title: 'REC' },
    { id: 'movie25', title: '28 Days Later' },
    { id: 'movie26', title: 'The Witch' },
    { id: 'movie27', title: 'Don\'t Look Now' },
    { id: 'movie28', title: 'Candyman' },
    { id: 'movie29', title: 'The Others' },
    { id: 'movie30', title: 'The Descent' },
    { id: 'movie31', title: 'Paranormal Activity' },
    { id: 'movie32', title: 'The Cabin in the Woods' },
    { id: 'movie33', title: 'Drag Me to Hell' },
    { id: 'movie34', title: 'Midsommar' },
    { id: 'movie35', title: 'The Omen' },
    { id: 'movie36', title: 'Carrie' },
    { id: 'movie37', title: 'The Haunting' },
    { id: 'movie38', title: 'The Wicker Man' },
    { id: 'movie39', title: 'The Orphanage' },
    { id: 'movie40', title: 'The Babysitter' },
    { id: 'movie41', title: 'Insidious' },
    { id: 'movie42', title: 'Host' },
    { id: 'movie43', title: 'Sinister' },
    { id: 'movie44', title: 'The Grudge' },
    { id: 'movie45', title: 'Hellraiser' },
    { id: 'movie46', title: 'Audition' },
    { id: 'movie47', title: 'Ju-on: The Grudge' },
    { id: 'movie48', title: 'I Saw the Devil' },
    { id: 'movie49', title: 'The Devil\'s Backbone' },
    { id: 'movie50', title: 'The Mist' },
    { id: 'movie51', title: 'Let the Right One In' },
    { id: 'movie52', title: 'The Fly' },
    { id: 'movie53', title: 'A Tale of Two Sisters' },
    { id: 'movie54', title: 'A Quiet Place' },
    { id: 'movie55', title: 'The Hills Have Eyes' },
    { id: 'movie56', title: 'Invasion of the Body Snatchers' },
    { id: 'movie57', title: 'Black Swan' },
    { id: 'movie58', title: 'It' },
    { id: 'movie59', title: 'The Invisible Man' },
    { id: 'movie60', title: 'Cube' },
    { id: 'movie61', title: '28 Weeks Later' },
    { id: 'movie62', title: 'American Psycho' },
    { id: 'movie63', title: 'Annabelle' },
    { id: 'movie64', title: 'Annabelle: Creation' },
    { id: 'movie65', title: 'The Autopsy of Jane Doe' },
    { id: 'movie66', title: 'Bird Box' },
    { id: 'movie67', title: 'The Birds' },
    { id: 'movie68', title: 'The Blob' },
    { id: 'movie69', title: 'The Boy' },
    { id: 'movie70', title: 'The Bye Bye Man' },
    { id: 'movie71', title: 'Cabin Fever' },
    { id: 'movie72', title: 'The Cell' },
    { id: 'movie73', title: 'Child\'s Play' },
    { id: 'movie74', title: 'The Cloverfield Paradox' },
    { id: 'movie75', title: 'The Collector' },
    { id: 'movie76', title: 'The Conjuring 2' },
    { id: 'movie77', title: 'Creep' },
    { id: 'movie78', title: 'The Crazies' },
    { id: 'movie79', title: 'Creepshow' },
    { id: 'movie80', title: 'Dark Water' },
    { id: 'movie81', title: 'Dawn of the Dead' },
    { id: 'movie82', title: 'Day of the Dead' },
    { id: 'movie83', title: 'The Dead Zone' },
    { id: 'movie84', title: 'Deliver Us from Evil' },
    { id: 'movie85', title: 'Devil' },
    { id: 'movie86', title: 'Doctor Sleep' },
    { id: 'movie87', title: 'The Evil Dead' },
    { id: 'movie88', title: 'The Evil Dead II' },
    { id: 'movie89', title: 'The Exorcism of Emily Rose' },
    { id: 'movie90', title: 'Fright Night' },
    { id: 'movie91', title: 'Gerald\'s Game' },
    { id: 'movie92', title: 'The Girl with All the Gifts' },
    { id: 'movie93', title: 'Happy Death Day' },
    { id: 'movie94', title: 'The Haunting of Hill House' },
    { id: 'movie95', title: 'The Hollow One' },
    { id: 'movie96', title: 'The Innkeepers' },
    { id: 'movie97', title: 'It Comes at Night' },
    { id: 'movie98', title: 'Let Us Prey' },
    { id: 'movie99', title: 'Malignant' },
    { id: 'movie100', title: 'May' },
    { id: 'movie101', title: 'Misery' },
    { id: 'movie102', title: 'The Night of the Hunter' },
    { id: 'movie103', title: 'The Nun' },
    { id: 'movie104', title: 'Oculus' },
    { id: 'movie105', title: 'The Orphanage' },
    { id: 'movie106', title: 'Pet Sematary' },
    { id: 'movie107', title: 'The Possession' },
    { id: 'movie108', title: 'The Purge' },
    { id: 'movie109', title: 'Ravenous' },
    { id: 'movie110', title: 'Rec 2' },
    { id: 'movie111', title: 'Scary Stories to Tell in the Dark' },
    { id: 'movie112', title: 'Scream' },
    { id: 'movie113', title: 'Scream 2' },
    { id: 'movie114', title: 'Scream 3' },
    { id: 'movie115', title: 'Scream 4' },
    { id: 'movie116', title: 'Se7en' },
    { id: 'movie117', title: 'Session 9' },
    { id: 'movie118', title: 'Sinister 2' },
    { id: 'movie119', title: 'The Skeleton Key' },
    { id: 'movie120', title: 'The Taking of Deborah Logan' },
    { id: 'movie121', title: 'Teeth' },
    { id: 'movie122', title: 'The Texas Chainsaw Massacre (2003)' },
    { id: 'movie123', title: 'Thirteen Ghosts' },
    { id: 'movie124', title: '1408' },
    { id: 'movie125', title: 'Veronika' },
    { id: 'movie126', title: 'What Lies Beneath' },
    { id: 'movie127', title: 'Wreck' },
    { id: 'movie128', title: 'Wreck 2' },
    { id: 'movie129', title: 'You’re Next' },
    { id: 'movie130', title: 'The Last House on the Left' },
    { id: 'movie131', title: 'A Girl Walks Home Alone at Night' },
    { id: 'movie132', title: 'The Gift' },
    { id: 'movie133', title: 'The Grudge 2' },
    { id: 'movie134', title: 'The Grudge 3' },
    { id: 'movie135', title: 'The Conjuring: The Devil Made Me Do It' },
    { id: 'movie136', title: 'I Know What You Did Last Summer' },
    { id: 'movie137', title: 'Raw' },
    { id: 'movie138', title: 'The Witch in the Window' },
    { id: 'movie139', title: 'Candyman (2021)' },
    { id: 'movie140', title: 'The Conjuring Universe' },
    { id: 'movie141', title: 'Trick \'r Treat' },
    { id: 'movie142', title: 'The Possession of Hannah Grace' },
    { id: 'movie143', title: 'Truth or Dare' },
    { id: 'movie144', title: 'Countdown' },
    { id: 'movie145', title: 'The Slumber Party Massacre' },
    { id: 'movie146', title: 'The Invitation' },
    { id: 'movie147', title: 'The Lodge' },
    { id: 'movie148', title: 'Hell Fest' },
    { id: 'movie149', title: 'Fear Street Trilogy' },
    { id: 'movie150', title: 'The Belko Experiment' },
    { id: 'movie151', title: 'Happy Death Day 2U' },
    { id: 'movie152', title: 'The Night House' },
    { id: 'movie153', title: 'The House of the Devil' },
    { id: 'movie154', title: 'Grave Encounters' },
    { id: 'movie155', title: 'The Eyes of My Mother' },
    { id: 'movie156', title: 'The Loved Ones' },
    { id: 'movie157', title: 'The Girl Next Door' },
    { id: 'movie158', title: 'Clown' },
    { id: 'movie159', title: 'The Taking of Pelham 123' },
    { id: 'movie160', title: 'The Eye' },
    { id: 'movie161', title: 'The Thing (2011)' },
    { id: 'movie162', title: 'The Ring Two' },
    { id: 'movie163', title: 'The Haunting in Connecticut' },
    { id: 'movie164', title: 'Underworld' },
    { id: 'movie165', title: 'The Descent Part 2' },
    { id: 'movie166', title: 'The Strangers' },
    { id: 'movie167', title: '10 Cloverfield Lane' },
    { id: 'movie168', title: '30 Days of Night' },
    { id: 'movie169', title: 'The Last Exorcism' },
    { id: 'movie170', title: 'The Curse of La Llorona' },
    { id: 'movie171', title: 'The Witching Hour' },
    { id: 'movie172', title: 'The Last House on the Left' },
    { id: 'movie173', title: 'The Babadook' },
    { id: 'movie174', title: 'The Night Stalker' },
    { id: 'movie175', title: 'The Taking of Deborah Logan' },
    { id: 'movie176', title: 'The Cabin in the Woods' },
    { id: 'movie177', title: 'Fright Night (2011)' },
    { id: 'movie178', title: 'Scare Campaign' },
    { id: 'movie179', title: 'The Luring' },
    { id: 'movie180', title: 'Malignant' },
    { id: 'movie181', title: '1922' },
    { id: 'movie182', title: 'The Evil Within' },
    { id: 'movie183', title: 'Ratter' },
    { id: 'movie184', title: 'The Exorcist III' },
    { id: 'movie185', title: 'The Poughkeepsie Tapes' },
    { id: 'movie186', title: 'Lights Out' },
    { id: 'movie187', title: 'The Haunting of Julia' },
    { id: 'movie188', title: 'The Midnight Man' },
    { id: 'movie189', title: 'I Am Not a Serial Killer' },
    { id: 'movie190', title: 'The Uninvited' },
    { id: 'movie191', title: 'The Snowtown Murders' },
    { id: 'movie192', title: 'The Wailing' },
    { id: 'movie193', title: 'The Blood Lands' },
    { id: 'movie194', title: 'The Devil\'s Rejects' },
    { id: 'movie195', title: 'The Dead Don\'t Die' },
    { id: 'movie196', title: 'The House at the End of the Street' },
    { id: 'movie197', title: 'The Devil\'s Candy' },
    { id: 'movie198', title: 'The Descent' },
    { id: 'movie199', title: 'The Hunt' },
    { id: 'movie200', title: 'The Blackcoat\'s Daughter' },
    { id: 'movie201', title: 'The Last Witch Hunter' },
    { id: 'movie202', title: 'The Hollow' },
    { id: 'movie203', title: 'The Hallow' },
    { id: 'movie204', title: 'The Exorcism of Anna Ecklund' },
    { id: 'movie205', title: 'The Curse of Chucky' },
    { id: 'movie206', title: 'The Killing of Two Lovers' },
    { id: 'movie207', title: 'It Follows' },
    { id: 'movie208', title: 'Incident in a Ghostland' },
    { id: 'movie209', title: 'Ready or Not' },
    { id: 'movie210', title: 'The Lodge' },
    { id: 'movie211', title: 'The Curse of La Llorona' },
    { id: 'movie212', title: 'Girl on the Third Floor' },
    { id: 'movie213', title: 'The Dark and the Wicked' },
    { id: 'movie214', title: 'The Seventh Day' },
    { id: 'movie215', title: 'Antlers' },
    { id: 'movie216', title: 'The Forever Purge' },
    { id: 'movie217', title: 'Come Play' },
    { id: 'movie218', title: 'No One Gets Out Alive' },
    { id: 'movie219', title: 'Last Night in Soho' },
    { id: 'movie220', title: 'The Power' },
    { id: 'movie221', title: 'The Night House' },
    { id: 'movie222', title: 'Fear Street Part One: 1994' },
    { id: 'movie223', title: 'Fear Street Part Two: 1978' },
    { id: 'movie224', title: 'Fear Street Part Three: 1666' },
    { id: 'movie225', title: 'The Conjuring 3: The Devil Made Me Do It' },
    { id: 'movie226', title: 'The Night Stalker' },
    { id: 'movie227', title: 'The Girl in the Basement' },
    { id: 'movie228', title: 'The Night House' },
    { id: 'movie229', title: 'The Vigil' },
    { id: 'movie230', title: 'Hellbender' },
    { id: 'movie231', title: 'Fresh' },
    { id: 'movie232', title: 'The Black Phone' },
    { id: 'movie233', title: 'X' },
    { id: 'movie234', title: 'Pearl' },
    { id: 'movie235', title: 'Bodies Bodies Bodies' },
    { id: 'movie236', title: 'Smile' },
    { id: 'movie237', title: 'Malignant' },
    { id: 'movie238', title: 'Sissy' },
    { id: 'movie239', title: 'You Won\'t Be Alone' },
    { id: 'movie240', title: 'Hatching' },
    { id: 'movie241', title: 'Men' },
    { id: 'movie243', title: 'The Sadness' },
    { id: 'movie244', title: 'Nope' },
    { id: 'movie245', title: 'The Invitation' },
    { id: 'movie246', title: 'Skinamarink' },
    { id: 'movie247', title: 'Barbarian' },
    { id: 'movie248', title: 'Talk to Me' },
    { id: 'movie249', title: 'The Menu' },
    { id: 'movie250', title: 'Evil Dead Rise' },
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
