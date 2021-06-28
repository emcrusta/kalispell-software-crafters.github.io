// handles keypresses for accessibility

function handleClick(e){
    if (e.type === 'keypress'){
        let code = e.keyCode;
        if((code === 32)|| (code === 13)){
			console.log('we made it!!')
            return true;
        }
    }
    else {
        return false;
    }
}

document.addEventListener('keypress', handleClick);

const hamburgerMenu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

let menuOpen = false;

function toggleMenu() {
	if (!menuOpen) {
		hamburgerMenu.classList.add('open');
		nav.classList.add('visible');
		menuOpen = true;
	} else {
		hamburgerMenu.classList.remove('open');
		nav.classList.remove('visible');
		menuOpen = false;
	}
}

hamburgerMenu.addEventListener('click', toggleMenu);

let currentProfile = document.querySelector(
	'.profile--selected'
);
const orgName = document.getElementById('about__name');
const orgAbout = document.getElementById('about__desc');
const orgPhoto = document.getElementById('about__photo');

const orgProfiles = document.querySelectorAll('.profile');

// Add event listener to profiles
for (let i = 0; i < orgProfiles.length; i++) {
	orgProfiles[i].addEventListener('click', selectProfile);
	orgProfiles[i].addEventListener('keypress', (e) => {
		if (handleClick(e)) {
			selectProfile(e);
		}
	});
}

// Function to select organizer profile -- updates from organizers data object
function selectProfile(e) {
	let currentProfileId = e.currentTarget.id;

	if (organizers[currentProfileId]) {
		// Remove default highlighted profile
		currentProfile.classList.remove('profile--selected');
		// Update current profile to be highlighted
		currentProfile = document.querySelector(
			`#${currentProfileId}`
		);
		currentProfile.classList.add('profile--selected');

		// Update about section content
		orgName.textContent = organizers[currentProfileId].name;
		orgAbout.textContent = organizers[currentProfileId].about;
		orgPhoto.src = organizers[currentProfileId].profilePhoto;
		orgPhoto.alt = `Kalispell Software Crafters organizer ${organizers[currentProfileId].name}`;
		}
		// else {
	// 	alert('Organizer is not found.');
	// }
}

const organizers = {
	Travis1: {
		id: 1,
		name: 'Travis Craft',
		about: "I'm a Flathead native and remote software engineer. I want to connect with others to talk about software development and engineering. I first learned about software craftsmanship in the Fall of 2017 which led me to create this group. I've learned a lot along the way!",
		profilePhoto:
			'./imgs/travis.jpg'
	},
	Sam2: {
		id: 2,
		name: 'Sam Nordlinger',
		about: 'Sam is a software developer currently working for Best Buy. Previously a resident of Flathead Valley, Sam now joins us remotely from Seattle. His interests include programming languages, functional programming, concurrency, and rollercoasters.',
		profilePhoto:
			'./imgs/sam.jpg'
	},
	Skyler3: {
		id: 3,
		name: 'Skyler Bexten',
		about: 'Flathead native with computer science degree from UM. Fell in love with programming in a Java course. Likes JavaScript, test-driven development and plays with Haskell on the side. Reads too many books on the history of computer science and too much manga.',
		profilePhoto:
			'./imgs/skyler.jpg'
	}
};
