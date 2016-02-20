

var bio = {
	'name': 'Mark Hsu',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '(650)-380-4377',
		'email': 'mark.g.hsu@gmail.com',
		'github': 'markghsu',
		'twitter': 'http://twitter.com/markghsu',
		'location': 'Tustin, CA'
	},
	'welcomeMessage': 'Hello World!',
	'skills':['php','javascript','C#','HTML','CSS'],
	'bioPic':'images/me.jpg',
	'display': function f(){
		$('#topContacts').prepend(HTMLemail.replace("%data%", this.contacts.email));
		$('#topContacts').prepend(HTMLmobile.replace("%data%", this.contacts.mobile));
		$('#topContacts').prepend(HTMLgithub.replace("%data%", this.contacts.github));
		$('#topContacts').prepend(HTMLtwitter.replace("%data%", this.contacts.twitter));
		$('#topContacts').prepend(HTMLlocation.replace("%data%", this.contacts.location));
		$('#header').prepend(HTMLheaderRole.replace("%data%", this.role));
		$('#header').prepend(HTMLheaderName.replace("%data%", this.name));
		$('#header').append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
		$('#header').append(HTMLbioPic.replace("%data%", this.bioPic));
		$('#header').append(HTMLskillsStart);
		$.each(this.skills,function f(index,value){$('#skills').append(HTMLskills.replace("%data%", value));});
		$('#footerContacts').append(HTMLemail.replace("%data%", this.contacts.email));
		$('#footerContacts').append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$('#footerContacts').append(HTMLgithub.replace("%data%", this.contacts.github));
		$('#footerContacts').append(HTMLtwitter.replace("%data%", this.contacts.twitter));
		$('#footerContacts').append(HTMLlocation.replace("%data%", this.contacts.location));
	}
};

var projects = {
	'projects': [{
		 'title': 'TMK Keyboard',
		 'dates': 'Jun. - Aug. 2015',
		 'description': 'Created a mechanical keyboard from scratch. Ordered laser cut acrylic, soldered diodes to keys and connected to Teensy board. Used https://github.com/tmk/tmk_keyboard firmware to control/map keys.',
		 'images': ['images/image1.jpg','images/image2.jpg']
	}],
	'display': function f(){
		$.each(this.projects, function f(index,value){
			var myhtml = $.parseHTML(HTMLprojectStart);
			$(myhtml).append(HTMLprojectTitle.replace('%data%', value.title));
			$(myhtml).append(HTMLprojectDates.replace('%data%', value.dates));
			$(myhtml).append(HTMLprojectDescription.replace('%data%', value.description));
			$.each(value.images, function f(ind,img){
				$(myhtml).append(HTMLprojectImage.replace('%data%', img));
			});
			$('#projects').append(myhtml);
		});
	}
};

var education = {
	'schools': [{
		 'name': 'UCLA',
		 'location': 'Los Angeles, CA',
		 'degree': 'B.S.',
		 'majors': ['Mechanical Engineering'],
		 'dates': '2011',
		 'url': 'http://ucla.edu'
		}],
	'onlineCourses': [{
		 'title': 'Front End Web Developer',
		 'school': 'Udacity',
		 'date': 'ongoing',
		 'url': 'http://udacity.com'
		}],
	'display': function f() {
		$.each(this.schools, function f(index, value){
			var myhtml = $.parseHTML(HTMLschoolStart);
			$(myhtml).append(HTMLschoolName.replace('%data%', value.name) + HTMLschoolDegree.replace('%data%', value.degree));
			$(myhtml).append(HTMLschoolDates.replace('%data%', value.dates));
			$(myhtml).append(HTMLschoolLocation.replace('%data%', value.location));
			$(myhtml).append(HTMLschoolMajor.replace('%data%', value.majors[0]));
			$('#education').append(myhtml);
		});
		if(this.onlineCourses.length) {
			$('#education').append(HTMLonlineClasses);
			$.each(this.onlineCourses, function f(index, value){
				var myhtml = $.parseHTML(HTMLschoolStart);
				$(myhtml).append(HTMLonlineTitle.replace('%data%', value.title) + HTMLonlineSchool.replace('%data%', value.school));
				$(myhtml).append(HTMLonlineDates.replace('%data%', value.date));
				$(myhtml).append(HTMLonlineURL.replace('%data%', value.url));
				$('#education').append(myhtml);
			});
		}
	}
};

var work = {
	'jobs': [{
		 'employer': 'MeridianLink',
		 'title': 'Software Automation Engineer',
		 'location': 'Costa Mesa, CA',
		 'dates': 'Aug. 2012 - Nov. 2015',
		 'description': 'Used rule-based logic programming language to create mortgage programs within company software. Additionally created small C# programs to download rate sheets from investor websites.'
		}],
	'display': function f(){
		$.each(this.jobs, function f(index,value){
			var myhtml = $.parseHTML(HTMLworkStart);
			$(myhtml).append(HTMLworkEmployer.replace('%data%', value.employer) + HTMLworkTitle.replace('%data%', value.title));
			$(myhtml).append(HTMLworkDates.replace('%data%', value.dates));
			$(myhtml).append(HTMLworkLocation.replace('%data%', value.location));
			$(myhtml).append(HTMLworkDescription.replace('%data%', value.description));
			$('#workExperience').append(myhtml);
		});
	}
};

function inName(str){
	var arr = str.split(' ');
	return arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() + ' ' + arr[1].toUpperCase();
}
//$('#main').append(internationalizeButton)

bio.display();
work.display();
projects.display();
education.display();

